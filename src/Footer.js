import React from 'react';
import './Footer.css'
import Logo1 from "./img/aMEzonwhite.png";


function Footer() {
    return (
<div class="navLeftFooter nav-sprite-v1" id="navFooter">
  
  <a href="#" id="navBackToTop" aria-label="Back to top">
    <div class="navFooterBackToTop">
    <span class="navFooterBackToTopText">
      Back to top
    </span>
    </div>
  </a>
  
    
  <div class="navFooterVerticalColumn navAccessibility" role="presentation">
    <div class="navFooterVerticalRow navAccessibility">
          <div class="navFooterLinkCol navAccessibility">
            <div class="navFooterColHead">Get to Know Us</div>
          <ul>
              <li class="nav_first">
                <a href="#" class="nav_a">Careers</a>
              </li>
              <li>
                <a href="#" class="nav_a">Blog</a>
              </li>
              <li>
                <a href="#" class="nav_a">About Amezon</a>
              </li>
              <li>
                <a href="#" class="nav_a">Sustainability</a>
              </li>
              <li>
                <a href="#" class="nav_a">Press Center</a>
              </li>
              <li>
                <a href="#" class="nav_a">Investor Relations</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Devices</a>
              </li>
              <li class="nav_last ">
                <a href="#" class="nav_a">Amezon Tours</a>
              </li>
          </ul>
        </div>
          <div class="navFooterColSpacerInner navAccessibility"></div>
          <div class="navFooterLinkCol navAccessibility">
            <div class="navFooterColHead">Make Money with Us</div>
          <ul>
              <li class="nav_first">
                <a href="#" class="nav_a">Sell products on Amezon</a>
              </li>
              <li>
                <a href="#" class="nav_a">Sell apps on Amezon</a>
              </li>
              <li>
                <a href="#" class="nav_a">Become an Affiliate</a>
              </li>
              <li>
                <a href="#" class="nav_a">Advertise Your Products</a>
              </li>
              <li>
                <a href="#" class="nav_a">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#" class="nav_a">Host an Amezon Hub</a>
              </li>
              <li class="nav_last nav_a_carat">
                <span class="nav_a_carat">›</span><a href="#" class="nav_a">See More Make Money with Us</a>
              </li>
          </ul>
        </div>
          <div class="navFooterColSpacerInner navAccessibility"></div>
          <div class="navFooterLinkCol navAccessibility">
            <div class="navFooterColHead">Amezon Payment Products</div>
          <ul>
              <li class="nav_first">
                <a href="#" class="nav_a">Amezon Rewards Visa Signature Cards</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon.com Store Card</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Secured Card</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Business Card</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Business Line of Credit</a>
              </li>
              <li>
                <a href="#" class="nav_a">Shop with Points</a>
              </li>
              <li>
                <a href="#" class="nav_a">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#" class="nav_a">Reload Your Balance</a>
              </li>
              <li class="nav_last ">
                <a href="#" class="nav_a">Amezon Currency Converter</a>
              </li>
          </ul>
        </div>
          <div class="navFooterColSpacerInner navAccessibility"></div>
          <div class="navFooterLinkCol navAccessibility">
            <div class="navFooterColHead">Let Us Help You</div>
          <ul>
              <li class="nav_first">
                <a href="#" class="nav_a">Amezon and COVID-19</a>
              </li>
              <li>
                <a href="#" class="nav_a">Your Account</a>
              </li>
              <li>
                <a href="#" class="nav_a">Your Orders</a>
              </li>
              <li>
                <a href="#" class="nav_a">Shipping Rates &amp; Policies</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Prime</a>
              </li>
              <li>
                <a href="#" class="nav_a">Returns &amp; Replacements</a>
              </li>
              <li>
                <a href="#" class="nav_a">Amezon Assistant</a>
              </li>
              <li class="nav_last ">
                <a href="#" class="nav_a">Help</a>
              </li>
          </ul>
        </div>
    
    </div>
  </div>
            <img 
            className='footer__logo' 
            src={Logo1}/>
            <footer>
        <span>Created By <a href="#">Jaime David</a> | <span class="far fa-copyright"></span> 2021 All rights reserved.</span>
    </footer>
  </div>
    )
}

export default Footer
