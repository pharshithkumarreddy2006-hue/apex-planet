function showPage(page){
let pages=document.getElementsByClassName("page");
for(let i=0;i<pages.length;i++){
pages[i].style.display="none";
}
document.getElementById(page).style.display="block";
}

showPage("home");


document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let error=document.getElementById("error");

if(name==""||email==""){
error.innerHTML="Enter all details";
}
else if(!email.includes("@")){
error.innerHTML="Enter valid email";
}
else{
error.innerHTML="Submitted successfully";
}
});


function addTask(){
let task=document.getElementById("task").value;

if(task==""){
alert("Enter task");
return;
}

let li=document.createElement("li");

li.innerHTML=task+" <button onclick='this.parentElement.remove()'>Delete</button>";

document.getElementById("list").appendChild(li);

document.getElementById("task").value="";
}