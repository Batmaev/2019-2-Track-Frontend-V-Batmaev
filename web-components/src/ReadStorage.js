        let number_of_messages = localStorage.getItem("Number of messages")
        if(!number_of_messages){
            localStorage.setItem("Number of messages", 1)
            number_of_messages = 1

            localStorage.setItem(1 + "text", "Example")
            localStorage.setItem(1 + "time", new Date())
            localStorage.setItem(1 + "sender", "Other")
        }

        for(let i = 1; i <= number_of_messages; ++i){
        let text = localStorage.getItem(i + "text");
        if(text) {
        let time = localStorage.getItem(i + "time");
        let sender = localStorage.getItem(i + "sender");
        let inserted_element = document.createElement ("existing-message");
        inserted_element.setAttribute("text",text);
        inserted_element.setAttribute("time",time)
        inserted_element.setAttribute("sender",sender);
        const messages = document.querySelector("messages");
        messages.insertBefore(inserted_element, messages.firstChild);
        }
        }