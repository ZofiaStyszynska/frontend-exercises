function showAlert(text) {
    window.alert(text || 'Default text');
}

// ######################

window.addEventListener('load', () => {
    const button = document.getElementById('info-button');
    const input = document.getElementById('info-input');
    
    button.addEventListener('click', () => {
        const text = input.value
        if (text) {
            showAlert(text)
            input.value = '';
        }
    })

    input.addEventListener('keyup', (e) => {
        button.disabled = e.target.value.length >= 3 ? false : true;
    })
});
