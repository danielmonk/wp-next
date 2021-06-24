class Menu {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        var self = this
        // check again on resize
        self.menu_action();
    }

    menu_action() {
        let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        console.log(viewportWidth);

        /*
        window.addEventListener("resize", function(){
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            console.log(viewportWidth);
            if (viewportWidth < 768) {
                let body = document.body.parentNode;
                // menu toggle
                document.querySelectorAll('.menu__toggle')[0].addEventListener('click', function() {
                    if(body.classList.contains("menu-open")){
                        body.classList.remove("menu-open");
                    } else {
                        body.classList.add("menu-open");
                    }
                    //console.log('pressed');
                }.bind(this));
    
                // menu items
                document.addEventListener('click', function (event) {
    
                    // If the clicked element doesn't have the right selector, bail
                    if (!event.target.matches('.menu-item')) return;
                
                    // Don't follow the link
                    event.preventDefault();
                
                    // Log the clicked element in the console
                    console.log("test click");
                    if(body.classList.contains("menu-open")){
                        body.classList.remove("menu-open");
                    } else {
                        body.classList.add("menu-open");
                    }
                    //console.log('pressed');
                
                }.bind(this));
            }
        });
        */

        if (viewportWidth < 768) {
            let body = document.body.parentNode;
            //console.log("testing width");
            // menu toggle
            document.querySelectorAll('.menu__toggle')[0].addEventListener('click', function() {
                //console.log("testing testing");
                if(body.classList.contains("menu-open")){
                    body.classList.remove("menu-open");
                } else {
                    body.classList.add("menu-open");
                }
            }.bind(this));

            // menu items
            document.addEventListener('click', function (event) {

                // If the clicked element doesn't have the right selector, bail
                if (!event.target.matches('.menu-item')) return;
            
                // Don't follow the link
                event.preventDefault();
            
                // Log the clicked element in the console
                console.log("test click");
                if(body.classList.contains("menu-open")){
                    body.classList.remove("menu-open");
                } else {
                    body.classList.add("menu-open");
                }
                //console.log('pressed');
            
            }.bind(this));
        }

        
    }
  
};

  
export default Menu;