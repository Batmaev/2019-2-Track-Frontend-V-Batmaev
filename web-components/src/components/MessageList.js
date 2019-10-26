const template = document.createElement('template');
template.innerHTML = `
<message-form action="/"></message-form>
`;

class MessageList extends HTMLElement {
    connectedCallback () {
       this.chat_id = this.getAttribute("chat_id");
       let everything = localStorage.getItem(`everything${this.chat_id}`);

       if(everything == null) {
           console.log("wtf")
           const example_message = document.createElement ("existing-message");
           example_message.setAttribute("text", "example");
           example_message.setAttribute("time", new Date());
           example_message.setAttribute("sender", "other");
           localStorage.setItem(`everything${this.chat_id}`, example_message.outerHTML);
       }
       everything = localStorage.getItem(`everything${this.chat_id}`)
       this.insertAdjacentHTML("afterbegin", everything);

       this.insertAdjacentHTML("beforeend",template.innerHTML);
       this.input = this.querySelector("message-form");

       window.scrollTo(0, this.scrollHeight);
    }
}

customElements.define('message-list', MessageList)