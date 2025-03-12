document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default form submission behavior

        // Get input values
        const name = document.querySelector(".name").value.trim();
        const age = document.querySelector(".age").value.trim();
        const country = document.querySelector(".country").value.trim();

        // Validate input fields
        if (!name || !age || !country) {
            alert("Please fill out all fields.");
            return;
        }

        // Disable the button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.value = "Submitting...";

        // Add data to the table
        const table = document.querySelector("table");
        const newRow = table.insertRow(-1);
        newRow.innerHTML = `<td>${name}</td><td>${age}</td><td>${country}</td>`;

        // Reset form after submission
        form.reset();

        // Re-enable button after a short delay (1 second)
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.value = "Submit";
        }, 1000);
    });
});
