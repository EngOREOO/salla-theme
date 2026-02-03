document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  // Hero slider
  const heroSlider = document.querySelector("[data-hero-slider]");
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll("[data-hero-slide]");
    const dots = heroSlider.querySelectorAll("[data-hero-dot]");
    const prevBtn = heroSlider.querySelector("[data-hero-prev]");
    const nextBtn = heroSlider.querySelector("[data-hero-next]");
    let heroIndex = 0;
    let autoTimer;

    function setHeroSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
      heroIndex = index;
    }

    function nextHero() {
      const next = (heroIndex + 1) % slides.length;
      setHeroSlide(next);
    }

    function prevHero() {
      const prev = (heroIndex - 1 + slides.length) % slides.length;
      setHeroSlide(prev);
    }

    function startAuto() {
      autoTimer = setInterval(nextHero, 8000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { prevHero(); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { nextHero(); resetAuto(); });
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        setHeroSlide(i);
        resetAuto();
      });
    });

    if (slides.length > 0) {
      setHeroSlide(0);
      if (slides.length > 1) startAuto();
    }
  }

  // Generic horizontal sliders (products, testimonials, etc.)
  document.querySelectorAll("[data-slider]").forEach((sliderEl) => {
    const track = sliderEl.querySelector("[data-slider-track]");
    const dots = sliderEl.querySelectorAll("[data-slider-dot]");
    const prev = sliderEl.querySelector("[data-slider-prev]");
    const next = sliderEl.querySelector("[data-slider-next]");

    if (!track) return;

    function getItemWidth() {
      const firstItem = track.querySelector(".slider-item");
      return firstItem ? firstItem.getBoundingClientRect().width + 16 : 300;
    }

    function scrollByDir(dir) {
      const w = getItemWidth();
      track.scrollBy({ left: dir * -w, behavior: "smooth" });
    }

    if (prev) prev.addEventListener("click", () => scrollByDir(1));
    if (next) next.addEventListener("click", () => scrollByDir(-1));

    if (dots.length > 0) {
      function updateDots() {
        const scrollLeft = track.scrollLeft;
        const width = getItemWidth();
        const index = Math.round(scrollLeft / width);
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === index);
        });
      }
      track.addEventListener("scroll", () => {
        window.requestAnimationFrame(updateDots);
      });
      updateDots();
    }
  });

  // FAQ accordion
  document.querySelectorAll("[data-faq-item]").forEach((item) => {
    const header = item.querySelector("[data-faq-toggle]");
    const body = item.querySelector("[data-faq-body]");
    if (!header || !body) return;
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll("[data-faq-item].is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          const openBody = openItem.querySelector("[data-faq-body]");
          if (openBody) openBody.style.maxHeight = "0px";
        }
      });
      if (!isOpen) {
        item.classList.add("is-open");
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        item.classList.remove("is-open");
        body.style.maxHeight = "0px";
      }
    });
  });

  // Wishlist toggle UI (front-end only)
  document.querySelectorAll("[data-wishlist-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.classList.toggle("is-active");
    });
  });
});

