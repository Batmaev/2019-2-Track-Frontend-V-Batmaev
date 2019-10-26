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
        
    }
</style>

    <img class="avatar" src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"
         width="50px" height="50px">
    <div class="name_and_text">
        <div class="name">Смерть</div>
        <div class="message_text">Жизнь</div>
    </div>
    <div class="time_and_status">
        <div class="time">15:52</div>
        <div class="status">
            <img class="status" src="https://cdn.icon-icons.com/icons2/510/PNG/512/checkmark_icon-icons.com_50429.png">
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
        this.name = this.shadowRoot.querySelector('.name');
        this.status = this.shadowRoot.querySelector('.name');

        this.addEventListener("click", this.Load_Messages);
    }
    connectedCallback() {
        this.chat_id = this.getAttribute("chat_id");
    }
    Load_Messages() {
        const chat_list = document.querySelector("chat-list");
        chat_list.setAttribute("style", "display : none;");

        const message_list = document.createElement("message-list");
        message_list.setAttribute("chat_id", this.chat_id);
        document.body.insertAdjacentElement("beforeend" ,message_list);

        this.setAttribute("style", "display : none;");
        message_list.removeAttribute("style");
    }

}

customElements.define('chat-in-chat-list', ChatInChatList);