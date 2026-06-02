// Event list
let events = [
    { name: "Music Festival", category: "Music", seats: 20 },
    { name: "Coding Workshop", category: "Education", seats: 10 },
    { name: "Sports Meet", category: "Sports", seats: 0 }
];


// DEFAULT PARAMETERS + ADD EVENT
function addEvent(name = "Unknown", category = "General", seats = 0)
{
    const newEvent = { name, category, seats };

    events.push(newEvent);

    displayEvents(events);
}


// READ FROM UI
function addEventFromUI()
{
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const seats = parseInt(document.getElementById("seats").value);

    addEvent(name, category, seats);
}


// SPREAD OPERATOR + FILTER
function showAvailableEvents()
{
    const availableEvents =
        [...events].filter(({ seats }) => seats > 0);

    displayEvents(availableEvents);
}


// SHOW ALL EVENTS
function showAllEvents()
{
    displayEvents([...events]);
}


// DESTRUCTURING + DISPLAY
function displayEvents(eventList)
{
    const container = document.getElementById("eventContainer");

    container.innerHTML = "";

    eventList.forEach(({ name, category, seats }) => {

        container.innerHTML += `
            <div class="card p-3 mb-3 shadow-sm">

                <h5>${name}</h5>
                <p>Category: ${category}</p>
                <p>Seats: ${seats}</p>

            </div>
        `;
    });
}


// INITIAL LOAD
displayEvents(events);