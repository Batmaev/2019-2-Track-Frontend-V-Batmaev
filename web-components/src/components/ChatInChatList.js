const template = document.createElement('template')
template.innerHTML = `
<style>
    :host {
        display: flex; 
        flex-direction: row;
        background-color: white;
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
    }
    .avatar {
        border-radius: 50%;
        margin: 5px;
        flex-grow: 0;
    }
    .name_and_text {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .time_and_status {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: center;
        margin: 7px;
    }
    .message_text {
        flex-grow: 1;
    }
    .status {
        width: 20px;
        height: 20px;
    }
    .name {
        font-weight: bold;
    }
    .unread {
        background-color: blue;
        border-radius: 50%;
        color: white;
        font-size: 10px;
        text-align: center;
    }
</style>

    <img class="avatar" src="http://img.greatlove.ru/article/7/9/8/16798.jpeg"
         width="50px" height="50px">
    <div class="name_and_text">
        <div class="name">Смерть</div>
        <div class="message_text">Жизнь</div>
    </div>
    <div class="time_and_status">
        <div class="time">15:52</div>
        <div>
            <img class="status" src="https://image.flaticon.com/icons/svg/60/60731.svg">
        </div>
    </div>
`

class ChatInChatList extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.name = this.shadowRoot.querySelector('.name');
        this.text = this.shadowRoot.querySelector('.message_text');
        this.time = this.shadowRoot.querySelector('.time');
        this.status = this.shadowRoot.querySelector('.status');

        this.addEventListener("click", this.Show_Messages);
    }
    connectedCallback() {
        this.chat_id = this.getAttribute("chat_id");
        this.name.innerText = `Чат Номер ${this.chat_id}`;

        this.message_list = document.createElement("message-list");
        this.message_list.setAttribute("style", "display : none;");
        this.message_list.setAttribute("chat_id", this.chat_id);
        document.body.insertAdjacentElement("beforeend", this.message_list);

        const last_message = this.message_list.firstChild;
        this.text.innerText = last_message.getAttribute("text");
        this.time.innerText = last_message.getAttribute("time");

        const status_attribute = this.getAttribute("status");
        switch (status_attribute) {
            case "sent_and_read":
                this.status.setAttribute("src", "https://image.flaticon.com/icons/svg/60/60727.svg");
                break;
            case "unread":
                this.status.outerHTML = `
                   <div class="status unread">1</div>
                `
               break;
            default:
                break;
        }
    }
    Show_Messages() {
        this.chat_list = document.querySelector("chat-list");
        this.chat_list.setAttribute("style", "display : none;");
        this.message_list.removeAttribute("style");
        
        const top = document.querySelector("top");
        this.header = top.querySelector("h2");
        this.header.innerText = this.name.innerText;

        this.left_button = document.getElementById("left-button");
        this.left_button.setAttribute("src", "./images/left-arrow.svg")
        this.left_button.addEventListener('click', this.Show_Dialogs.bind(this));
    }
    Show_Dialogs(){
        this.left_button.setAttribute("src", "./images/menu-button.svg");
        this.left_button.removeEventListener("click", this.Show_Dialogs);
        this.message_list.setAttribute("style", "display: none;");
        this.chat_list.removeAttribute("style");
        this.header.innerText = "Messenger";
        this.connectedCallback();
    }

}

customElements.define('chat-in-chat-list', ChatInChatList);