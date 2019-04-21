function Cell() {
    this.position = createVector(random(width), random(height)); //Starting Cell Position
    this.radius = 38;

    this.color = color(random(255), random(255), random(255));

    this.show = function () { //Display Cell
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }

    this.move = function () { //Make the Cell Move
        var moves = p5.Vector.random2D();
        this.position.add(moves.add(random(-0.5, 0.5)));
    }

    this.refresh = function () {
        if (this.position.x >= width || this.position.y >= height) {
            this.position = createVector(random(width), random(height));
        }

        this.clicked = function (x, y) { //Check if Clicked On Cell
            let distance = dist(this.position.x, this.position.y, x, y);
            if (distance <= this.radius) {
                return true;
            } else return false;
        }
    }
}