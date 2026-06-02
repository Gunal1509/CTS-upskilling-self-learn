console.log("welcome to community portal");
var seats;
var date;
var seats;
alert("hi welcome !!");

function handlelog()
{
    name=document.getElementById("name").value;
    date= document.getElementById("date").value;
    seats=document.getElementById("seats").value;
    document.getElementById("result").innerHTML=`
        name: ${name}
        Date: ${date}
        seats: ${seats}`;
  document.getElementById("resultCard").style.display = "block";
}



