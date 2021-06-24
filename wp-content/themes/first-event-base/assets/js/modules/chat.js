class Chat {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let chatToggle = document.querySelectorAll('.event-map__toggle')[0];
 

        if(chatToggle){
            chatToggle.addEventListener('click', function() {
                this.chat_toggle();
                //console.log('pressed');
            }.bind(this));
        } else {}
    
    }

        
    chat_toggle() {
        let chatIframe = document.querySelectorAll('.event-map__side')[0];
        chatIframe.classList.toggle("closed");
    }

  
};

  
export default Chat;