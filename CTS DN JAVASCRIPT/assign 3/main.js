const events = [
    {name:"Music Festival", date:"2026-08-15", seats:20},
    {name:"Old Workshop", date:"2025-01-10", seats:10},
    {name:"Sports Meet", date:"2026-09-01", seats:0}
];

const today = new Date();

events.forEach(event => {

    const eventDate = new Date(event.date);

    if(eventDate > today && event.seats > 0)
    {
       document.getElementById("eventss").innerHTML+= `
            <p>
                ${event.name} - ${event.date} - Seats: ${event.seats}
            </p>
        `; 
    
    }

});