var x = 0;
var y = 0;
var z = 0;

var sig = 1;
var b = 1;
var c = 1;

function setup() {
    createCanvas(600, 300);
}

function draw() {
    let dt = 1;

    let dx = sig + (y - x);
    x = x + dx;

    let dy = x * (b - z) - y;
    y = y + dy;

    let dz = (x * y) - (b * z);
    z = z + dz;

    console.log(x, y, z)
}