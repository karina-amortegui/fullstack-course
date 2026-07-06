
export const TopBanner = () => {
  return (
    <header className="top-banner">
      <div className="social-icons">
        <a href="#">
          <img src="/instagram.svg" alt="Instagram" />
        </a>

        <a href="#">
          <img src="/youtube.svg" alt="YouTube" />
        </a>
      </div>

      <p className="announcement">
        FREE SHIPPING ON ORDERS OVER $100 - EXCLUDES BEVIT, B2B, 
        EVERACTIVE PRODUCTS, AND INTERNATIONAL ORDERS
      </p>
      
      <nav className="top-links">
        <a href="#">FAQs</a>
        <a href="#">International</a>
        <a href="#">Our Story</a>
      </nav>
    </header>
  );
};