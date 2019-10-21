/* eslint-disable camelcase */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
            position: fixed;
            bottom: 1px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();

        let number_of_messages = localStorage.getItem("Number of messages")
        if(!number_of_messages){
            localStorage.setItem("Number of messages", 1)
            number_of_messages = 0
        }

        ++number_of_messages;
    
        const inserted_element = document.createElement ("existing-message");
        inserted_element.setAttribute("text",this.$input.value);
        inserted_element.setAttribute("time", new Date())
        inserted_element.setAttribute("sender", "I");
        inserted_element.setAttribute("class", "sent_by_me");
        const messages = document.querySelector("messages");
        messages.insertBefore(inserted_element, messages.firstChild);

        this.$input.$input.value = ""

        localStorage.setItem("Number of messages", number_of_messages)
        localStorage.setItem(`${number_of_messages  }message`, inserted_element.outerHTML);
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
