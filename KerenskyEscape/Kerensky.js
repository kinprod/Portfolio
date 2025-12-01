import { Parallax } from './Parallax.js'

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 2000;
const CANVAS_HEIGHT = canvas.height = 2000;

const playerImage = new Image();
playerImage.src = ".\\Sprites\\Kerensky\\KerenskyWithDress.png";

const solderImage = new Image();
solderImage.src = ".\\Sprites\\Kerensky\\ImageToStl.com_без названия88_20241030211522.png";

const playerSpriteWidth = 1108;
const playerSpriteHeight = 915;

const solderSpriteWidth = 814;
const solderSpriteHeight = 915;

let playerFrameX = 0;
let solderFrameX = 0;

let parallax = new Parallax(CANVAS_WIDTH, CANVAS_HEIGHT, 5);

let gameFrame = 0;
const staggerFrames = 18;

const k = 0.3;

function animate(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    parallax.animate(context);

    context.drawImage(playerImage,
        playerFrameX * playerSpriteWidth, 0, playerSpriteWidth, playerSpriteHeight,
        CANVAS_WIDTH * 0.8, CANVAS_HEIGHT * 0.9 - k * 2 *  playerSpriteHeight, k * playerSpriteWidth, k * 2 *  playerSpriteHeight);
    if (gameFrame % staggerFrames == 0){
        if (playerFrameX < 6) playerFrameX++;
        else playerFrameX = 0;
    }

    context.drawImage(solderImage,
        solderFrameX * solderSpriteWidth, 0, solderSpriteWidth, solderSpriteHeight,
        CANVAS_WIDTH * 0.1, CANVAS_HEIGHT * 0.9 - k * 2 *  playerSpriteHeight, k * playerSpriteWidth, k * 2 *  playerSpriteHeight);
    if (gameFrame % staggerFrames == 0){
        if (playerFrameX < 6) solderFrameX++;
        else solderFrameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();