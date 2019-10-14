const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            font-size: 20px;
        }

        :host {
            display: inline-block;
            // border: 1px solid rgba(25, 25, 25, 0.32);
        }
        button {
            position: fixed;
            right: 2px;
        }
    </style>
    <input type="text">
        <button>Прикрепить</button>
    </input>
`;

class FormInput extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        return this.$input.value
    }
}

customElements.define('form-input', FormInput)
