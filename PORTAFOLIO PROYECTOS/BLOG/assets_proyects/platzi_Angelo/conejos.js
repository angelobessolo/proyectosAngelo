let score = 0;
let scoreElement = document.querySelector('.score');
let bunnies = document.querySelectorAll('.bunny');
scoreElement.innerHTML = `Score: ${score}`;

bunnies.forEach(bunny => {
    bunny.addEventListener('click', () => {
        score++;
        scoreElement.innerHTML = `Score: ${score}`;
    })
})