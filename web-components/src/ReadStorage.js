
const messages = document.querySelector("messages");

const everything = localStorage.getItem("everything");

if(!everything || everything == 0){
    const example_message = document.createElement ("existing-message");
    example_message.setAttribute("text", "example");
    example_message.setAttribute("time", new Date());
    example_message.setAttribute("sender", "other");
    localStorage.setItem("everything", example_message.outerHTML);
}

messages.innerHTML = everything;