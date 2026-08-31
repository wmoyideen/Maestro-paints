// Shared site chrome: edit header/footer here once and it updates every page.
const headerHTML = `<header class="site-header">
  <div class="nav-shell">
    <a class="brand" href="index.html"><img src="maestro-logo.png" alt="Maestro Paints"></a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">MENU</button>
    <nav class="main-nav" aria-label="Primary navigation">
      <a href="index.html" data-page="index">HOME</a>
      <a href="products.html" data-page="products">PRODUCTS</a>
      <a href="colours.html" data-page="colours">COLOURS</a>
      <a href="our-story.html" data-page="our-story">OUR STORY</a>
      <a href="contact.html" data-page="contact">CONTACT</a>
    </nav>
    <a class="btn btn-red nav-cta" href="contact.html">ENQUIRE NOW <span>→</span></a>
  </div>
</header>`;
const footerHTML = `<footer class="site-footer">
  <div class="footer-grid">
    <div><img class="footer-logo" src="maestro-logo.png" alt="Maestro Paints"><p>Premium paints and coatings for every surface, built to last.</p></div>
    <div><h4>QUICK LINKS</h4><a href="index.html">Home</a><a href="products.html">Products</a><a href="colours.html">Colours</a><a href="our-story.html">Our Story</a><a href="contact.html">Contact</a></div>
    <div><h4>PRODUCT CATEGORIES</h4><a href="products.html">Wall Paints</a><a href="products.html">Roof & Exterior</a><a href="products.html">Waterproofing & Protection</a><a href="products.html">Primers, Sealers & Finishes</a><a href="products.html">Accessories</a></div>
    <div><h4>CONTACT US</h4><p>084 909 1786</p><p>info@maestropaints.co.za</p><p>9 Maplefield Place,<br>Umgeni Business Park,<br>Durban</p></div>
  </div>
</footer>`;

const headerMount=document.getElementById('site-header');
const footerMount=document.getElementById('site-footer');
if(headerMount) headerMount.innerHTML=headerHTML;
if(footerMount) footerMount.innerHTML=footerHTML;

const current=(location.pathname.split('/').pop()||'index.html').replace('.html','');
document.querySelectorAll('.main-nav a[data-page]').forEach(a=>{if(a.dataset.page===current)a.classList.add('active');});

const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
