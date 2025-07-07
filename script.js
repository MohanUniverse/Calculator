let string = "";
let buttons = document.querySelectorAll('.button');
const display = document.querySelector('.input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        
        if(buttonText === '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = "Error";
                string = "";
            }
        } else if(buttonText === 'C') {
            string = "";
            display.value = string;
        } else {
            string += buttonText;
            display.value = string;
        }
        
        // Prevent display overflow
        if(display.value.length > 12) {
            display.style.fontSize = "18px";
        } else {
            display.style.fontSize = "24px";
        }
    });
});