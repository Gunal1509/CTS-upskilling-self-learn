function loadEvents()
{
    document.getElementById(
        "spinner"
    ).style.display = "block";

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    .then(response => response.json())

    .then(data => {

        displayEvents(data);

        document.getElementById(
            "spinner"
        ).style.display = "none";

    })

    .catch(error => {

        console.log(error);

        document.getElementById(
            "spinner"
        ).style.display = "none";

    });
}

function displayEvents(events)
{
    const container =
        document.getElementById(
            "eventsContainer"
        );

    container.innerHTML = "";

    events.forEach(event => {

        container.innerHTML += `
        
        <div class="card p-3 mb-3">

            <h5>${event.name}</h5>

            <p>${event.email}</p>

        </div>
        `;
    });
}