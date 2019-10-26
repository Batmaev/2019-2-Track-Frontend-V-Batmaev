const template = document.createElement('template');
template.innerHTML = `
<message-form action="/"></message-form>
`;

class MessageList extends HTMLElement {
    connectedCallback () {
       const chat_id = this.getAttribute("chat_id");
       let everything = localStorage.getItem(`everything${chat_id}`);

       if(everything == null) {
           console.log("wtf")
           const example_message = document.createElement ("existing-message");
           example_message.setAttribute("text", "example");
           example_message.setAttribute("time", new Date());
           example_message.setAttribute("sender", "other");
           localStorage.setItem(`everything${chat_id}`, example_message.outerHTML);
       }
       everything = localStorage.getItem(`everything${chat_id}`)
       this.insertAdjacentHTML("afterbegin", everything);

       this.insertAdjacentHTML("beforeend",template.innerHTML);
       this.input = document.querySelector("message-form");
       this.input.chat_id = chat_id;

       window.scrollTo(0, this.scrollHeight);
    }
}

customElements.define('message-list', MessageList)