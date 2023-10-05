// Menu does not open when page loads (free)
// Do not open menu when clicking things other than the hamburger button (free)
// Do not open menu when pressing escape (free)


var mainMenuEl = document.getElementById('main-menu');
var hamburgerBtnEl = document.querySelector('.hamburger-btn');

document.onkeyup = function (e) {
    // Close menu when pressing escape and menu items are NOT focused
    // Close menu and focus hamburger button when pressing escape and menu items are focused
    console.log(e.code)
    if (e.code == 'Escape') {
        mainMenuEl.classList.remove('show-menu');
        hamburgerBtnEl.setAttribute('aria-expanded', 'false');
        hamburgerBtnEl.focus()
    }
}

document.addEventListener('click', function (documentEvent) {
    console.log(documentEvent.target);
    if (documentEvent.target == hamburgerBtnEl) {
        return;
    }
    console.log(mainMenuEl.contains(documentEvent.target));
    // Close menu when clicking outside of the menu
    if (mainMenuEl.contains(documentEvent.target) == false) {
        mainMenuEl.classList.remove('show-menu');
        hamburgerBtnEl.setAttribute('aria-expanded', 'false');
        console.log('Closing the menu because what you clicked is outside of the menu')
    } else {
        // Do not close menu when clicking inside of the menu
        return
    }

})

hamburgerBtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    if (hamburgerBtnEl.getAttribute('aria-expanded') == 'false') {
        console.log('Opening menu')
        // Open menu when clicking the hamburger button
        mainMenuEl.classList.add('show-menu');
        // Set aria-expanded="true" to hamburger button when menu is opened
        hamburgerBtnEl.setAttribute('aria-expanded', 'true');

    } else {
        // Close menu when clicking the hamburger button
        mainMenuEl.classList.remove('show-menu');
        // Set aria-expanded="false" to hamburger button when menu is closed
        hamburgerBtnEl.setAttribute('aria-expanded', 'false')

    }
})