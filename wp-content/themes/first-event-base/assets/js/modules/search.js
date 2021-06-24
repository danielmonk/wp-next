import AOS from "aos";

class Search {

    constructor() {
        this._init_events();
    }
  
    _init_events() {
        let searchBtn = document.getElementById("search-btn");
        let clearBtn = document.getElementById("clear-filter");
        if(searchBtn){
            searchBtn.addEventListener('click', this.live_search);
        }
        if(clearBtn){
            clearBtn.addEventListener('click', this.clear_filter);
        }
    }

    live_search(event) {
        let targetID = document.getElementById("ajax-filter").value;
        //console.log(targetID);
        let sectionsBlock = document.getElementsByClassName("multi-col-section");
        let searchInput = document.getElementById("search");
        let searchValue = searchInput.value;
        let sectionsBlockSearch = document.querySelectorAll(".multi-col-section[data-id='" + targetID + "']");

        const isEmpty = str => !str.trim().length;
        
        if(targetID === 'all'){
            for (var i = 0; i < sectionsBlock.length; i++) {
                sectionsBlock[i].classList.remove("hidden");
            }
            if(searchValue === ''){
                for (var i = 0; i < sectionsBlock.length; i++) {
                    sectionsBlock[i].classList.remove("hidden");
                }
            } else {
                for (var i = 0; i < sectionsBlock.length; i++) {
                    sectionsBlock[i].classList.remove("hidden");
                    
                    if( isEmpty(searchValue) ) {

                    } else {
                        if(sectionsBlock[i].classList.contains("hidden")){
                            console.log("hidden");

                        } else {
                            let singleItem = sectionsBlock[i].querySelectorAll('.resource-repeater__single');

                            console.log("not hidden");

                            for (var i = 0; i < singleItem.length; i++) {
                                singleItem[i].classList.remove("hidden");
                                if(singleItem[i].textContent.includes(searchValue)){
                                    singleItem[i].classList.add("visible");
                                } else {
                                    singleItem[i].classList.add("hidden");
                                }
                            }
                        }
                    }
                }
            }
        } else { 
            for (var i = 0; i < sectionsBlock.length; i++) {
                sectionsBlock[i].classList.add("hidden");
            }
            if(searchValue === ''){
                for (var i = 0; i < sectionsBlockSearch.length; i++) {
                    sectionsBlockSearch[i].classList.remove("hidden");
                }
            } else {
                for (var i = 0; i < sectionsBlockSearch.length; i++) {
                    sectionsBlockSearch[i].classList.remove("hidden");
                    
                    if( isEmpty(searchValue) ) {

                    } else {
                        if(sectionsBlockSearch[i].classList.contains("hidden")){
                            console.log("hidden");

                        } else {
                            let singleItem = sectionsBlockSearch[i].querySelectorAll('.resource-repeater__single');

                            console.log("not hidden");

                            for (var i = 0; i < singleItem.length; i++) {
                                singleItem[i].classList.remove("hidden");
                                if(singleItem[i].textContent.includes(searchValue)){
                                    singleItem[i].classList.add("visible");
                                } else {
                                    singleItem[i].classList.add("hidden");
                                }
                            }
                        }
                    }
                }
            }
        }
        AOS.refresh();
    }

    clear_filter(){
        let targetID = document.getElementById("ajax-filter");
        let searchInput = document.getElementById("search");
        let sectionsBlock = document.getElementsByClassName("multi-col-section");
        let singleItem = document.querySelectorAll('.resource-repeater__single');

        // reset option to first choice, search to empty and remove all hidden classes
        targetID.selectedIndex = 0;
        searchInput.value = '';
        for (var i = 0; i < sectionsBlock.length; i++) {
            sectionsBlock[i].classList.remove("hidden");
        }
        for (var i = 0; i < singleItem.length; i++) {
            singleItem[i].classList.remove("hidden");
        }
    }
  
};

  
export default Search;