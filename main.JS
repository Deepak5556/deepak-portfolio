function sendMail() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the user's input from the form
    let name = document.getElementById('fullname').value;
    let email = document.getElementById('email_id').value;
    let message = document.getElementById('message_new').value;

    // Check if any of the fields are empty
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Prepare the email parameters
    let params = {
        from_name: name,
        reply_to: email,
        message: `Email: ${email}\n\n${message}`, // Include the email address in the message body
    };

    // Send the email using EmailJS
    emailjs.send('service_e8xqd4q', 'template_mv7g8br', params)
        .then(function () {
            alert('Email sent successfully!');
            // Clear the form after sending the email
            document.getElementById('fullname').value = '';
            document.getElementById('email_id').value = '';
            document.getElementById('message_new').value = '';

            // Automatically hide the message after 3 seconds
            setTimeout(function () {
                alert.style.display = 'none';
            }, 3000); // 3000 milliseconds = 3 seconds
        }, function (error) {
            alert('Oops, something went wrong. Please try again later.');
            console.error('EmailJS error:', error);
        });
}
