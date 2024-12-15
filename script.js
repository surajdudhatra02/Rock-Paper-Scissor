const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissor = document.querySelector("#scissor")


rock.addEventListener("click", () => game("rock"))
paper.addEventListener("click", () => game("paper"))
scissor.addEventListener("click", () => game("scissor"))

let compScore = 0
let playerScore = 0

let result = document.querySelector("#result")

let player_score = document.querySelector('.player-score')
let comp_score = document.querySelector('.comp-score')


const game = (userChoice) => {

    const choice = ['rock', 'paper', 'scissor']

    let compChoice = choice[Math.floor(Math.random() * 3)]

    if (userChoice == compChoice) {

        result.innerText = `Tie 😐!!
        Your choice: ${userChoice} and Computer choice: ${compChoice}`

    } else if (userChoice == "rock" && compChoice == "scissor") {
        result.innerText = `You beat Computer 🤘!!
        Your choice: ${userChoice} and Computer choice: ${compChoice}`

        player_score.innerText = ++playerScore
    }

    else if (userChoice == "paper" && compChoice == "rock") {
        result.innerText = `You beat Computer 🤘!!
        Your choice: ${userChoice} and Computer choice: ${compChoice}`

        player_score.innerText = ++playerScore

    } else if (userChoice == "scissor" && compChoice == "paper") {
        result.innerText = `You beat Computer 🤘!!
        Your choice: ${userChoice} and Computer choice: ${compChoice}`

        player_score.innerText = ++playerScore

    } else {
        result.innerText = `Computer beat You 🙁!!
        Your choice: ${userChoice} and Computer choice: ${compChoice}`

        comp_score.innerText = ++compScore
    }

    if (playerScore >= 5 || compScore >= 5) {

        if (playerScore > compScore) {
            result.innerText = `You Win 🤸‍♂️!!  

            Your score: ${playerScore}; Computer score: ${compScore}`
        } else {
            result.innerText = `You loose the game...😔  Computer Win 🥳!!

            Your score: ${playerScore}; Computer score: ${compScore} `
            comp_score.innerText = compScore
        }

        playerScore = 0;
        compScore = 0;
        comp_score.innerText = 0
        player_score.innerText = 0
    }


    function all_animation() {

        function show_rock() {
            let rock_left = document.getElementById('rock-frame-left')
            rock_left.style.display = "block"

            setTimeout(function hide() {
                let rock_left = document.getElementById('rock-frame-left')
                rock_left.style.display = "none"
            }, 3000)
        }

        function show_rock_right() {
            let rock_left = document.getElementById('rock-frame-right')
            rock_left.style.display = "block"

            setTimeout(function hide() {
                let rock_left = document.getElementById('rock-frame-right')
                rock_left.style.display = "none"
            }, 3000)
        }

        function showAnimation() {

            function rock() {
                let paper_left = document.getElementById('rock-left')
                paper_left.style.display = "block"

                setTimeout(function hide() {
                    let paper_left = document.getElementById('rock-left')
                    paper_left.style.display = "none"
                }, 3000)
            }

            function show_paper() {
                let paper_left = document.getElementById('paper-frame-left')
                paper_left.style.display = "block"

                setTimeout(function hide() {
                    let paper_left = document.getElementById('paper-frame-left')
                    paper_left.style.display = "none"
                }, 3000)
            }

            function show_scissor() {
                let scissor_left = document.getElementById('scissor-frame-left')
                scissor_left.style.display = "block"

                setTimeout(function hide() {
                    let scissor_left = document.getElementById('scissor-frame-left')
                    scissor_left.style.display = "none"

                }, 3000)
            }

            function show_paper_right() {
                let paper_left = document.getElementById('paper-frame-right')
                paper_left.style.display = "block"

                setTimeout(function hide() {
                    let paper_left = document.getElementById('paper-frame-right')
                    paper_left.style.display = "none"
                }, 3000)
            }

            function rock_right() {
                let paper_left = document.getElementById('rock-right')
                paper_left.style.display = "block"

                setTimeout(function hide() {
                    let paper_left = document.getElementById('rock-right')
                    paper_left.style.display = "none"
                }, 3000)
            }

            function show_scissor_right() {
                let scissor_left = document.getElementById('scissor-frame-right')
                scissor_left.style.display = "block"

                setTimeout(function hide() {
                    let scissor_left = document.getElementById('scissor-frame-right')
                    scissor_left.style.display = "none"
                }, 3000)
            }


            if (userChoice === "paper") {
                show_paper()
            } else if (userChoice === "rock") {
                rock()
            } else if (userChoice === "scissor") {
                show_scissor()
            }
            if (compChoice === "paper") {
                show_paper_right()
            } else if (compChoice === "rock") {
                rock_right()
            } else if (compChoice === "scissor") {
                show_scissor_right()
            }
        }


        let side_animation = document.getElementById('side-animation')
        side_animation.style.display = "block"

        setTimeout(() => {
            let side_animation = document.getElementById('side-animation')
            side_animation.style.display = "none"
        }, 6500)

        show_rock()
        show_rock_right()
        setTimeout(() => { showAnimation() }, 2800)

    }

    all_animation()

}



