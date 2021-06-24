class Map {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let tabs = document.getElementsByClassName("event-map__side__tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', this.switch_tabs);
        };
    }

    switch_tabs(event) {
        let targetID = event.target.dataset.id;
        let sectionsPanel = document.getElementsByClassName("event-map__side__panel");
        let sectionsTab = document.getElementsByClassName("event-map__side__tab");
        let sectionsPanelChecked = document.querySelectorAll(".event-map__side__panel.active");
        let sectionsTabChecked = document.querySelectorAll(".event-map__side__tab.active");
        for (var i = 0; i < sectionsPanel.length; i++) {
            if(sectionsPanel[i].dataset.id === (targetID)){
                if(sectionsPanel[i].classList.contains('active')){
                    // do nout
                } else {
                    sectionsPanelChecked[0].classList.remove("active");
                    sectionsTabChecked[0].classList.remove("active");
                    sectionsPanel[i].classList.add("active");
                    sectionsTab[i].classList.add("active");
                }
            } else {}
        };

    }
  
};

  
export default Map;