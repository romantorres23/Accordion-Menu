class Accordion {
    constructor(el) {
        this.el = document.querySelector(el);
        let h3s = this.el.querySelectorAll('h3');
        
        for (let i = 0 ; i < h3s.length; i++){
            h3s[i].addEventListener("click", () => {
                this.toggle(h3s[i]);
            });
        };
    }

    open(el) {
        let openedEl = this.el.querySelector(".open");
        if (openedEl !== null) {
            openedEl.classList.remove("open");
        }

        el.parentElement.classList.add("open");
    }

    close(el) {
        el.parentElement.classList.remove("open");
    }

    toggle(el) {
        if (this.isOpened(el)) {
            this.close(el);
        } else {
            this.open(el);
        }
    }

    isOpened(el) {
        return el.parentElement.classList.contains("open");
    }

};