var ground=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];


var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

var tileSize = 32;
var rowTileCount = 20;
var colTileCount = 32;

function draw() {
    for(i = 0; i<rowTileCount; i++) {
        for(j = 0; j<colTileCount; j++) {
            var tile = ground[i][j];

            ctx.beginPath();
            ctx.rect(j*tileSize, i*tileSize, tileSize, tileSize);

            tile ? ctx.fillStyle = "brown" : ctx.fillStyle = "green";

            ctx.fill();
        }
    }
}

var Character = function(x, y) {

    this.X = x;
    this.Y = y;
    this.color = "black";

    this.display = function() {
        draw();
        ctx.beginPath();
        ctx.rect(this.Y*tileSize, this.X*tileSize, tileSize, tileSize);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    this.down = function() {
        if(!ground[this.X+1][this.Y]) {
            this.X++;
            this.display();
        }
    };

    this.left = function() {
        if(!ground[this.X][this.Y-1]) {
            this.Y--;
            this.display();
        }
    };

    this.right = function() {
        if(!ground[this.X][this.Y+1]) {
            this.Y++;
            this.display();
        }
    };

    this.up = function() {
        if(!ground[this.X-1][this.Y]) {
            this.X--;
            this.display();
        }
    };

    this.display();
}

var c = new Character(1, 1);


document.onkeydown = function(e) {
    e = e || window.event;

    switch(e.keyCode.toString()){
        case "38":
            c.up();
            break;
        case "40":
            c.down();
            break;
        case "37":
            c.left();
            break;
        case "39":
            c.right();
            break;
    };
}
