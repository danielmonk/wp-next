class Modal {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let modalClose = document.querySelectorAll('.popup .close');
        let modalBtn = document.querySelectorAll('.login');
        let modalInline = document.querySelectorAll('.modal-section__inline')[0];
        let lockedPage = document.querySelectorAll('.menu-item.locked');
        const triggers = document.querySelectorAll('.modal-section__trigger');
        const contents = document.querySelectorAll('.modal-section__content');
 

        if(modalClose){
            document.querySelectorAll('.popup .close').forEach(elem => {
                elem.addEventListener('click', (e) => {
                    console.log("close");
                    let data_id = elem.getAttribute('data-id');
                    this.modal_close(data_id);
                });
            });
            /*
            modalClose.addEventListener('click', function() {
                this.modal_close();
                //console.log('pressed');
            }.bind(this));
            */
        } else {}

        // trigger modal with button
        if(modalBtn){

            document.querySelectorAll('.login, .logout').forEach(elem => {
                elem.addEventListener('click', (e) => {
                    let data_id = elem.getAttribute('data-id');
                    e.preventDefault();
                    this.modal_close(data_id);
                    //console.log('pressed');
                });
            });

            /*
            modalBtn.addEventListener('click', function() {
                this.modal_close();
                //console.log('pressed');
            }.bind(this));
            */
           
        } else {}

        //trigger modal with locked page
        if(lockedPage){

            document.querySelectorAll('.menu-item.locked').forEach(elem => {
                //console.log("test count");
                elem.addEventListener('click', (e) => {
                    if (document.body.classList.contains('logged-in')) {

                    } else {
                        let data_id = elem.querySelector('a').getAttribute('data-id');
                        e.preventDefault();
                        this.modal_close(data_id);
                    }
                });
            });

            /*
            modalBtn.addEventListener('click', function() {
                this.modal_close();
                //console.log('pressed');
            }.bind(this));
            */
           
        } else {}

        // if modal inline 
        if(modalInline){
            [].forEach.call(triggers, a => {
                a.addEventListener('click', function() {
                    let triggerSelected = document.querySelectorAll('.modal-section__trigger.selected')[0];
                    if(a.classList.contains("selected")){
                        let selectedID = a.dataset.id;
                        [].forEach.call(contents, b => {
                            if(b.dataset.id === selectedID){
                                b.classList.toggle("selected");
                            } else {}
                        });
                        if(triggerSelected){
                            triggerSelected.classList.toggle("selected");
                        } else {}
                    } else {
                        if(triggerSelected){
                            triggerSelected.classList.toggle("selected");
                        } else {}
                        a.classList.toggle("selected");
                        let selectedID = a.dataset.id;
                        let contentSelected = document.querySelectorAll('.modal-section__content.selected')[0];
                        [].forEach.call(contents, b => {
                            if(b.dataset.id === selectedID){
                                if(contentSelected){
                                    contentSelected.classList.toggle("selected");
                                } else {}
                                b.classList.toggle("selected");
                            } else {}
                        });
                    }
                });
            });
        } else {}
    }

    modal_close(data_id) {
        let modal = document.querySelectorAll('.overlay')[0];
        let body = document.querySelectorAll('html')[0];
        //body.classList.toggle("modal-open");
        //modal.classList.toggle("modal-closed");

        console.log(data_id);

        document.querySelectorAll('.overlay').forEach(elem => {
            //console.log(elem.getAttribute("data-id"));
            if (elem.getAttribute("data-id") === data_id) {
                body.classList.toggle("modal-open");
                elem.classList.toggle("modal-closed");
            } else {

            }
        });
    }

    modal_inline_trigger(){

    }
  
};

  
export default Modal;