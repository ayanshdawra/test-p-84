canvas = document.getElementById("My_canvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_image = "car_img.png"
car1_x = 10;
car1_y = 10;

car2_width = 100;
car2_height = 90;
car2_image = "car_img.png"
car2_x = 20;
car2_y = 20;

var background = "background_image.jpg"


function add() {
    background_img = new Image();
    background_img.onload = uploadbackground;
    background_img.src = background;

    car1_img = new Image();
    car1_img.onload = uploadcar1();
    car1_img.src = car1_image;

    car2_img = new Image();
    car2_img.onload = uploadcar2();
    car2_img.src = car2_image;
}
function uploadbackground() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
    }
    function uploadcar1() {
        ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
        }
        function uploadcar2() {
            ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_heightx);
            }