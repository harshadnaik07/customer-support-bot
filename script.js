const input = document.getElementById("userInput");

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});

function quickReply(text){
    input.value = text;
    sendMessage();
}

function sendMessage(){

    const message = input.value.trim();

    if(message === "") return;

    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `
    <div class="user-message">${message}</div>`;

    let msg = message.toLowerCase();
    let response = "";

    if(msg.includes("track") || msg.includes("order")){
        response =
        "📦 Order Status: Your order is currently in transit and will arrive within 2-3 business days.";
        
    }

    else if(msg.includes("return")){
        response =
        "🔄 Return Policy: Products can be returned within 7 days of delivery.";
    }

    else if(msg.includes("product")){
        response =
        "💻 We offer laptops, smartphones, smartwatches, headphones, and accessories.";
    }

    else if(msg.includes("payment")){
        response =
        "💳 Payment Help: Please verify your card details or try another payment method.";
    }

    else if(msg.includes("contact")){
        response =
        "📞 Phone: +91 9876543210 <br> 📧 Email: support@abcstore.com";
    }

    else if(msg.includes("hours")){
        response =
        "🕘 Business Hours: Monday to Saturday, 9:00 AM - 6:00 PM";
    }

    else if(msg.includes("hello") || msg.includes("hi")|| msg.includes("hey")){
        response =
        "👋 Hello! How can I help you today?";
    }

    else{
        response =
        "❌ Sorry, I didn't understand your request. Please use one of the available services.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `
        <div class="bot-message">${response}</div>`;

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}
