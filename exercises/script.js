let answers = document.querySelectorAll(".answer__btn")

let current_question = "2+2";
let points = 0;
let questions = {
    "2+2": {
        "7": false,
        "2": false,
        "3": false,
        "4": true,
    },
    "2+5": {
        "7": true,
        "2": false,
        "3": false,
        "4": false,
    }
};
function updateQuestion() {
    let new_index = 1;
    let keys = Object.keys(questions);
    current_question = keys[new_index];
    document.querySelector(".question").innerText = current_question
}
for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function () {

        let selected_answer = answers[i].innerText;
        let its_corect = questions[current_question][selected_answer];
        console.log(its_corect);
        if (its_corect) {
            points++;
            answers[i].classList.add("answer__corect");
            setTimeout(function(){
                answers[i].classList.remove("answer__corect");
            }, 500);
        }
    else{
        answers[i].classList.add("answer__incorect");
        setTimeout(function(){
            answers[i].classList.remove("answer__incorect");
        }, 500);
    }
    updateQuestion()
    });
}