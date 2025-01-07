const Footer = () => {
  return (
    <footer className="bg-teal-950 py-10 text-gray-300">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
            <p className="text-sm">
              We are your one-stop shop for the best deals on high-quality products. 
              Customer satisfaction is our top priority.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul>
              <li className="mb-2 hover:text-white">
                <a href="/about">About</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/products">Products</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest offers and updates.</p>
            {/* <form className="flex flex-col md:flex-row md:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              />
              <button
                type="submit"
                className="mt-3 md:mt-0 md:ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © 2024 AnSaMart. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
