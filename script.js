const scriptURL = 'https://script.google.com/macros/s/AKfycby14guX3CH8WQGu1JzAHekENlG1m-11qbCm6-Ua-jGfelb59DOKvkZ8lXIZXqJvJouYRg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const loader = document.getElementById("loader");

form.addEventListener('submit', e => {
    e.preventDefault();

    // Show loader and hide any previous message
    loader.style.display = "block";
    msg.style.display = "none";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Hide loader
            loader.style.display = "none";

            // Show success message
            msg.innerHTML = "Message sent SUCCESSFULLY";
            msg.style.display = "block";

            // Clear the message after 5 seconds
            setTimeout(() => {
                msg.innerHTML = "";
                msg.style.display = "none";
            }, 5000);

            // Reset the form
            form.reset();
        })
        .catch(error => {
            // Hide loader
            loader.style.display = "none";

            // Show error message
            msg.innerHTML = "Error! " + error.message;
            msg.style.display = "block";
        });
});
