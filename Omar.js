function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    return hasMinLength && hasUppercase ;
}

function validateName(nameee){
    const namepattern = /^[A-Za-z\s]+$/;
    return namepattern.test(nameee)
}
function validateContact(){
    let name = document.getElementById("input-contact").value;
    let email = document.getElementById("input-contact-3").value;
    let phone = document.getElementById("input-contact-2").value;
    let message = document.getElementById("textarea-contact").value; 
    let errMeg = "";
    if (!validateEmail(email)) {
        errMeg += "Error Please Enter a Valid Email\n";
    }
    if (!validateName(name)) {
        errMeg += "Error Please Enter a Valid Name\n";
    }
    if (name=='') {
        errMeg += "Error Please Enter Your Name\n";
    }
    if (email=='') {
        errMeg += "Error Please Enter Your Email\n";
    }
    if (phone=='') {
        errMeg += "Error Please Enter Your Phone Number\n";
    }
    else if (isNaN(phone)) {
        errMeg += "Error Please Enter a Valid Phone Number\n";
    }
    if (message=='') {
        errMeg += "Error Please Enter a Message\n";
    }
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    alert("message sent succesfully")
}
function validateMybooking() {
    let x = document.getElementById("input-group1").value;

    if (x == "") {
        document.getElementById("empty-div").innerHTML = "Please Put a Ticket Number!";
        return false;
    }
    if (x == "4111") {
        window.location.href = "ticket.html?ticket=4111"; 
        return false;
    }
    if (x == "5123") {
        window.location.href = "ticket.html?ticket=5123"; 
        return false;
    }
    if (x == "6944") {
        window.location.href = "ticket.html?ticket=6944"; 
        return false;
    } else {
        document.getElementById("empty-div").innerHTML = "Please Put a Correct Ticket Number!";
        return false;
    }
}
var imageSources = ["./images/kevin-hackert-jO42qNF3DIQ-unsplash.jpg", "./images/kevin-hackert-jO42qNF3DIQ-unsplash.jpg", "./images/vecteezy_ai-generated-white-airplane-against-blue-sky_35831030.jpg" ,"./images/stephan-mahlke-_sV6KGUWfFo-unsplash.jpg"]
var index = 0;
window.onload=function(){
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("main-body").style.backgroundImage = `url(${imageSources[index]})` ;
  index++;
} , 4000);
}
window.onload=function()
{
    const Para = new URLSearchParams(window.location.search);
    const ticketNum = Para.get("ticket");
    if (ticketNum == "5123") {
        document.getElementById("tic-name").innerHTML = "5123";
        document.getElementById("pass-name").innerHTML = "Mohsen";
        document.getElementById("flight-idd").innerHTML = "481";
        document.getElementById("classss").innerHTML = "Economy Class" ;
        document.getElementById("gatee").innerHTML = "Gate 6";
    }
    if (ticketNum == "6944") {
        document.getElementById("tic-name").innerHTML = "6944";
        document.getElementById("pass-name").innerHTML = "Cristiano";
        document.getElementById("flight-idd").innerHTML = "395";
        document.getElementById("classss").innerHTML = "Business Class";
        document.getElementById("gatee").innerHTML = "Gate 9";
    }
}
function validateMystatus(){
    let x = document.getElementById("input-group1").value;
    if (x === "") 
    {
        document.getElementById("empty-div").innerHTML = "Please Put a Flight Number!";
    return false;
    }
    if(x=="722"){
        window.location.href = "status.html?status=722"; 
    return false;
        }
    if(x=="481"){
        window.location.href = "status.html?status=481"; 
        return false;
        }
     if(x=="395"){
        window.location.href = "status.html?status=395"; 
        return false;
        }
        else
        {
            document.getElementById("empty-div").innerHTML = "Please Put a Correct Flight Number!";
            return false; 
        }
}
window.onload=function()
{
const Para = new URLSearchParams(window.location.search);
const flightNum = Para.get("status");
if (flightNum == "481") {
    document.getElementById("flightt-num").innerHTML = "481";
    document.getElementById("Origin-id").innerHTML = "Kuwait";
    document.getElementById("Destination-id").innerHTML = "Saudi Arabia";
    document.getElementById("Departure-time-idd").innerHTML = "7:00PM";
    document.getElementById("Arrival-time-idd").innerHTML = "10:00PM";
    document.getElementById("statuss-idd").innerHTML = "Delayed";
}
if (flightNum == "395") {
    document.getElementById("flightt-num").innerHTML = "395";
    document.getElementById("Origin-id").innerHTML = "Kuwait";
    document.getElementById("Destination-id").innerHTML = "Egypt";
    document.getElementById("Departure-time-idd").innerHTML = "6:30pm";
    document.getElementById("Arrival-time-idd").innerHTML = "8:30pm";
    document.getElementById("statuss-idd").innerHTML = "Active";
}
}