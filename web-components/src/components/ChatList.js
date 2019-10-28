const template  = document.createElement("template")
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
         box-shadow: 0 0 5px rgba(0,0,0,0.5);
         transition: height 0.5s, width 0.5s, right 0.5s, bottom 0.5s, box-shadow 0.5s, transform 1s;
       }
      :hover {
         background: rgb(220,220,255);
       }
      .create-chat:hover {
         height: 60px;
         width: 60px;
         right: 40px;
         bottom: 40px;
         box-shadow: 0 0 10px rgba(0,0,0,0.5);
       }
       .create-chat:active {
          transform: rotate(-90deg);
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
       super()
       this.shadowRoot = this.attachShadow({ mode: 'open' })
       this.shadowRoot.appendChild(template.content.cloneNode(true))

       this.create_button = this.shadowRoot.querySelector(".create-chat")
       this.create_button.addEventListener("click", this.CreateChat.bind(this))
    }
    
    connectedCallback(){
      let k = 7
      while(localStorage.getItem(`everything${k}`)){
         const newChat = document.createElement("chat-in-chat-list")
         newChat.setAttribute("chat_id", k)
         this.shadowRoot.appendChild(newChat)
         k += 1
      }
      this.num_of_chats = k - 1
    }

    CreateChat(){
        this.num_of_chats += 1
        const newChat = document.createElement("chat-in-chat-list")
        newChat.setAttribute("chat_id", this.num_of_chats)
        this.shadowRoot.appendChild(newChat)
    }
}
customElements.define("chat-list", ChatList)