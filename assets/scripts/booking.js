function sendMail(contactForm){
    emailjs.send("gmail","patrickMail", {
        "from_name": contactForm.name.value,
        "last_name": contactForm.lastName.value,
        "from_email": contactForm.mail.value
    })
    .then(
        function(response){
            console.log("yes", response)
        },
        function(error){
            console.log("nooooo",error)
        }
    );
    return false;
}

console.log("hello")