class Accordion {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let resourceToggle = document.getElementsByClassName("resource__toggle");
 

        for (var i = 0; i < resourceToggle.length; i++) {
            resourceToggle[i].addEventListener('click', function(event) {
                let targetElement = event.target || event.srcElement;
                this.resource_toggle(targetElement);
                //console.log('pressed');
            }.bind(this));
        }
    
    }

        
    resource_toggle(targetElement) {
        var self = this;
        console.log(targetElement)        
        let resourceElement = targetElement.closest(".resource");
        resourceElement.classList.toggle("closed");
    }

  
};

  
export default Accordion;