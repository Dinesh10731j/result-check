const studentsNames=["Dinesh Tamang","Bibek","Rajkumar","RadhaKrishna","Lokendra","Sudesh"];
const input_val1= document.querySelector(".input_val input");
const btn = document.querySelector("#btn");
const popup = document.querySelector("#popup")
const findRes = ()=>{

   input_val1.addEventListener("keyup",(e)=>{
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
findRes();


const pernsoInfo={
    firstName:"Dinesh",
    lastName:"Tamang",
    id:2580,

    fullName: function(){

        return ` My first name is${this.firstName} lastname is ${this.lastName} and \n \
         my id is ${this.id}
        `;

    }
}

console.log(pernsoInfo.fullName());


const ownerName ="Dinesh Tamang";

const res=ownerName.match('esh');
console.log(res);
if(res.input==="Dinesh Tamang"){
    console.log("Matched the name You want to match");
}else{
    console.log("Name not matched(:")
}

//This is callled Escape Character in Javscript
const favouriteSpotrs = "I love Playing \'Football\' so much";
console.log(favouriteSpotrs);

const SportsPerson="Rajesh";
const SportsPerson2=new String('Mukesh');

console.log(typeof(SportsPerson));
console.log(typeof(SportsPerson2));


//Javascript String Slice ()

const companyName="DT IT Solutions Pvt Ltd,Rajan,Sajan";

const sliceans= companyName.slice(24,29);

console.log(typeof(sliceans));

