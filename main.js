
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const WHATSAPP_URL = "https://wa.me/27849091786?text=Hi%20Maestro%20Paints%2C%20I%27d%20like%20to%20enquire%20about%20your%20products.";

function header(active=""){
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" aria-label="Maestro Paints home">
        <img src="maestro-logo.jpg" class="logo" alt="Maestro Paints">
      </a>
      <button class="menu-toggle" aria-label="Open menu">☰</button>
      <nav class="main-nav">
        <a class="${active==="home"?"active":""}" href="index.html">Home</a>
        <a class="${active==="products"?"active":""}" href="products.html">Products</a>
        <a class="${active==="colours"?"active":""}" href="colours.html">Colours</a>
        <a class="${active==="story"?"active":""}" href="our-story.html">Our Story</a>
        <a class="${active==="contact"?"active":""}" href="contact.html">Contact</a>
      </nav>
      <a class="btn btn-red header-cta" href="contact.html">Enquire Now</a>
    </div>
  </header>`;
}

function footer(){
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="maestro-logo.jpg" class="footer-logo" alt="Maestro Paints">
          <p>Premium paints and coatings for every surface, built to last.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="products.html">Products</a>
          <a href="colours.html">Colours</a>
          <a href="our-story.html">Our Story</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Product Categories</h4>
          <a href="products.html">Wall Paints</a>
          <a href="products.html">Roof &amp; Exterior</a>
          <a href="products.html">Waterproofing &amp; Protection</a>
          <a href="products.html">Primers, Sealers &amp; Finishes</a>
          <a href="products.html">Accessories</a>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <p>084 909 1786</p>
          <p>info@maestropaints.co.za</p>
          <p>9 Maplefield Place,<br>Umgeni Business Park,<br>Durban</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Maestro Paints. All rights reserved.</span>
        <span>Privacy Policy &nbsp; | &nbsp; Terms &amp; Conditions</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = $("#site-header");
  const footerTarget = $("#site-footer");
  if(headerTarget) headerTarget.innerHTML = header(document.body.dataset.page || "");
  if(footerTarget) footerTarget.innerHTML = footer();

  $$(".whatsapp-link").forEach(a => a.href = WHATSAPP_URL);

  const menu = $(".menu-toggle");
  if(menu){
    menu.addEventListener("click", () => $(".main-nav")?.classList.toggle("open"));
  }

  $$(".gallery-thumbs button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".gallery-thumbs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const main = $("#productMainImage");
      if(main) main.src = btn.dataset.src;
    });
  });

  $$(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".tab-button").forEach(b=>b.classList.remove("active"));
      $$(".tab-panel").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      $("#" + btn.dataset.tab)?.classList.add("active");
    });
  });

  const form = $("#contactForm");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get("name") || "";
      const email = fd.get("email") || "";
      const phone = fd.get("phone") || "";
      const message = fd.get("message") || "";
      const subject = encodeURIComponent("Maestro Paints Website Enquiry");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
      window.location.href = `mailto:info@maestropaints.co.za?subject=${subject}&body=${body}`;
    });
  }
});


/* ===== MAESTRO MOTION ===== */
(function initMaestroMotion(){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion) return;

  document.body.classList.add("motion-enabled");

  // Start hero animation only after the browser has painted the page once.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.add("motion-loaded"));
  });

  // Apply reveal classes without requiring repetitive markup.
  const revealGroups = [
    { selector: ".usp", direction: "", stagger: 70 },
    { selector: ".section-heading-row > *", direction: "", stagger: 90 },
    { selector: ".product-card", direction: "", stagger: 80 },
    { selector: ".help-copy", direction: "reveal-left", stagger: 0 },
    { selector: ".help-inner > .btn", direction: "reveal-right", stagger: 80 },
    { selector: ".story-copy > *", direction: "reveal-left", stagger: 65 },
    { selector: ".story-image", direction: "reveal-right", stagger: 120 },
    { selector: ".catalog .product-card", direction: "", stagger: 70 },
    { selector: ".contact-layout > *", direction: "", stagger: 100 },
    { selector: ".contact-card", direction: "", stagger: 60 },
    { selector: ".product-layout > *", direction: "", stagger: 100 },
    { selector: ".product-tabs", direction: "", stagger: 0 },
    { selector: ".info-section .container > *", direction: "", stagger: 70 }
  ];

  const revealItems = new Set();
  revealGroups.forEach(group => {
    $$(group.selector).forEach((el, index) => {
      if(el.closest(".hero")) return;
      el.classList.add("reveal");
      if(group.direction) el.classList.add(group.direction);
      el.style.setProperty("--reveal-delay", `${Math.min(index * group.stagger, 360)}ms`);
      revealItems.add(el);
    });
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        if(entry.target.classList.contains("help-strip")){
          entry.target.classList.add("is-visible");
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:.13, rootMargin:"0px 0px -5% 0px" });

  revealItems.forEach(el => observer.observe(el));

  const helpStrip = $(".help-strip");
  if(helpStrip) observer.observe(helpStrip);

  // Subtle Durban image parallax. Kept deliberately small to prevent crop issues.
  const story = $(".story-home");
  const storyImage = story ? $(".story-image", story) : null;
  let ticking = false;

  function updateStoryParallax(){
    ticking = false;
    if(!story || !storyImage) return;
    const rect = story.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    if(rect.bottom < 0 || rect.top > viewport) return;
    const progress = (viewport - rect.top) / (viewport + rect.height);
    const shift = Math.max(-10, Math.min(10, (progress - .5) * 20));
    storyImage.style.setProperty("--story-shift", `${shift.toFixed(2)}px`);
  }

  window.addEventListener("scroll", () => {
    if(!ticking){
      ticking = true;
      requestAnimationFrame(updateStoryParallax);
    }
  }, { passive:true });
  updateStoryParallax();

  // Fast, subtle page fade for internal HTML navigation.
  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if(!link) return;
    if(link.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = link.getAttribute("href");
    if(!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
    if(!href.includes(".html")) return;

    e.preventDefault();
    document.body.classList.add("page-leaving");
    window.setTimeout(() => { window.location.href = href; }, 165);
  });
})();
