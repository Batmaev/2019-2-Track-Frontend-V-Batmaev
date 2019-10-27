const template = document.createElement('template')
template.innerHTML = `
<message-form action="/"></message-form>
`

class MessageList extends HTMLElement {
    connectedCallback () {
       this.chat_id = this.getAttribute("chat_id")
       let everything = localStorage.getItem(`everything${this.chat_id}`)

       if(everything == null) {
           const example_message = document.createElement ("existing-message")
           example_message.setAttribute("text", "example")
           example_message.setAttribute("sender", "other")

           const time = new Date()
           const hours = time.getHours()
           let minutes = time.getMinutes()
           if(minutes < 10) minutes = `0${  minutes}`
           example_message.setAttribute("time", `${hours  }:${  minutes}`)

           localStorage.setItem(`everything${this.chat_id}`, example_message.outerHTML)
       }
       everything = localStorage.getItem(`everything${this.chat_id}`)
       this.insertAdjacentHTML("afterbegin", everything)

       this.insertAdjacentHTML("beforeend",template.innerHTML)
       this.input = this.querySelector("message-form")

    //    window.scrollTo(0, this.scrollHeight)
    }
}

customElements.define('message-list', MessageList)