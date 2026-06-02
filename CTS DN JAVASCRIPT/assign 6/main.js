// Array of Events

let events = [];

// Add Events using push()

events.push({
    name: "Baking",
    category: "Workshop"
});

events.push({
    name: "Music Festival",
    category: "Music"
});

events.push({
    name: "Dance Show",
    category: "Music"
});

events.push({
    name: "Coding Workshop",
    category: "Education"
});

// Display All Events

displayEvents(events);

// Filter Music Events

function showMusicEvents()
{
    const musicEvents =
        events.filter(event =>
            event.category === "Music"
        );

    displayEvents(musicEvents);
}

// Map for Formatting

function displayEvents(eventArray)
{
    const cards =
        eventArray.map(event =>

            `
            <div class="card p-3 mb-3">

                <h5>
                    ${event.category} on ${event.name}
                </h5>

            </div>
            `
        );

    document.getElementById("eventList").innerHTML =
        cards.join("");
}