let ans1 = document.getElementById("option1");
let ans2 = document.getElementById("option2");
let ans3 = document.getElementById("option3");
let ans4 = document.getElementById("option4");
let res = document.getElementById("score-div");
let replay = document.getElementById("playagain");
let mark = document.getElementById("mark");
let h2 = document.getElementById("ques");
let qu = document.getElementById("qu");
let answers = document.querySelectorAll(".button");
let question = document.getElementById("inner-div");
let submit = document.getElementById("submit");
let ran1;
let ran2;
let ans;
let Qcont = 1;
let Score = 0;
const loadquestion = () => {
  ran1 = Math.floor(Math.random() * 30 + 1);
  ran2 = Math.floor(Math.random() * 80 + 1);
  ans = eval(ran1 + ran2);
  // console.log(ans);
  // console.log(placeren);
  const lis = [
    Math.floor(Math.random() * 120 + 1),
    Math.floor(Math.random() * 120 + 1),
    Math.floor(Math.random() * 120 + 1),
    ans,
  ];
  const ran = lis.sort(() => Math.random() - 0.5);
  h2.innerText = `Q.N-${Qcont}. what is value of ${ran1} + ${ran2} ?`;
  ans1.innerText = ran[0];
  ans2.innerText = ran[1];
  ans3.innerText = ran[2];
  ans4.innerText = ran[3];
};

loadquestion();
const deselectAll = () => {
  answers.forEach((cur) => {
    cur.checked = false;
  });
};

const getCheckAnswer = () => {
  let userans;
  answers.forEach((curr) => {
    if (curr.checked) {
      userans = curr.nextElementSibling.innerText;
      if (userans == ans) {
        Score++;
      }
    }
  });
  Qcont++;
  if (Qcont > 10) {
    qu.style.display = "none";
    submit.style.disable = true;
    res.style.display = "block";
    mark.innerText = `Your score is ${Score}/10`;
  } else {
    loadquestion();
  }

  deselectAll();
//   console.log(Score);
};
const playagain = () => {
    window.location.reload();
    // console.log();
  };

submit.addEventListener("click", () => {
  const chckanwer = getCheckAnswer();
});
replay.addEventListener("click", () => {
  const replay = playagain();
});
