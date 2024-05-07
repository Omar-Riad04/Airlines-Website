function hideReturn() {
    document.getElementById("returnDate").style.display = "none";
    document.getElementById("returnTime").style.display = "none";
    document.getElementById("return-date-label").style.display="none";
    document.getElementById("return-time-label").style.display="none";
}

function showReturn() {
    document.getElementById("returnDate").style.display ="inline-block";
    document.getElementById("returnTime").style.display ="inline-block";
    document.getElementById("return-date-label").style.display ="inline-block";
    document.getElementById("return-time-label").style.display ="inline-block";
}
function validateBookingForm() {
    let x = document.getElementById("From").value;
    let y = document.getElementById("To").value;
    let num = document.getElementById("input-group1").value;
    let num2 = document.getElementById("input-group2").value;
    let num3 = document.getElementById("input-group3").value;
    /*let pre=document.getElementById("input-group-preffered-1").value;*/
    let Departure=document.getElementById("Departure-Date").value;
    let ReturnDate=document.getElementById("returnDate").value;
    let radiobtn=document.getElementById("radio-button2").checked;
    let DepartureTime=document.getElementById("Departure-time").value;
    let ReturnTime=document.getElementById("returnTime").value;
    let errMeg = "";

    if (x == "From" || y == "To") {
        errMeg += "Please choose both the origin and destination countries\n";
    }
    if (x == y) {
        errMeg += "The Origin and Destination must be different!\n";
    }
    if(Departure>=ReturnDate && radiobtn )
    {
        errMeg += "Please choose the correct Departure and return date\n";
    }
    if(DepartureTime==""){
        errMeg += "Please choose the Departure Time\n";
    } 
    if(ReturnTime=="" && radiobtn){
        errMeg += "Please choose the Return Time\n";
    }
    if (num < 0) {
        errMeg += "Error choosing ticket number for adult\n ";
    }
    if (num2 < 0) {
        errMeg += "Error choosing ticket number for children\n";
    }
    if (num3 < 0) {
        errMeg += "Error choosing ticket number for infant\n";
    }
    if (num == "" && num2 == "" && num3=="") {
        errMeg += "Please choose the amount of tickets\n";
    }
    if (num == "0" && num2 == "0" && num3=="0") {
        errMeg += "Please choose the amount of tickets\n";
    }
    /*if (pre == "") {
        errMeg += "Error Choose Specific Airline \n";
    }
    */
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    alert("You Must sign-in First");
    return false;
}
function validateBookingForm2() {
    let x = document.getElementById("From").value;
    let y = document.getElementById("To").value;
    let num = document.getElementById("input-group1").value;
    let num2 = document.getElementById("input-group2").value;
    let num3 = document.getElementById("input-group3").value;
    /*let pre=document.getElementById("input-group-preffered-1").value;*/
    let Departure=document.getElementById("Departure-Date").value;
    let ReturnDate=document.getElementById("returnDate").value;
    let radiobtn=document.getElementById("radio-button2").checked;
    let DepartureTime=document.getElementById("Departure-time").value;
    let ReturnTime=document.getElementById("returnTime").value;
    let errMeg = "";

    if (x == "From" || y == "To") {
        errMeg += "Please choose both the origin and destination countries\n";
    }
    if (x == y) {
        errMeg += "The Origin and Destination must be different!\n";
    }
    if(Departure>=ReturnDate && radiobtn )
    {
        errMeg += "Please choose the correct Departure and return date\n";
    }
    if(DepartureTime==""){
        errMeg += "Please choose the Departure Time\n";
    } 
    if(ReturnTime=="" && radiobtn){
        errMeg += "Please choose the Return Time\n";
    }
    if (num < 0) {
        errMeg += "Error choosing ticket number for adult\n ";
    }
    if (num2 < 0) {
        errMeg += "Error choosing ticket number for children\n";
    }
    if (num3 < 0) {
        errMeg += "Error choosing ticket number for infant\n";
    }
    if (num == "" && num2 == "" && num3=="") {
        errMeg += "Please choose the amount of tickets\n";
    }
    if (num == "0" && num2 == "0" && num3=="0") {
        errMeg += "Please choose the amount of tickets\n";
    }
    /*if (pre == "") {
        errMeg += "Error Choose Specific Airline \n";
    }
    */
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }

    window.location.href = "bookTickets.html";
    return false;
}
function validatepay(){
    let flightNum=["722","481","395"];
    const random=Math.floor(Math.random() * flightNum.length);
    let flightNumber = flightNum[random];
    let fn = document.getElementById("full").value;
    let el = document.getElementById("email").value;
    let add = document.getElementById("addd").value;
    let c = document.getElementById("city").value; 
    let st = document.getElementById("state").value;
    let zip = document.getElementById("code").value;
    let noc = document.getElementById("nameon").value;
    let ccn = document.getElementById("ccnn").value; 
    let em = document.getElementById("exmounth").value;
    let ey= document.getElementById("exy").value;
    let cvv = document.getElementById("cvcvc").value;
    let errMeg = "";
    if (!validateEmail(el)) {
        errMeg += "Error Please Enter a Valid Email\n";
    }
    if (!validateName(fn)) {
        errMeg += "Error Please Enter a Valid Name\n";
    }
    if (fn=='') {
        errMeg += "Error Please Enter Your Name\n";
    }
    if (el=='') {
        errMeg += "Error Please Enter Your Email\n";
    }
    if (add=='') {
        errMeg += "Error Please Enter Your Address\n";
    }
    if (c=='') {
        errMeg += "Error Please Enter Your City\n";
    }
    if (st=='') {
        errMeg += "Error Please Enter Your State\n";
    }
    if (zip < 0 || zip==0) {
        errMeg += "Error Please Enter correct Zip Code\n ";
    }
    if (zip=='') {
        errMeg += "Error Please Enter Zip Code\n";
    }
    if (noc=='') {
        errMeg += "Error Please Enter Name On Card\n";
    }
    if (ccn<=0) {
        errMeg += "Error Please Enter Correct Credit Card Number\n";
    }
    else if (isNaN(ccn)) {
        errMeg += "Error Please Enter a Valid Credit Card Number\n";
    }
    if (ccn=='') {
        errMeg += "Error Please Enter Credit Card Number\n";
    }
    if (em < 0 || em==0) {
        errMeg += "Error Please Enter correct Exp Month\n ";
    }
    if (em=='') {
        errMeg += "Error Please Enter Exp Month\n";
    }
    if (ey < 0 || ey==0) {
        errMeg += "Error Please Enter correct Exp year\n ";
    }
    if (ey=='') {
        errMeg += "Error Please Enter Exp Year\n";
    }
    if (cvv < 0 || cvv==0) {
        errMeg += "Error Please Enter correct CVV\n ";
    }
    if (cvv=='') {
        errMeg += "Error Please Enter CVV\n";
    }
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    if (fn == "Omar") {
        TicketNumber = "4111";
    } else if (fn == "Mohsen") {
        TicketNumber = "5123";
    } else if (fn =="Cristiano") {
        TicketNumber = "6944";
    }
    else {
        alert("Error Unknown name Payment failed");
        return false;
    }
    alert("Payment succesfully\n" + "Your ticket number is:"+TicketNumber+"\n"+"Your flight Number is:"+flightNumber)
    window.location.href = "index.html";
    return false;
}