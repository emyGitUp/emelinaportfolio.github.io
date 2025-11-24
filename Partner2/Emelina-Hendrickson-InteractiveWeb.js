function changeName() 
{
    let userInp = document.getElementById("username").value;
    let name = document.getElementById("name");
    name.innerHTML = "Hello " + userInp + "!";  
}

function changePhrase() 
{
   let userInp2 = document.getElementById("userphrase").value;
    let name = document.getElementById("phrase");
    name.innerHTML = userInp2;  
}

function changeColor() 
{
    let userInp3 = document.getElementById("color").value;
    let color = document.getElementById("change");
    color.style.backgroundColor = userInp3;
    
    /*let userInp3 = document.getElementById("color").value;
    let body = document.getElementById("change");
    let red = document.getElementById("red");
    let pink = document.getElementById("pink");
    let purple = document.getElementById("purple");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let yellow = document.getElementById("yellow");
    let orange = document.getElementById("orange");

        if (userInp3 == red) 
            {
            body.style.backgroundColor = "#FFADAD";
            }
        else if (userInp3 == pink) 
            {
            body.style.backgroundColor = "#FFADF8";
             }
        else if (userInp3 == purple) 
            {
            body.style.backgroundColor = "#DBADFF";
            }
        else if (userInp3 == blue)
        {
            body.style.backgroundColor = "#ADCBFF";
        }
        else if (userInp3 == green)
        {
            body.style.backgroundColor = "#B7FFAD";
        }
        else if (userInp3 == yellow)
        {
            body.style.backgroundColor = "#FFFAAD";
        }
        else (userInp3 == orange)
        {
            body.style.backgroundColor = "#FFD5AD";
        }*/
}

function changeFont() 
{
    let userInp4 = document.getElementById("fontfamily").value;
    let font = document.getElementById("change");
    font.style.fontFamily = userInp4;        
} 

function makeList() {
    let li = document.createElement("li");
    let userInput5 = document.getElementById("userList").value;
    let text = document.createTextNode(userInput5);
    
    li.appendChild(text);
    document.getElementById("toDo").appendChild(li);
}