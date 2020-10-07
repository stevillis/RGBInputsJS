let inputRED = null;
let inputGREEN = null;
let inputBLUE = null;

let textRED = null;
let textGREEN = null;
let textBLUE = null;

let fieldChanged = null;

let rectangle = null;

window.addEventListener('load', () => {
    handleElements();
});

function handleElements() {
    inputRED = document.querySelector('#inputRED');
    inputGREEN = document.querySelector('#inputGREEN');
    inputBLUE = document.querySelector('#inputBLUE');

    textRED = document.querySelector('#textRED');
    textGREEN = document.querySelector('#textGREEN');
    textBLUE = document.querySelector('#textBLUE');

    textRED.value = inputRED.value;
    textGREEN.value = inputGREEN.value;
    textBLUE.value = inputBLUE.value;

    rectangle = document.querySelector('#rectangle');
    setRectangleColor()

    inputRED.addEventListener('input', () => {
        fieldChanged = 'RED';
        updateTextFields();
    });

    inputGREEN.addEventListener('input', () => {
        fieldChanged = 'GREEN';
        updateTextFields();
    });

    inputBLUE.addEventListener('input', () => {
        fieldChanged = 'BLUE';
        updateTextFields();
    });
}

function updateTextFields() {
    switch (fieldChanged) {
        case 'RED':
            textRED.value = inputRED.value;
            break;
        case 'GREEN':
            textGREEN.value = inputGREEN.value;
            break;
        case 'BLUE':
            textBLUE.value = inputBLUE.value;
            break;
        default:
            break;
    }
    setRectangleColor();
}

function setRectangleColor() {
    rectangle.style.backgroundColor = `rgb(${textRED.value}, ${textGREEN.value}, ${textBLUE.value})`;
}