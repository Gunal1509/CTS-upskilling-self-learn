const events = [
    {
        name: "Music Festival",
        seats: 5
    },
    {
        name: "Coding Workshop",
        seats: 10
    },
    {
        name: "Dance Show",
        seats: 3
    }
];

const container =
    document.querySelector("#eventsContainer");

displayEvents();

function displayEvents()
{
    container.innerHTML = "";

    events.forEach((event, index) => {

        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";

        const card = document.createElement("div");
        card.className = "card p-3 shadow";

        const title = document.createElement("h5");
        title.textContent = event.name;

        const seats = document.createElement("p");
        seats.textContent =
            `Available Seats: ${event.seats}`;

        const registerBtn =
            document.createElement("button");

        registerBtn.className =
            "btn btn-primary me-2";

        registerBtn.textContent =
            "Register";

        registerBtn.onclick = function()
        {
            register(index);
        };

        const cancelBtn =
            document.createElement("button");

        cancelBtn.className =
            "btn btn-danger";

        cancelBtn.textContent =
            "Cancel";

        cancelBtn.onclick = function()
        {
            cancel(index);
        };

        card.appendChild(title);
        card.appendChild(seats);
        card.appendChild(registerBtn);
        card.appendChild(cancelBtn);

        col.appendChild(card);

        container.appendChild(col);
    });
}

function register(index)
{
    if(events[index].seats > 0)
    {
        events[index].seats--;

        displayEvents();
    }
    else
    {
        alert("No Seats Available");
    }
}

function cancel(index)
{
    events[index].seats++;

    displayEvents();
}