export default class Gestured {
    el: HTMLElement;
    offset: number;
    scrollY: number;
    closeCallback

    constructor(el, closeCallback) {
        this.el = el;
        this.closeCallback = closeCallback;

        // events
        this.el.addEventListener('touchstart', this.panstart.bind(this))
        this.el.addEventListener('touchmove', this.panmove.bind(this))
        this.el.addEventListener('touchend', this.panend.bind(this))
    }

    panstart(e) {
        this.scrollY = e.touches[0].clientY
        this.el.style.transition = "transform 0s"
    }
  
    panmove(e) {
        this.offset = e.touches[0].clientY - this.scrollY
        if(this.offset < 0 || !this.el.classList.contains('rta--opened')) return
        this.el.style.transform = `translate3D(0, ${this.offset}px, 0)`
    }
  
    panend(e) {
        this.el.style.transform = 'translate3D(0, 0, 0)'
        this.el.style.transition = null
        if(this.offset > 150) {
            this.offset = null
            this.closeCallback(e)
        }
    }
}