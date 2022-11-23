"use strict";

const grid = document.querySelector(".grid");
const blockHeight = 20;
const blockWidth = 100;
let timerID;
let xDirection = 2;
let yDirection = 2;
const ballDiametar = 20;

const userStart = [230, 10];
let userCurrentPosition = userStart;

const ballStart = [270, 30];
let ballCurrentPosition = ballStart;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

// all blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

// style and add blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";

    grid.appendChild(block);
  }
}
addBlocks();

// add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// draw user
function drawUser() {
  user.style.left = userStart[0] + "px";
  user.style.bottom = userStart[1] + "px";
}

// move user
function moveUser(event) {
  switch (event.key) {
    case "ArrowLeft":
      if (userCurrentPosition[0] > 10) {
        userCurrentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (userCurrentPosition[0] < 550 - blockWidth) {
        userCurrentPosition[0] += 10;
        drawUser();
      }
      break;
  }
}

window.addEventListener("keydown", moveUser);

// draw the ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// move ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}

timerID = setInterval(moveBall, 15);

// check for collisions
function checkForCollisions() {
  // check for block collisions
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      ballCurrentPosition[1] + ballDiametar > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();

      // check for win
      if (blocks.length === 0) {
        setTimeout(() => {
          alert("YOU WIN");
        }, 500);
        clearInterval(timerID);
        window.removeEventListener("keydown", moveUser);
      }
    }
  }

  // check for user collisions
  if (
    ballCurrentPosition[0] > userCurrentPosition[0] &&
    ballCurrentPosition[0] < userCurrentPosition[0] + blockWidth &&
    ballCurrentPosition[1] > userCurrentPosition[1] &&
    ballCurrentPosition[1] < userCurrentPosition[1] + blockHeight
  ) {
    changeDirection();
  }

  // check for wall collisions
  if (
    ballCurrentPosition[0] >= 560 - ballDiametar ||
    ballCurrentPosition[1] >= 300 - ballDiametar ||
    ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  }

  // check for game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerID);
    window.removeEventListener("keydown", moveUser);
    alert("GAME OVER");
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
