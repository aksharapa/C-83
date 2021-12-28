canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d")
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

color="black";
width_of_line= 1;

canvas.addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e){
    color= document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent= "mouseDown"
}
canvas.addEventListener("mouseUp",my_mouseUp);

function my_mouseUp(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseLeave",my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mouseMove",my_mouseMove);
 
function my_mouseMove(e){
    current_postion_of_mouse_x= e.clientX - canvas.offsetLeft
    current_postion_of_mouse_y= e.clientY - canvas.offsetTop

if(mouseEvent=="mouseDown"){
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width_of_line;

console.log("last position of x and y coordinates= ");
console.log("x= "+last_position_of_x + "y= "+last_position_of_y)
ctx.moveTo(last_position_of_x, last_position_of_y)

console.log("current position of x and y coordinates= ");
console.log("x= "+current_position_of_mouse_x + "y= "+current_position_of_mouse_y)
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
ctx.stroke()
}
last_position_of_x= current_position_of_mouse_x
last_position_of_y= current_position_of_mouse_y

}


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}


