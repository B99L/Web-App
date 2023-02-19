# -*- coding: utf-8 -*-
import json
from flask import Flask, request, render_template
from pymongo import MongoClient

app = Flask(__name__, template_folder="templates", static_folder="static")
client = MongoClient(host="localhost", port=27017)
db = client["osm1"]  # auf osm ändern


@app.route('/server-form-retrieve', methods=['POST'])
def server_form_retrieve():
    app.logger.info('server-form-retrieve called')
    binary_string = request.data.decode()
    parsed_dict = json.loads(binary_string)
    postalcode = parsed_dict["postalcode"]
    cursor = db.amenities.find({"addr:postcode": postalcode})
    cursor_list = list(cursor)
    restaurants = json.dumps(cursor_list, default=str)
    # Parse the JSON string into a Python dictionary
    data = json.loads(restaurants)
    # Create a dictionary to store the counts of each amenity
    counts = {

        "cafe": 0,
        "restaurant": 0,
        "bar": 0,
        "fast_food": 0,
        "bbq": 0

    }

    # Iterate over the amenities array
    for amenity in data:
        # If the amenity has not been seen before, add it to the counts dictionary with a count of 1
        if amenity["amenity"] not in counts:
            counts[amenity["amenity"]] = 1
        # Otherwise, increment the existing count for the amenity
        else:
            counts[amenity["amenity"]] += 1
    # Print the counts dictionary to the console
    # return a JSON back to the client
    return {
        "amenities": restaurants,
        "amenityCounts": counts,
    }


@app.route('/get-amenities/<postalcode>')
def get_amenities_by_postalcode(postalcode):
    cursor = db.amenities.find({
        "addr:postcode": postalcode
    })

    amenities = list(cursor)
    return json.dumps(amenities, default=str)


@app.route('/reviews', methods=['POST'])
def save_review():
    binary_string = request.data.decode()
    parsed_dict = json.loads(binary_string)

    review = parsed_dict["review"]
    amenity_name = parsed_dict["name"]
    postalcode = parsed_dict["postalcode"]

    update = db.amenities.update_one(
        {
            "name": amenity_name,
            "addr:postcode": postalcode
        },
        {"$push": {"reviews": review}}
    )
    if update.modified_count == 0:
        return {"error": "Your amenity name input was wrong"}
    return {"review": review}


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    # app.run(host='0.0.0.0', port=5500)
