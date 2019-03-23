var ground=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];



var Game = {};

Game.canvas = document.getElementById('main').getContext('2d');
Game.tileSize = 32;
Game.rowTileCount = 20;
Game.colTileCount = 32;

Game.draw = function() {
    for(i = 0; i<this.rowTileCount; i++) {
        for(j = 0; j<this.colTileCount; j++) {
            var tile = ground[i][j];

            this.canvas.beginPath();
            this.canvas.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);

            tile ? this.canvas.fillStyle = "brown" : this.canvas.fillStyle = "green";

            this.canvas.fill();
        }
    }
}

Game.draw();

function Character(x, y) {
    this.X = x;
    this.Y = y;
}

Character.prototype.display = function() {
    Game.draw();
    Game.canvas.beginPath();
    Game.canvas.rect(this.Y*Game.tileSize, this.X*Game.tileSize, Game.tileSize, Game.tileSize);
    Game.canvas.fillStyle = "black";
    Game.canvas.fill();
}

Character.prototype.down = function() {
    if(!ground[this.X+1][this.Y]) {
        this.X++;
        this.display();
    }
};

Character.prototype.left = function() {
    if(!ground[this.X][this.Y-1]) {
        this.Y--;
        this.display();
    }
};

Character.prototype.right = function() {
    if(!ground[this.X][this.Y+1]) {
        this.Y++;
        this.display();
    }
};

Character.prototype.up = function() {
    if(!ground[this.X-1][this.Y]) {
        this.X--;
        this.display();
    }
};

var c = new Character(1, 1);
c.display();


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
