async function getAmenitiesWithReviews() {
    const restaurantNameInput = document.getElementById("restaurant-name-input");
    const postalcode = restaurantNameInput.value;

    if (postalcode == null || postalcode === "") {
        return [];
    }

    const response = await fetch('/get-amenities/' + postalcode);
    const amenities = await response.json();
    return amenities;
}

async function updateReviewTable() {
    const amenities = await getAmenitiesWithReviews();
    const reviewTable = document.getElementById('review-table-body');
    // Clear the table body before updating. (Otherwise the values will be duplicated)
    reviewTable.innerHTML = "";


    for (const amenity of amenities) {
        const tableRow = document.createElement('tr');

        const nameElement = document.createElement('td');
        nameElement.textContent = amenity['name'];

        const typeElement = document.createElement('td');
        typeElement.textContent = amenity['amenity']
            .replace('fast_food', 'Fast Food')
            .replace('restaurant', 'Restaurant')
            .replace('cafe', 'Cafe')
            .replace('bar', 'Bar')
            .replace('bbq', 'BBQ');

        const reviewsElement = document.createElement('td');
        const reviewsScrollableElement = document.createElement('div');
        reviewsScrollableElement.className = 'scrollable max-height-80';

        let reviewsHTML = '';

        if (amenity['reviews']) {
            for (const review of amenity['reviews']) {
                reviewsHTML += review + '<br/>';
            }
        }

        if (reviewsHTML === '') {
            reviewsHTML = 'Keine Reviews verfügbar'
        }

        reviewsScrollableElement.innerHTML = reviewsHTML;
        reviewsElement.appendChild(reviewsScrollableElement);


        // TODO: Handle reviews

        tableRow.appendChild(nameElement);
        tableRow.appendChild(typeElement);
        tableRow.appendChild(reviewsElement);

        reviewTable.appendChild(tableRow);
    }
}

updateReviewTable();