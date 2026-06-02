// Event Constructor

function Event(name, category, seats)
{
    this.name = name;
    this.category = category;
    this.seats = seats;
}

// Prototype Method

Event.prototype.checkAvailability = function()
{
    if(this.seats > 0)
    {
        return "Seats Available";
    }
    else
    {
        return "Event Full";
    }
};

// Create Objects

const event1 = new Event(
    "Music Festival",
    "Music",
    20
);

const event2 = new Event(
    "Sports Meet",
    "Sports",
    0
);

// Check Availability

console.log(event1.checkAvailability());

console.log(event2.checkAvailability());

// Display Object Keys and Values

let output = "";

Object.entries(event1).forEach(([key, value]) => {

    output += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
    `;

});

document.getElementById("eventData").innerHTML =
output;