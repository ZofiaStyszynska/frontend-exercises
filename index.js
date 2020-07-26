function showAlert(text1, text2) {

    window.alert(text1 + ' , ' + text2);
}

// ######################

window.addEventListener('load', () => {
    const button = document.getElementById('info-button');
    const input1 = document.getElementById('info-input-1');
    const input2 = document.getElementById('info-input-2');

    button.addEventListener('click', () => {
        const text1 = input1.value
        const text2 = input2.value

        if (text1 || text2) {
            showAlert(text1, text2)
            input1.value = '';
            input2.value = '';
        }
    })

    // input1.addEventListener('keyup', (e) => {
    //     // button.disabled = e.target.value.length >= 3 ? false : true;
    // })
});
