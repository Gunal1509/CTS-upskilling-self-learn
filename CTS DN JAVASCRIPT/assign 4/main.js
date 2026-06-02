let events = [];

/* Closure */
function registrationCounter()
{
    let total = 0;

    return function()
    {
        total++;
        return total;
    };
}

const counter = registrationCounter();

/* Add Event */

function addEvent(name, category, seats)
{
    events.push({
        name,
        category,
        seats
    });

    displayEvents();
}

/* Register User */

function registerUser(eventName)
{
    events.forEach(event => {

        if(event.name === eventName)
        {
            if(event.seats > 0)
            {
                event.seats--;

                const count = counter();

                alert(
                    `Registered Successfully!\nTotal Registrations: ${count}`
                );

                displayEvents();
            }
            else
            {
                alert("No Seats Available");
            }
        }

    });
}

/* Filter Events */

function filterEventsByCategory(category)
{
    return events.filter(event =>
        event.category.toLowerCase() ===
        category.toLowerCase()
    );
}

/* Higher Order Function */

function dynamicFilter(callback)
{
    return events.filter(callback);
}

/* Display Events */

function displayEvents()
{
    let output = "";

    events.forEach(event => {

        output += `
        <div class="card p-3 mb-2">

            <h5>${event.name}</h5>

            <p>
                Category: ${event.category}
            </p>
            <p>
                Seats Available: ${event.seats}
            </p>

            <button
                class="btn btn-primary"
                onclick="registerUser('${event.name}')">

                Register

            </button>

        </div>
        `;
    });

    document.getElementById("eventList").innerHTML = output;
}

/* Add Event From Form */

function addEventFromForm()
{
    const name =
        document.getElementById("eventName").value;

    const category =
        document.getElementById("category").value;

    const seats =
        parseInt(
            document.getElementById("seats").value
        );

    addEvent(name, category, seats);
}

/* Filter Button */

function showFilteredEvents()
{
    const category =
        document.getElementById("searchCategory").value;

    const filtered =
        filterEventsByCategory(category);

    let output = "";

    filtered.forEach(event => {

        output += `
        <div class="card p-3 mb-2">

            <h5>${event.name}</h5>

            <p>
                Category: ${event.category}
            </p>

            <p>
                Seats: ${event.seats}
            </p>

        </div>
        `;
    });

    document.getElementById("eventList").innerHTML = output;
}
addEvent("Music Festival", "Music", 20);

addEvent("Coding Workshop", "Education", 30);

addEvent("Dance Show", "Music", 10);