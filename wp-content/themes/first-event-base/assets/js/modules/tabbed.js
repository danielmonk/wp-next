class Tabbed {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let tabs = document.getElementsByClassName("tabbed-content__tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', this.switch_tabs);
        };
    }

    switch_tabs(event) {
        event.target.classList.toggle("done");
        let targetID = event.target.dataset.id;
        let sections = document.getElementsByClassName("tabbed-content__section");
        let sectionsChecked = document.querySelectorAll(".tabbed-content__section.checked");
        for (var i = 0; i < sections.length; i++) {
            //console.log("Sections found");
            if(sections[i].dataset.id === (targetID)){
                //console.log("matched");
                if(sections[i].classList.contains('checked')){
                    // do nout
                } else {
                    sectionsChecked[0].classList.remove("checked");
                    sections[i].classList.add("checked");
                }
            } else {}
        };

        //console.log(e);
        //console.log(e.currentTarget);
        //let modal = document.querySelectorAll('.overlay')[0]
        //modal.classList.add("modal-closed");
    }
  
};

  
export default Tabbed;