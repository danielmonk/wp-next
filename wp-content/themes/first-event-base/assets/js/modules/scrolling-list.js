const ScrollingList = class {
  constructor() {
    this._init_events();
  }

  _init_events() {
    window.addEventListener("DOMContentLoaded", this.scrollFunction.bind(this));
  }

  scrollFunction() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`.scrolling-list-element nav li a[href="#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          document
            .querySelector(`.scrolling-list-element nav li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll(".scrolling-section[id]").forEach((section) => {
      observer.observe(section);
    });
  }
};

export default ScrollingList;
