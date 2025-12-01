const layer1 = new Image();
layer1.src = ".\\Sprites\\Background\\Фон локации.png";
const layer2 = new Image();
layer2.src = ".\\Sprites\\Background\\Дома на фоне.png";
const layer3 = new Image();
layer3.src = ".\\Sprites\\Background\\Фонари перед домами но за ГГ.png";
const layer4 = new Image();
layer4.src = ".\\Sprites\\Background\\Сама локация.png";

class Layer {
    constructor(image, speedModifire, gameSpeed) {
        this.image = image;
        this.speedModifire = speedModifire;

        this.x = 0;
        this.y = 0;
        this.width = 13440;
        this.height = 1141;
        this.x2 = this.width;

        this.speed = gameSpeed * this.speedModifire;
    }

    update() {
        if (this.x < -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 < -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y,  this.width, 2 * this.height);
        context.drawImage(this.image, this.x2, this.y,  this.width, 2 * this.height);
    }
}

export class Parallax {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT, gameSpeed = 1000) {
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.gameSpeed = gameSpeed;

        this.x = 0;
        this.x2 = 13440;

        this.Layer1 = new Layer(layer1, 0.5, this.gameSpeed);
        this.Layer2 = new Layer(layer2, 0.8, this.gameSpeed);
        this.Layer3 = new Layer(layer3, 1.0, this.gameSpeed);
        this.Layer4 = new Layer(layer4, 1.5, this.gameSpeed);
    };

    animate(context) {
        this.Layer1.update();
        this.Layer1.draw(context);

        this.Layer2.update();
        this.Layer2.draw(context);

        this.Layer3.update();
        this.Layer3.draw(context);

        this.Layer4.update();
        this.Layer4.draw(context);

    }
}