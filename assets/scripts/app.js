const main = {
  init() {
    this.cacheElements();
    this.generateNavListener();
  },

  cacheElements() {
    this.$header = document.querySelector('.header--top')
    this.$eventCards = document.querySelector('.section--events');

    this.$primaryNav = document.querySelector('.mobile-navigation');
    this.$navToggle = document.querySelector('.nav-toggle');
    this.$toggle = document.querySelector(`.close-toggle`)
  },

  generateNavListener() {
    this.$navToggle.addEventListener('click', () => {
      const visibility = this.$primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
        this.$primaryNav.setAttribute("data-visible", true);
        this.$navToggle.setAttribute("aria-expanded", true);
        this.$toggle.classList.add('selected');

      } else {
        this.$primaryNav.setAttribute("data-visible", false);
        this.$navToggle.setAttribute("aria-expanded", false);
        this.$toggle.classList.remove('selected');
      }
    })
  },

  
};
main.init();