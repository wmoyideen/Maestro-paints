
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
