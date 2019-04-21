var cells = [];

function setup() {
    createCanvas(550, 550);
    cells.push(new Cell());
}

function draw() {
    background(230, 230, 250);
    for (let i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
        cells[i].refresh();
    }
}

function mousePressed() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(new Cell())
            console.log(cells[i].position.x, mouseX)
        } else return;
    }
}