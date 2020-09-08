function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What was Peter Parker bitten by to become Spider-man?", ["Spider","Butterfly", "Ant", "Worm"],"Spider"),
    new Question("Who is Batman's partner?", ["Robin", "Robert", "Ross", "Ryan"], "Robin"),
    new Question("What colour is the Hulk?", ["Green", "Blue", "Yellow", "Red"], "Green"),
    new Question("What SuperHero does Robert Downy Jr play", ["IronMan", "SuperMan", "SpiderMan", "BatMan"], "IronMan"),
    new Question("What is Thor's weapon", ["Hammer", "Sword", "Sheild", "Fire"], "Hammer")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();



