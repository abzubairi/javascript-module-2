const blueButton=document.querySelector("#blueBtn");

blueButton.addEventListener("click", function() {
    let myElement = document.querySelector(".jumbotron");
myElement.style.backgroundColor = "#588fbd";

const donateBike = document.querySelector("#content .btn-primary");
donateBike.style.backgroundColor = "#ffa500";
const volunteer = document.querySelector(".btn-secondary");

volunteer.style.backgroundColor = "black";
volunteer.style.color = "white";
});
const orangeButton=document.querySelector("#orangeBtn");

orangeButton.addEventListener("click", function() {
    let myElement = document.querySelector(".jumbotron");
myElement.style.backgroundColor = "#f0ad4e";

const donateBike = document.querySelector("#content .btn-primary");
donateBike.style.backgroundColor = "#5751fd";
const volunteer = document.querySelector(".btn-secondary");
volunteer.style.backgroundColor = "#31b0d5";
volunteer.style.color = "white";
});

const greenButton=document.querySelector("#greenBtn");

greenButton.addEventListener("click", function() {
    let myElement = document.querySelector(".jumbotron");
myElement.style.backgroundColor = "#87ca8a";

const donateBike = document.querySelector("#content .btn-primary");
donateBike.style.backgroundColor = "black";
const volunteer = document.querySelector(".btn-secondary");
volunteer.style.backgroundColor = "#8c9c08";

});

const formSubmit=document.querySelector(".form-group .btn-primary");
formSubmit.addEventListener("submit", function(){
    const inputCheck = document.querySelector(".form-control").value
    const EmailCheck = document.querySelector("#exampleInputEmail1")
    if(EmailCheck.contains("@") && inputCheck== "")
    return true;
    else{
        EmailCheck.style.backgroundColor="red";
    }
 


}
)