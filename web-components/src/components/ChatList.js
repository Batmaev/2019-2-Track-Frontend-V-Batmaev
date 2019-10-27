const template  = document.createElement("template");
template.innerHTML = `
   <style>
      .create-chat {
         position: fixed;
         bottom: 50px;
         right: 50px;
         width: 40px;
         height: 40px;
         background: gray;
         border-radius: 50%;
        }
   </style>

   <img class="create-chat" src="./images/pencil.svg">

   <chat-in-chat-list chat_id="1" status="sent_and_read"></chat-in-chat-list>
   <chat-in-chat-list chat_id="2" status="unread"></chat-in-chat-list>
   <chat-in-chat-list chat_id="3"></chat-in-chat-list>
   <chat-in-chat-list chat_id="4"></chat-in-chat-list>
   <chat-in-chat-list chat_id="5"></chat-in-chat-list>
   <chat-in-chat-list chat_id="6"></chat-in-chat-list>
   <chat-in-chat-list chat_id="7"></chat-in-chat-list>
`

class ChatList extends HTMLElement {
    constructor(){
       super();
       this.shadowRoot = this.attachShadow({ mode: 'open' });
       this.shadowRoot.appendChild(template.content.cloneNode(true));

       this.create_button = this.shadowRoot.querySelector(".create-chat");
       this.create_button.addEventListener("click", this.Create_Chat.bind(this));
       this.num_of_chats = 7;
    }
    Create_Chat(){
        ++this.num_of_chats;
        const new_chat = document.createElement("chat-in-chat-list");
        new_chat.setAttribute("chat_id", this.num_of_chats);
        this.shadowRoot.appendChild(new_chat);
    }


}
customElements.define("chat-list", ChatList);