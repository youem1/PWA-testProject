document.getElementById('stateMenuButton').addEventListener("click", (event) => {
    document.querySelector('.menu').style.left = '0'
});
document.querySelector('#closeButtonPart').addEventListener('click', () => {
    document.querySelector('.menu').style.left = '-20%'
})