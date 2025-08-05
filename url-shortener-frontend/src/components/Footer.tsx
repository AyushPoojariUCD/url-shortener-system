// src/components/Footer.tsx
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#031B34] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Why Bitly?</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Integrations & API</li>
            <li>Enterprise Class</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Products</h4>
          <ul className="space-y-1 text-gray-300">
            <li>URL Shortener</li>
            <li>QR Code Generator</li>
            <li>2D Barcodes</li>
            <li>Analytics</li>
            <li>Pages</li>
          </ul>
          <h4 className="text-orange-400 font-bold mt-4 mb-2">Features</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Link-in-bio</li>
            <li>Branded Links</li>
            <li>Mobile Links</li>
            <li>UTM Campaigns</li>
            <li>Digital Business Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Solutions</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Retail</li>
            <li>Consumer Packaged Goods</li>
            <li>Hospitality</li>
            <li>Media & Entertainment</li>
            <li>Tech Software & Hardware</li>
            <li>Healthcare</li>
            <li>Insurance</li>
            <li>Financial Services</li>
            <li>Professional Services</li>
            <li>Education</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Blog</li>
            <li>Resource Library</li>
            <li>QR Code Inspiration Gallery</li>
            <li>Developers</li>
            <li>Apps and Integrations</li>
            <li>Help Center</li>
            <li>Trust Center</li>
            <li>Security Center</li>
            <li>Browser Extension</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Legal</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms of Service</li>
            <li>Acceptable Use Policy</li>
            <li>Code of Conduct</li>
            <li>Transparency Report</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li>About Bitly</li>
            <li>Careers</li>
            <li>Inclusion at Bitly</li>
            <li>Partners</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Reviews</li>
            <li>Accessibility Report</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-gray-400 text-xs">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Shortly" className="h-6" />
          <span>
            © 2025 Shortly | Made by Ayush Poojari | Fast scalable URL Shortening System.
          </span>
        </div>
        <div className="flex items-center gap-4 text-white text-base">
          <FaXTwitter />
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
