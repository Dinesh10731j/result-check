const studentsNames=["Jack","Maxwell","David","John","Jack","Olly"];
const input_val1= document.querySelector(".input_val input");
const btn = document.querySelector("#btn");
const popup = document.querySelector("#popup")
const findRes = () => {

   input_val1.addEventListener("input",(e) => {
    if (studentsNames.some((name) => name.toLowerCase() === e.target.value.toLowerCase())) {
        input_val1.style.border=" 1px solid green";
        popup.style.color = "green";
        popup.innerHTML = "Congratulations!😄"+" "+e.target.value;
    } else if (e.target.value.trim() === "") {
        input_val1.style.border=" 1px solid blue";
        popup.style.color = "blue";
        popup.innerHTML = "Write Something... 😕"+" "+e.target.value;

    }
    
    else {
        input_val1.style.border=" 1px solid red";
        popup.style.color = "red";
        popup.innerHTML = "Better Luck Next Time!🥺"+" "+e.target.value;
    }
    

   });
}

// Function Call
findRes();





