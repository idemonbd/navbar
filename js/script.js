
// Resonsite Navigation Menu Javascript

var a = document.querySelector('#navbar ul');
var b = document.querySelector('#navbar ul');

function show() {
    if (a.className == 'toggle') {
        return a.className = '';
    }
    return a.className = 'toggle';
}
