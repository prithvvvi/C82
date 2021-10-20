var mouseEvent="empty"
var last_position_of_x
var last_position_of_y
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color="black"
width_of_line=1

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown1";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave1";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup1";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offSetLeft
    current_position_of_mouse_y=e.clientY-canvas.offSetTop
    if(mouseEvent=="mousedown1"){
        ctx.beginPath()
        ctx.strokStyle=color
        ctx.lineWidth=width_of_line

        ctx.moveTo(last_position_of_x,last_position_of_y)
        console.log(last_position_of_x)
        console.log(last_position_of_y)
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    }
    last_position_of_x=current_position_of_mouse_x
    last_position_of_y=current_position_of_mouse_y
}