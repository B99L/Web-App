const submitReviewInput = document.getElementById("submit-review");
submitReviewInput.addEventListener("click", async (event) => {
    const amenityName = document.getElementById("amenity-name");
    const reviewInput = document.getElementById("review");

    const restaurantNameInput = document.getElementById("restaurant-name-input");
    const postalcode = restaurantNameInput.value;

    const review = reviewInput.value
    const name = amenityName.value
    let response = await fetch("/reviews", {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "review": review,
            "postalcode": postalcode,
        })
    })
    response = await response.json()
    if (response["error"] === null) {
        reviewInput.value = ""
    }

    await updateReviewTable();
});

