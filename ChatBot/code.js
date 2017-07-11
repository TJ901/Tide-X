//The sample application will utilize Javascript for DOM manipulation and a simple form for input/output actions

//Array of quotes to choose from as a message
var quotes = [
"For me, gaming is an adventure and it's full of amazing graphics, fun and excitement.",
"Art is expressing yourself and making something you feel is amazing and special.",
"Watching TV helps me relax and calms my mind",
"Fight me!",
"If you think you can beats me in a game, 'Challege accepted!'",
"Let's see how good you really."
];

//Create variables that represent the DOM elements
var botText = document.getElementById('botText');
var userText = document.getElementById('userText');
var sendMessage = document.getElementById('send');
var messageText = document.getElementById('message');
var conversation = document.getElementById('conversation');

//Miscellaneous test code to access the text displayed in the messages
/*
botText.innerText = 'javascript rules';
userText.innerText = 'yea buddy';
*/

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
    }

    //New message process
    newMessage = newMessage.cloneNode(); //Make a fresh copy of the message bubble WITHOUT the text. if cloneNode(true), the text is also copied
    newMessage.innerText = messageText.value; //set the text in the message to match the input entered by the user
    messageText.value = ''; //empty out the input box
    conversation.appendChild(newMessage); //add the new message bubble to the chat screen
    newMessage.scrollIntoView(); //scroll down to show the new message

    //prepare bot to respond after 2.5 seconds
    setTimeout(function() {
        
        //make a new copy of the bot message element
        newPrompt = newPrompt.cloneNode();
        
        if (newMessage.innerText.toLowerCase().includes('game'), ('fame'), ('Hey Tide'), ('What up' ), ('Tell me about yourself') ) { //if the user typed in gaming/Gaming/gaMing/how old are you?/etc, show a new quote
            newPrompt.innerText = quotes[Math.floor(Math.random() * quotes.length)]; //set the message to include a quote

        } else if (newMessage.innerText.toLowerCase().includes('play')) { //if the user typed in play, playing and close the window
            
            alert('Thanks for playing with this guy!');
            window.close();

        } else { //if the user typed in something else, reply with nope, mon
            
            newPrompt.innerText = 'nope';

        }
        
        conversation.appendChild(newPrompt); //add the message to the conversation
        newPrompt.scrollIntoView(); //scroll down to show it
    }, 2500) //set the time delay for the reply to 2.5 seconds. Written in milliseconds
});

//Allow the enter key to send the messages to the bot
messageText.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) { 
        sendMessage.click();
    }
})

//when the page loads, send the initial greetings from the bot
window.addEventListener('load', function() {
    //New message process
    newPrompt = newPrompt.cloneNode();
    newPrompt.innerText = "Take this time to get to know about Tide.";
    conversation.appendChild(newPrompt);
    newPrompt.scrollIntoView();

    //delay the follow up instructional message
    setTimeout(function() {
        newPrompt = newPrompt.cloneNode();
        newPrompt.innerText = "Reply 'game' or 'fame' to find out what the Tide is all about";
        conversation.appendChild(newPrompt);
        newPrompt.scrollIntoView();
    }, 2000);

});