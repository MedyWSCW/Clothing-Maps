var questions = [
    {q:"What tones do you like?",
        choices:["Dark", "Neutral", "Light"],
    }
    {q: "What type of clothing do you prefer?",
        choices:["Casual", "Formal", "Sporty"],
    },
    {q:"What lenght do you prefer?",
        choices:["Cropped", "Regular", "Baggy"],
    }
];

var current = 0;
var answers = [];

var questionsEl = document.getElementById('questions');
var choicesEl   = document.getElementById('choices');
var nextBtn     = document.getElementById('nextBtn');
var resultEl    = document.getElementById('result');
var restartBtn  = document.getElementById('restartBtn');