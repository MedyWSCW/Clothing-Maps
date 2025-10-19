
// quiz.js
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


// State variables
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

// Next button handler
nextBtn.addEventListener('click', function(){
  if (!answers[current]) {
    alert('Please pick an option.');
    return;
  }

  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  var tone = answers[0] || '';
  var style = answers[1] || '';
  var itemPick = answers[2] || '';

  resultEl.textContent = "Based on your choices, we recommend: " + recommendation;
  resultEl.classList.remove('hidden');
  restartBtn.classList.remove('hidden');

  questionsEl.textContent = '';
  choicesEl.innerHTML = '';
  nextBtn.disabled = true;
  nextBtn.classList.add('hidden')

// Generate recommendation based on answers
  var recommendation = "Based on your choices, we recommend a ";
  if (tone === "Dark" && style === "Casual") 
    recommendation = "Black Hoodie";
  else if (tone === "Dark" && style === "Formal")
    recommendation = "Black Blazer";
  else if (tone === "Dark" && style === "Sporty")
    recommendation = "Black Shorts";
  else if (tone === "Neutral" && style === "Casual")
    recommendation = "Grey Jeans";
  else if (tone === "Neutral" && style === "Formal")
    recommendation = "Grey Suit";
  else if (tone === "Neutral" && style === "Sporty")
    recommendation = "Grey Sweatpants";
  else if (tone === "Light" && style === "Casual")
    recommendation = "White T-Shirt";
  else if (tone === "Light" && style === "Formal")
    recommendation = "Light Blue Shirt";
  else if (tone === "Light" && style === "Sporty")
    recommendation = "White Compression Shirt";

  resultEl.textContent = "Based on your choices, we recommend: " + recommendation;
  resultEl.classList.remove('hidden');
  restartBtn.classList.remove('hidden');

  questionsEl.textContent = '';
  choicesEl.innerHTML = '';
  nextBtn.disabled = true; 
}
// Restart button handler
  restartBtn.addEventListener('click', function(){
  current = 0;
  answers = [];
  showQuestion();
  });

  showQuestion();












