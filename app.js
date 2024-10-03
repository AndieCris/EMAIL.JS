   // Initialize EmailJS with your user ID
   (function(){
    emailjs.init("SOxjLOzfAT-XvjCU1");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_h5p19jz', 'template_pu4immw', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
