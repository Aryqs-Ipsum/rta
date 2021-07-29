export default class Gestured {
    el: HTMLElement;
    offset: number;
    scrollY: number;
    scrollingTimeout: any;
    isScrolling: boolean = false;
    scrollBox: HTMLElement;
    closeCallback

    constructor(el, closeCallback) {
        this.el = el;
        this.closeCallback = closeCallback;

        this.scrollBox = this.el.querySelector('.rta__box')
        if(this.scrollBox) {
            this.scrollBox.addEventListener('scroll', (e) => {
                this.isScrolling = true
                window.clearTimeout( this.scrollingTimeout )
                this.scrollingTimeout = setTimeout(function() {
                    this.isScrolling = false
                }, 66)
            })
        }

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
        if(this.scrollBox && this.isScrolling) {
            if(this.scrollBox.scrollTop !== 0) return this.offset = 0
        }
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