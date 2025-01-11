function submit(){
    let fullName = document.getElementById("userName").value;
    let userEmail = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value
    
    let params = {
        full_name: fullName,
        subject: subject,
        email: userEmail,
        message: message
    }
    emailjs.send("service_fazu08a","template_03yzz97", params).then((res) => {
         alert("Query Sent");
         console.log(res)
    })
    .catch((error) => {console.log(error)})  
}