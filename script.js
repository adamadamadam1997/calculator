const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

display.textContent = '0';

buttons.forEach(button => {
    
    button.addEventListener('click', () => {
        const value = button.textContent;
        let current = display.textContent;
        const symbols = /[+\-*/.]/;
        const lastChar = current.slice(-1);

        if (value === '00' && current === '0' || value === '0' && current === '0' || symbols.test(value) && symbols.test(lastChar)) {
            return;
        } else if (current === '0' && !isNaN(value)) {
            current = value;
        } else if (value === 'AC') {
            current = '0';
        } else if (value === '=') {
            current = eval(current);
        } else {
            current += value;
        }

        display.textContent = current;

    });
    
});