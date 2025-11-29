import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="ShopEase logo" />
          <p>Curating everyday essentials with a touch of luxury.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <a href="/new">New Arrivals</a>
            <a href="/best-sellers">Best Sellers</a>
            <a href="/sale">Sale</a>
            <a href="/gifting">Gifting</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
            <a href="/faqs">FAQs</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div>
            <h4>Visit</h4>
            <p>93 Sapphire Avenue</p>
            <p>Gulberg, Lahore</p>
            <p>(042) 3587-2211</p>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay in the loop</h4>
          <p>Exclusive drops, styling tips, and early offers.</p>
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com" aria-label="Instagram">
            IG
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest">
            PIN
          </a>
          <a href="https://tiktok.com" aria-label="TikTok">
            TT
          </a>
        </div>
        <p className="copyright">© {year} Mercer. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer