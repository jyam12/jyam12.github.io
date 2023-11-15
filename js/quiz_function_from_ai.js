import {
  getQuiz,
  AddQuiz,
  updateAnswerById,
  updateQuestionById,
} from "/js/lib/quiz";
import { sendPrompt } from "/js/lib/gpt.js";
import { PGQuizAnswer, PGQuizQuestion } from "/js/lib/prompt_generators";

/**
 * Get thevideo pause time
 * @returns {String} the video pause time in string format
 */
function getVideoPauseTime() {
  const video = document.getElementById("video");
  const time = video.currentTime;

  const m = Math.floor(time / 60);
  const s = Math.floor(time - m * 60);

  const timeString = `${m}:${s}`;
  return timeString;
}

async function generateAndDisplayQuizQuestion() {
  // #todo
}

async function generateAndDisplayQuizAnswer() {
  // #todo
}

function displayQuizQuestion() {
  // #todo
}

// #endregion

// quiz
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
