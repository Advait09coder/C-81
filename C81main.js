canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListner("mousedown", my_mouse);

function my_mouse(e){
color = document.getElementById("color").value;
console.log(color);

mouse_X = e.clientX-canvas.offsetLeft;
mouse_Y = e.clientY-canvas.offsetTop;

console.log("X=" + mouse_X + ",Y=" + mouse_Y);
circle(mouseX, mouseY);
}

function circle(mouse_X, mouse_Y){
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_X, mouse_Y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function reset(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}