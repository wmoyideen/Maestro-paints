// Shared site chrome: edit header/footer here once and it updates every page.
const ARROW = '<span class="cta-arrow" aria-hidden="true">➜</span>';
const WHATSAPP_URL = 'https://wa.me/27849091786?text=Hi%20Maestro%20Paints%2C%20I%27d%20like%20to%20enquire%20about%20your%20products.';

const headerHTML = `<header class="site-header">
  <div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Maestro Paints home"><img src="maestro-logo.png" alt="Maestro Paints"></a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">MENU</button>
    <nav class="main-nav" aria-label="Primary navigation">
      <a href="index.html" data-page="index">HOME</a>
      <a href="products.html" data-page="products">PRODUCTS</a>
      <a href="colours.html" data-page="colours">COLOURS</a>
      <a href="our-story.html" data-page="our-story">OUR STORY</a>
      <a href="contact.html" data-page="contact">CONTACT</a>
    </nav>
    <a class="btn btn-red nav-cta" href="contact.html">ENQUIRE NOW ${ARROW}</a>
  </div>
</header>`;

const footerHTML = `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" aria-label="Maestro Paints home"><img class="footer-logo" src="maestro-logo.png" alt="Maestro Paints"></a>
      <p>Premium paints and coatings engineered for lasting performance and beautiful finishes.</p>
    </div>
    <div>
      <h4>QUICK LINKS</h4>
      <a href="index.html">Home</a><a href="products.html">Products</a><a href="colours.html">Colours</a><a href="our-story.html">Our Story</a><a href="contact.html">Contact</a>
    </div>
    <div>
      <h4>PRODUCT RANGE</h4>
      <a href="product-acrylic-pva.html">Acrylic PVA</a><a href="products.html">Acrylic Roof Paint</a><a href="products.html">Liquid Rubber</a><a href="products.html">Brick Dressing</a><a href="products.html">Roof-Shield Paint</a>
    </div>
    <div class="footer-contact">
      <h4>CONTACT US</h4>
      <a href="tel:+27849091786">084 909 1786</a>
      <a href="mailto:info@maestropaints.co.za">info@maestropaints.co.za</a>
      <p>9 Maplefield Place,<br>Umgeni Business Park,<br>Durban</p>
      <a class="footer-whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener">WHATSAPP US ${ARROW}</a>
    </div>
  </div>
</footer>`;

const headerMount=document.getElementById('site-header');
const footerMount=document.getElementById('site-footer');
if(headerMount) headerMount.innerHTML=headerHTML;
if(footerMount) footerMount.innerHTML=footerHTML;

const current=(location.pathname.split('/').pop()||'index.html').replace('.html','');
const currentNav = current.startsWith('product-') ? 'products' : current;
document.querySelectorAll('.main-nav a[data-page]').forEach(a=>{if(a.dataset.page===currentNav)a.classList.add('active');});

const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
