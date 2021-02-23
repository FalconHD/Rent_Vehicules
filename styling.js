

function backButton(item){
    const itemM = item.querySelector(".mask")
    itemM.classList.add("active")
}

function removeActive(item){
    const itemM = item.querySelector(".mask")
    itemM.classList.remove("active")
}

//contact page => 

var send = document.querySelector("#send")
var nameInput = document.querySelector("#nameInput")
var emailInput = document.querySelector("#emailInput")
var messageInput = document.querySelector("#messageInput")
//
var handleName = document.querySelector("#handname")
var handleEMail = document.querySelector("#handEmail")
var handleMessage = document.querySelector("#handMessage")
var firstValidate = false
var secondValidate = false
var thirdValidate = false

//
var popupContainer = document.querySelector(".contactpop")
var closeForm = document.querySelector("#closeForm i")
var popUp = document.querySelector(".popupContainer ul")

console.log(popUp);
var contactDetails = {
    fullName : "",
    email : "",
    mesage : ""
}



nameInput.addEventListener("blur", function () {
    if(nameInput.value == ""){
        nameInput.classList.add("error")
        handleName.classList.add("error")
        send.setAttribute("disabled" , true)
    }else{
        nameInput.classList.remove("error")
        handleName.classList.remove("error")
        nameInput.classList.add("succes")
        handleName.classList.add("succes")
        firstValidate = true
        send.removeAttribute("disabled")
        contactDetails.fullName = "Full Name : "+nameInput.value
    }
}); 


emailInput.addEventListener("blur", function () {
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(emailInput.value)){
        emailInput.classList.add("error")
        handleEMail.classList.add("error")
        send.setAttribute("disabled" , true)
    }else{
        emailInput.classList.remove("error")
        handleEMail.classList.remove("error")
        emailInput.classList.add("succes")
        handleEMail.classList.add("succes")
        secondValidate = true
        send.removeAttribute("disabled")
        contactDetails.email = "Email : "+emailInput.value
    }
}); 


messageInput.addEventListener("blur", function () {
    if(messageInput.value == ""){
        messageInput.classList.add("error")
        handleMessage.classList.add("error")
        send.setAttribute("disabled" , true)
    }else{
        messageInput.classList.remove("error")
        handleMessage.classList.remove("error")
        messageInput.classList.add("succes")
        handleMessage.classList.add("succes")
        thirdValidate = true
        send.removeAttribute("disabled")
        contactDetails.mesage = "Your Massege : "+messageInput.value
    }
}); 



send.addEventListener("click", function (event) {
    event.preventDefault();
    if(!secondValidate || !firstValidate || !thirdValidate){
        send.setAttribute("disabled" , true)
    }else {
        console.log(contactDetails);
        let finalName = popUp.querySelector("#finalName")
        let finalEmail = popUp.querySelector("#finalEmail")
        let finalMessage = popUp.querySelector("#finalMessage")

        finalName.innerHTML = contactDetails.fullName
        finalEmail.innerHTML = contactDetails.email
        finalMessage.innerHTML = contactDetails.mesage
        popupContainer.classList.add("popupActive")

    }

}); 


closeForm.addEventListener('click' , function () {
    popupContainer.classList.remove("popupActive")
    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""

    nameInput.classList.remove("succes")
    emailInput.classList.remove("succes")
    messageInput.classList.remove("succes")
    handleName.classList.remove("succes")
    handleEMail.classList.remove("succes")
    handleMessage.classList.remove("succes")
})


function openHeader(item) {
    var header = document.querySelector("header")
    var closeHeader = document.querySelector("#closeHeader")
    header.style.height = "40%"
    item.style.visibility = "hidden"
    closeHeader.style.visibility = "visible"
    header.querySelector("header ul").style.visibility ='visible'
    header.querySelector("header .log ul").style.visibility ='visible'

}

function closeHeader(item) {
    var header = document.querySelector("header")
    var openHeader = document.querySelector("#openHeader")
    header.style.height = "11%"
    item.style.visibility = "hidden"
    openHeader.style.visibility = "visible"
    header.querySelector("header ul").style.visibility ='hidden'
    header.querySelector("header .log ul").style.visibility ='hidden'
    

}