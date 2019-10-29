const template = document.createElement('template')
template.innerHTML = `
<style>
   .main_text {
       font-size: 20px;
   }
   .time {
       font-size: 10px;
   }
</style>
<message-box>
<div id="text_in_message" class="main_text"></div>
<div id="sending_time" class="time"></div>
</message-box>
`

class ExistingMessage extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot = this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    connectedCallback () {
        this.shadowRoot.getElementById("text_in_message").innerText = this.getAttribute("text")
        this.shadowRoot.getElementById("sending_time").innerText = this.getAttribute("time")
    }
}
customElements.define('existing-message', ExistingMessage)