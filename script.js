var questions = [
    {
        q: "What tones do you like?",
        choices: ["Dark", "Neutral", "Light"]
    },
    {
        q: "What type of clothing do you prefer?",
        choices: ["Casual", "Formal", "Sporty"]
    },
    {
        q: "What length do you prefer?",
        choices: ["Cropped", "Regular", "Baggy"]
    }
];

var current = 0;
var answers = [];

var questionsEl = document.getElementById('questions');
var choicesEl   = document.getElementById('choices');
var nextBtn     = document.getElementById('nextBtn');
var resultEl    = document.getElementById('result');
var restartBtn  = document.getElementById('restartBtn');

function showQuestion() {
    var q = questions[current];
    questionsEl.textContent = q.q;
    choicesEl.innerHTML = '';
    nextBtn.disabled = true;
    for (var i = 0; i < q.choices.length; i++) {
        var b = document.createElement('button');
        b.textContent = q.choices[i];
        b.className = 'choice-btn';
         (function(idx, btn){
      btn.addEventListener('click', function(){
        var all = choicesEl.querySelectorAll('.choice-btn');
        for (var j = 0; j < all.length; j++) all[j].classList.remove('selected');
        btn.classList.add('selected');
        answers[current] = q.choices[idx];
        nextBtn.disabled = false;
      });
      })(i, b);
    choicesEl.appendChild(b);
  }

  resultEl.classList.add('hidden');
  restartBtn.classList.add('hidden');
}