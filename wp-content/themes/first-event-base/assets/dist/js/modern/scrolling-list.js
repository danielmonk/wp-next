const e=class{constructor(){this._init_events()}_init_events(){window.addEventListener("DOMContentLoaded",this.scrollFunction.bind(this))}scrollFunction(){const e=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target.getAttribute("id");e.intersectionRatio>0?document.querySelector(`.scrolling-list-element nav li a[href="#${t}"]`).parentElement.classList.add("active"):document.querySelector(`.scrolling-list-element nav li a[href="#${t}"]`).parentElement.classList.remove("active")}))}));document.querySelectorAll(".scrolling-section[id]").forEach((t=>{e.observe(t)}))}};export default e;