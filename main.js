

// Remove '.display' from gray-background and modals when transition ends (opacity set to 0)
var modals = document.getElementsByClassName('modal');
var grayBackground = document.getElementsByClassName('gray-clickable-background')[0];

var toUndisplay = Array.from(modals);
toUndisplay.push(grayBackground);

toUndisplay.forEach(function(elem) {
    elem.addEventListener('transitionend', function() {
        if (!elem.classList.contains('show'))
            elem.classList.remove('display');
    })
});

// Close all modal windows and remove gray background
function closeModals() {
    toUndisplay.forEach(function(elem) {
        elem.classList.remove('show');
    });
}

// Display modal window by its id and show gray-background
function showModal(id) {
    grayBackground.classList.add('display');
    setTimeout(function() {
        grayBackground.classList.add('show');
    }, 0);

    clearPhone();

    // TODO: Show 'phoneCall'
    var node = document.getElementById(id);
    node.classList.add('display');
    setTimeout(function() {
        node.classList.add('show');
    });
}


// Open phone-call modal window
function openPhone() {
    showModal('phoneCall');
}

function clearPhone() {
    // TODO: Clear all fields of 'phoneCall'
    document.getElementById('phoneName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('phoneTime').value = '';
}

function phoneCall(name, phone, time) {
    if (!name || !phone || !time) {
        alert('Необходимо заполнить все данные.');
        return;
    }

    alert(name + ', мы обязательно перезвоним вам в указанное время! (Нет)');
}


// Open chat modal window
function openChat() {
    showModal('chat');
}

// Send message to chat
function sendMessage(message) {
    if (!message)
        return;

    var div = document.createElement('div');
    div.classList.add('chat-message');
    div.innerHTML = 'Вы: ' + message;
    var chatMessages = document.getElementById('chatMessages');
    chatMessages.insertBefore(div, chatMessages.childNodes[0]);

    // Clear myMessage box
    document.getElementById('myMessage').value = '';
}
