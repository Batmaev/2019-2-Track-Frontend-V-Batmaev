const template = document.createElement('template')
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            font-size: 20px;
            position: fixed;
            bottom: 0px;
        }

        :host {
            display: inline-block;
        }
    </style>

    <input type="text"></input>
`

class FormInput extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot = this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.$input = this.shadowRoot.querySelector('input')
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue)
    }

    get value() {
        return this.$input.value
    }
}

customElements.define('form-input', FormInput)
