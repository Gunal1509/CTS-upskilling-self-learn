const form = document.getElementById("regForm");
const statusBox = document.getElementById("status");

form.addEventListener("submit", function(event)
{
    event.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        event: form.event.value
    };

    statusBox.innerText = "Submitting...";
    statusBox.className = "text-warning fw-bold";

// Simulated delay using setTimeout
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        .then(response => {

            if(!response.ok)
            {
                throw new Error("Server Error");
            }

            return response.json();
        })

        .then(result => {

            console.log(result);

            statusBox.innerText =
                "Registration Successful ✅";

            statusBox.className =
                "text-success fw-bold";
        })

        .catch(error => {

            console.log(error);

            statusBox.innerText =
                "Registration Failed ❌";

            statusBox.className =
                "text-danger fw-bold";
        });

    }, 2000); // 2 second delay simulation
});