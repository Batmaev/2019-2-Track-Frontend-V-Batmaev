let number_of_messages = localStorage.getItem("Number of messages")
const messages = document.querySelector("messages");

if(!number_of_messages){
    localStorage.setItem("Number of messages", 1)
    number_of_messages = 1;
    let example_message = document.createElement ("existing-message");
    example_message.setAttribute("text", "example");
    example_message.setAttribute("time", new Date());
    example_message.setAttribute("sender", "other");
    localStorage.setItem("1message", example_message.outerHTML);
}

for(let i = 1; i <= number_of_messages; ++i){
   const one_message = localStorage.getItem(i + "message");
    messages.insertAdjacentHTML("afterbegin", one_message)
}