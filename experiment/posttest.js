/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        
        {
            question: "1. Local alignments are most applied when:", ///// Write the question inside double quotes
            answers: {
                a: "Dissimilar sequences which are suspected to contain homologous regions", ///// Write the option 1 inside double quotes
                b: "Large sequence having similarity index", ///// Write the option 2 inside double quotes
                c: "There are homologous sequences which are of equal in length",
                d: "None of the above"
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Which of the following is not true to describe local alignment algorithm ?", ///// Write the question inside double quotes
            answers: {
                a: "Score is always positive", ///// Write the option 1 inside double quotes
                b: "Score is always negative", ///// Write the option 2 inside double quotes
                c: "Absence of gap",
                d: "None of the above"
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. Which one of the following is an approach to the global alignment ?", ///// Write the question inside double quotes
            answers: {
                a: "BLAST", ///// Write the option 1 inside double quotes
                b: "LALIGN", ///// Write the option 2 inside double quotes
                c: "Needleman-Wunch",
                d: "EMBOSS Water"
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "4. Scoring in Pairwise Sequence Alignment depends on:", ///// Write the question inside double quotes
            answers: {
                a: "Match", ///// Write the option 1 inside double quotes
                b: "Mismatch", ///// Write the option 2 inside double quotes
                c: "Mutation",
                d: "Match and Mismatch"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Pairwise sequence alignment methods are applicable in:", ///// Write the question inside double quotes
            answers: {
                a: "Locating specific amino acid features", ///// Write the option 1 inside double quotes
                b: "HMM making", ///// Write the option 2 inside double quotes
                c: "Phylogenetic tree analysis",
                d: "All the above"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },       
 
        {
            question: "6. Example of pairwise sequence alignment tools:", ///// Write the question inside double quotes
            answers: {
                a: "ALLALIGN", ///// Write the option 1 inside double quotes
                b: "GAP", ///// Write the option 2 inside double quotes
                c: "NAP",
                d: "All the above"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },       
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
