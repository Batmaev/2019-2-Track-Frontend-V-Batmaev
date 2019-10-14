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
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();

        localStorage.setItem(localStorage.length/3 + 1 + "text", `{this.$input.value}`);
        localStorage.setItem(localStorage.length/3 + 1 + "sender", "I");
        localStorage.setItem(localStorage.length/3 + 1 + "time", new Date());

        let inserted_element = document.createElement ("existing-message");
        inserted_element.setAttribute("text",this.$input.value);
        inserted_element.setAttribute("time", new Date())
        inserted_element.setAttribute("sender", "I");
        const messages = document.querySelector("messages");
        messages.insertBefore(inserted_element, messages.firstChild);

        this.$input.$input.value = ""
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
