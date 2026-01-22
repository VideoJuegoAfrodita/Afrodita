import { finishGame } from "./score.js";

let time = 5  ;
let interval = null;
let stopped = false;

export function resetTimer() {
  time =5;
  stopped = false;
}

export function iniciarReloj() {
  const txtTime = document.querySelector(".time");

  interval = setInterval(() => {
    if (stopped) {
      clearInterval(interval);
      return;
    }

    time--;
    txtTime.textContent = time;

    if (time <= 0) {
      clearInterval(interval);
      finishGame(false);
    }
  }, 1000);
}

export function stopTimer() {
  stopped = true;
}
