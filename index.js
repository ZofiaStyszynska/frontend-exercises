function showAlert(text) {
    window.alert(text || 'Default text');
}

// ######################

window.addEventListener('load', (event) => {
    const button = document.getElementById('info-button')
    
    if (button) {
        button.addEventListener('click', () => {
            showAlert('hello');
        })
    }
});
