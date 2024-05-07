function validateadd(){
    let x =document.getElementById("ead").value;
    let y=document.getElementById("pad1").value;
    let errMeg = "";

    if (!validateEmail(x)) {
        errMeg += "Error Please Enter a Valid Email\n";

    }
    if(!validatePassword(y))
    {
        errMeg += "Error: Password must contain at least 8 characters and at least 1 uppercase letter.\n";
    }
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    alert("User Added succesfully")
    window.location.href = "UserCommands.html";
    return false;
}
function validateEdit(){
    let x =document.getElementById("ead1").value;
    let y=document.getElementById("pad2").value;
    let errMeg = "";

    if (!validateEmail(x)) {
        errMeg += "Error Please Enter a Valid Email\n";
    
    }
    if(!validatePassword(y))
        {
            errMeg += "Error: Password must contain at least 8 characters and at least 1 uppercase letter.\n";
        }
        if (errMeg !== "") {
            alert(errMeg);
            return false;
        }
    alert("User Edited succesfully")
    window.location.href = "UserCommands.html";
    return false;
}
function validateRemove(){
    alert("User Removed succesfully")
    window.location.href = "UserCommands.html";
    return false;
}

function validateaddf(){
    alert("Flight Added succesfully")
    window.location.href = "FlightCommands.html";
    return false;
}
function validateEditf(){
    alert("Flight Edited succesfully")
    window.location.href = "FlightCommands.html";
    return false;
}
function validateRemovef(){
    alert("Flight Removed succesfully")
    window.location.href = "FlightCommands.html";
    return false;
}