
const teamOne = document.getElementById('teamOne');
const firstPlayer = document.getElementById('firstPlayer'); 
const teamTwo = document.getElementById('teamTwo');
const appContainer = document.getElementById('appContainer');
const secondPlayer = document.getElementById('secondPlayer'); 


    appContainer.style.contentVisibility = 'hidden';


function showPlayer() {
    firstPlayer.innerText = teamOne.value;
    secondPlayer.innerText = teamTwo.value;
        teamNames.style.display = 'none';

        appContainer.style.contentVisibility = 'visible';
}

function coloredButtonOne() {
    let colorCountOne = 0;
    const buttons = document.querySelectorAll('.buttonsOne');
    buttons.forEach(button => {
        const color = window.getComputedStyle(button).backgroundColor;

        if (color === 'rgb(255, 0, 0)') {
            colorCountOne++;
            console.log(colorCountOne)
        }
    })
    if (colorCountOne >= 5) {
        setTimeout(() => {
            alert(`Congradulations ${teamOne.value}! You won.`);
        }, 200);
    }
}

function resetValue() {
    // Reset button styles and states
    document.querySelectorAll('.buttonsOne, .buttonsTwo').forEach(button => {
        // Reset background color
        button.style.backgroundColor = '';

        // Reset data-state attribute to initial value
        button.setAttribute('data-state', '0');
    });

}


function coloredButtonTwo() {
    let colorCountTwo = 0;
    const buttons = document.querySelectorAll('.buttonsTwo');
    buttons.forEach(button => {
        const color = window.getComputedStyle(button).backgroundColor;

        if (color === 'rgb(255, 0, 0)') {
            colorCountTwo++;
        }
    })
    if (colorCountTwo >= 5) {
        setTimeout(() => {
            alert(`Congradulations ${teamTwo.value}! You won.`);
        }, 200);
    }
}

function addCourt(event) {
    const clickedButton = event.target;
    const currentState = parseInt(clickedButton.getAttribute('data-state'));

    // Toggle color based on current state
    if (currentState % 2 === 0) {
        clickedButton.style.backgroundColor = 'red';
        clickedButton.setAttribute('data-state', '1');
    } else {
        clickedButton.style.backgroundColor = 'blue';
        clickedButton.setAttribute('data-state', '0');
    }
}

document.getElementById('buttonSubmit').addEventListener('click', showPlayer);

const addButtonsOne = document.querySelectorAll('.buttonsOne');
addButtonsOne.forEach(button => {
    button.addEventListener('click', addCourt);
});
addButtonsOne.forEach(button => {
    button.addEventListener('click', coloredButtonOne);
});

const addButtonsTwo = document.querySelectorAll('.buttonsTwo');
addButtonsTwo.forEach(button => {
    button.addEventListener('click', addCourt);
});
addButtonsTwo.forEach(button => {
    button.addEventListener('click', coloredButtonTwo);
});

const reset = document.getElementById('resetButton');
reset.addEventListener('click', resetValue)