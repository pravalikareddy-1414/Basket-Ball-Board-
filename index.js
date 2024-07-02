let newsScore = document.getElementById("score-el");
let guest1 = document.getElementById("score-el1");
let score = 0;
let guestScore = 0;

function buttonadd1() {
  score += 1;
  newsScore.innerText = score;
}

function buttonadd2() {
  score += 2;
  newsScore.innerText = score;
}

function buttonadd3() {
  score += 3;
  newsScore.innerText = score;
}

function buttonadd4() {
  guestScore += 1;
  guest1.innerText = guestScore;
}

function buttonadd5() {
  guestScore += 2;
  guest1.innerText = guestScore;
}

function buttonadd6() {
  guestScore += 3;
  guest1.innerText = guestScore;
}
