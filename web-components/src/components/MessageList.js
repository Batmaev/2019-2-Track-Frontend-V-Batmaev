const template = document.createElement('template')
template.innerHTML = `
<message-form action="/"></message-form>
`

class MessageList extends HTMLElement {
    connectedCallback () {
       this.chat_id = this.getAttribute("chat_id")
       let everything = localStorage.getItem(`everything${this.chat_id}`)

       if(everything == null) {
           const exampleMessage = document.createElement ("existing-message")
           exampleMessage.setAttribute("text", "example")
           exampleMessage.setAttribute("sender", "other")

           const time = new Date()
           const hours = time.getHours()
           let minutes = time.getMinutes()
           if(minutes < 10) {
                minutes = `0${  minutes}`
           }
           exampleMessage.setAttribute("time", `${hours  }:${  minutes}`)

           localStorage.setItem(`everything${this.chat_id}`, exampleMessage.outerHTML)
       }
       everything = localStorage.getItem(`everything${this.chat_id}`)
       this.insertAdjacentHTML("afterbegin", everything)

       this.insertAdjacentHTML("beforeend",template.innerHTML)
       this.input = this.querySelector("message-form")
    }
}

customElements.define('message-list', MessageList)