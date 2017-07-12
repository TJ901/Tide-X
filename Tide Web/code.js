//Create variables that represent the DOM elements
var botText = document.getElementById('Character');
var userText = document.getElementById('About');
var sendMessage = document.getElementById('Episodes');
var messageText = document.getElementById('Blog');
var conversation = document.getElementById('conversation');

//Create variables that are representations of the User and Bot generated messages
var newMessage = userText.cloneNode();
var newPrompt = botText.cloneNode();

//Hide the original HTML message bubbles
botText.hidden = userText.hidden = true;

//Add Send Button functionality for the click event
sendMessage.addEventListener('click', function() {
    //if there is nothing typed in, don't send a message
    if (!messageText.value) {
        return;