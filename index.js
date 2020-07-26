function showAlert(text1, text2) {
    const separator = text1 && text2 ? ', ' : ''; 

    window.alert(`${text1}${separator}${text2}`);
}

function isButtonDisabled(event, input) {
    return event.target.value.length >= 3 || input.value.length >= 3 ? false : true;
}

function clearInputs(inputs) {
    inputs.forEach((input) => {
        input.value = '';
    });
}

// ######################

window.addEventListener('load', () => {
    const button = document.getElementById('info-button');
    const input1 = document.getElementById('info-input-1');
    const input2 = document.getElementById('info-input-2');

    button.addEventListener('click', () => {
        const text1 = input1.value;
        const text2 = input2.value;

        if (text1 || text2) {
            showAlert(text1, text2);
            clearInputs([input1, input2]);
            button.disabled = true;
        }
    })

    input1.addEventListener('keyup', (e) => {
        button.disabled = isButtonDisabled(e, input2);
    })

    input2.addEventListener('keyup', (e) => {
        button.disabled =isButtonDisabled(e, input1);
    })
});
