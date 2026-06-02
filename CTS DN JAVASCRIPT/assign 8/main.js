const events = [

    {
        name: "Music Festival",
        category: "Music",
        seats: 5
    },

    {
        name: "Coding Workshop",
        category: "Education",
        seats: 10
    },

    {
        name: "Sports Meet",
        category: "Sports",
        seats: 8
    }

];

displayEvents(events);

/* Display Events */

function displayEvents(eventList)
{
    const container =
        document.getElementById("eventsContainer");

    container.innerHTML = "";

    eventList.forEach((event, index) => {

        container.innerHTML += `
        
        <div class="card p-3 mb-3">

            <h5>${event.name}</h5>

            <p>
                Category: ${event.category}
            </p>

            <p>
                Seats: ${event.seats}
            </p>

            <button
                class="btn btn-primary"
                onclick="register(${index})">

                Register

            </button>

        </div>
        `;
    });
}

/* onclick */

function register(index)
{
    if(events[index].seats > 0)
    {
        events[index].seats--;

        alert(
            "Registration Successful"
        );

        displayEvents(events);
    }
    else
    {
        alert("No Seats Available");
    }
}

/* onchange */

function filterByCategory()
{
    const category =
        document.getElementById(
            "categoryFilter"
        ).value;

    if(category === "All")
    {
        displayEvents(events);
        return;
    }

    const filtered =
        events.filter(event =>
            event.category === category
        );

    displayEvents(filtered);
}

/* keydown */

document
.getElementById("searchBox")
.addEventListener("keydown", function()
{
    const text =
        this.value.toLowerCase();

    const result =
        events.filter(event =>
            event.name
            .toLowerCase()
            .includes(text)
        );

    displayEvents(result);
});