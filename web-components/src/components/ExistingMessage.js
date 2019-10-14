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
<div id="text in message" class="main_text"></div>
<div id="sending time" class="time"></div>
</message-box>
`

class ExistingMessage extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot = this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback () {
        this.shadowRoot.getElementById("text in message").innerText = this.getAttribute("text")
        this.shadowRoot.getElementById("sending time").innerText = this.getAttribute("time")

        if(this.getAttribute("sender") == "I"){
        this.shadowRoot.querySelector("style").insertAdjacentHTML("afterbegin", ":host {align-self: flex-end;}")
    }
}
}
customElements.define('existing-message', ExistingMessage)