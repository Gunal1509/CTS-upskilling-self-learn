const form = document.getElementById("regForm");

form.addEventListener("submit", function(event)
{
    event.preventDefault(); // stops page reload

    const elements = form.elements;

    const name = elements.name.value.trim();
    const email = elements.email.value.trim();
    const eventSelected = elements.event.value;

    let isValid = true;

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("eventError").innerText = "";

    // Name validation
    if(name === "")
    {
        document.getElementById("nameError").innerText =
            "Name is required";
        isValid = false;
    }

    // Email validation
    if(email === "" || !email.includes("@"))
    {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        isValid = false;
    }

    // Event validation
    if(eventSelected === "")
    {
        document.getElementById("eventError").innerText =
            "Please select an event";
        isValid = false;
    }

    // Success
    if(isValid)
    {
        alert(
            `Registered Successfully!\nName: ${name}\nEvent: ${eventSelected}`
        );

        form.reset();
    }
});