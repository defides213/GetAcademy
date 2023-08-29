function enterPress(event) {
    let textBubbleResource;
    if(event.keyCode === 13) {
        textBubbleResource = document.getElementById("messages").value;
        document.getElementById("messages").value = '';
        document.getElementById("textBox").innerHTML += `
        <div class="userMsg textbuble">${textBubbleResource}</div>
        `;
        document.getElementById("textBox").scrollTop = document.getElementById("textBox").scrollHeight - document.getElementById("textBox").clientHeight;
        botMessage(textBubbleResource);
    }
}

let currentMsg = 0;
function botMessage(chat) {
    let botResponse;
    chat = chat.toLowerCase();
    setTimeout(function() {
        botResponse = ". . .";
        document.getElementById("textBox").innerHTML += `
            <div class="botMsg textbuble" id="dotMsg${currentMsg}">. . .</div>
            `;
            document.getElementById("textBox").scrollTop = document.getElementById("textBox").scrollHeight - document.getElementById("textBox").clientHeight;
    }, 200);
    setTimeout(function() {
        if(chat === "hello" || chat === "hi") {
            botResponse = "Hello!";
        }
        else if(chat === "how are you doing?" || chat === "how are you doing" || chat === "how are you" || chat === "how are you?") {
            botResponse = "I am doing fine, Thanks for asking.";
        }
        else if(chat === "are you human?" || chat === "are you human") {
            botResponse = "No, I am a bot that was made for a project. I have nothing else going on than that.";
        }
        else if(chat === "are you a robot?" || chat === "are you a robot") {
            botResponse = "Yes.";
        }
        else if(chat === "what is your name?" || chat === "what is your name") {
            botResponse = "ChatBot is the name my Creator gave me";
        }
        else if(chat === "how old are you?" || chat === "how old are you") {
            botResponse = "About a week or something. I don't know";
        }
        else if(chat === "what's your age?" || chat === "what's your age") {
            botResponse = "My age is my age.";
        }
        else if(chat === "what day is it today?" || chat === "what day is it today") {
            botResponse = "I am not smart enough to answer that.";
        }
        else if(chat === "what do you do with my data?" || chat === "what do you do with my data") {
            botResponse = "Nothing.";
        }
        else if(chat === "do you save what i say?" || chat === "do you save what i say") {
            botResponse = "No. It does not exist :)";
        }
        else if(chat === "who made you?" || chat === "who made you") {
            botResponse = "My Creator made Me.";
        }
        else if(chat === "which languages can you speak?" || chat === "which languages can you speak") {
            botResponse = "English, and only English";
        }
        else if(chat === "can you help me?" || chat === "can you help me") {
            botResponse = "Sure.";
        }
        else if(chat === "do you get smarter?" || chat === "do you get smarter") {
            botResponse = "No, I stay the same.";
        }
        else if(chat === "do you know a joke?" || chat === "do you know a joke") {
            botResponse = "Why do Java programmers use glasses? Because they can’t C#.";
        }
        else {
            botResponse = "I don't Understand";
        }
        document.getElementById(`dotMsg${currentMsg}`).innerHTML = `${botResponse}`;
        currentMsg++;
    }, 1000);
}