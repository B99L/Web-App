const searchButtonInput = document.getElementById("search-button");
let chart = null;

searchButtonInput.addEventListener("click", async (event) => {
    if (chart !== null) {
        // Clear the canvas.
        chart.clear();
        // Remove all event handlers on the chart.
        chart.destroy();
    }

    const restaurantNameInput = document.getElementById("restaurant-name-input");
    const postalcode = restaurantNameInput.value;

    const response = await fetch("/server-form-retrieve", {
        method: 'POST', body: JSON.stringify({"postalcode": postalcode})
    })
    const restaurantList = (await response.json())

    chart = generateChart(restaurantList);

    await updateReviewTable();
})

function generateChart(data) {
    const amenityCounts = data['amenityCounts'];
    const labels = Object.keys(amenityCounts);
    const dataPoints = Object.values(amenityCounts);
    const ctx = document.getElementById('myChart').getContext('2d');
    const ratioChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ //define one dataset
                //label of the dataset
                data: dataPoints,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(2, 200, 80, 1)',
                    'rgba(2, 300, 345, 123)'

                ],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(2, 200, 80, 1)',
                    'rgba(2, 300, 345, 123)'
                ],

                borderWidth: 1 //the width of the border around the bars
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {//one y scale that starts at zero
                x: {
                    ticks: {
                        color: "white"

                    }
                },
                y: {
                    ticks: {
                        color: "white"

                    },

                    beginAtZero: true,


                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    text: "Anzahl Lokale an dieser Postleitzahl",
                    display: true,
                    color: "white",
                    padding: 5,
                    fontSize: 18
                }

            }
        }
    });
    return ratioChart
}



