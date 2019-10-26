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
        if(this.$input.value != 0){
            const inserted_element = document.createElement ("existing-message");
            inserted_element.setAttribute("text",this.$input.value);
            inserted_element.setAttribute("sender", "I");
            inserted_element.setAttribute("class", "sent_by_me");

            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            inserted_element.setAttribute("time", `${hours  }:${  minutes}`);

            const messages = this.parentElement;
            messages.insertBefore(inserted_element, messages.firstChild);
            this.chat_id = messages.chat_id
            localStorage.setItem(`everything${this.chat_id}`, messages.innerHTML);

            this.$input.$input.value = ""
            inserted_element.scrollIntoView(true);
        }
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
