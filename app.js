let date = document.getElementById("date");
let calculateBtn = document.getElementById("calculate");
let message = document.getElementById("msg");

function calculateAge(){
    const birthDatevalue = date.value;
    if(birthDatevalue === ""){
        alert("please enter your birth date");
    }else{
        let age = getAge(birthDatevalue);
        message.innerText = `Your age is : ${age}`;
    }
     
}
function getAge(birthDatevalue){
    const currentDate = new Date();
    const birthDate = new Date(birthDatevalue);
    let year = currentDate.getFullYear()- birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    
    if(month<0 || (month === 0 && currentDate.getDate() <birthDate.getDate() )){
        year --;
    }
    return year;
   
}

calculateBtn.addEventListener("click",calculateAge);

