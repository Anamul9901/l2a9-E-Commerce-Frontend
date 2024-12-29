const AboutPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        About Us
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to our E-Commerce Application – a modern and comprehensive platform designed to redefine online shopping.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600">
          To empower businesses and customers by providing a feature-rich, intuitive, and efficient platform for buying and selling online.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>User-Centric Design: An easy-to-navigate interface tailored for an optimal user experience.</li>
          <li>Advanced Vendor Tools: Vendors can manage shops, products, and inventories effortlessly.</li>
          <li>Admin Controls: Full administrative capabilities for platform monitoring and moderation.</li>
          <li>Enhanced Shopping Experience: Comprehensive filtering, comparison, and review systems for customers.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Technologies We Use
        </h2>
        <p className="text-gray-600">
          Our application is built using modern web technologies to ensure performance, scalability, and security:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-3">
          <li>Backend: Node.js and Express.js for efficient API handling and robust server-side operations.</li>
          <li>Frontend: React.js (or Next.js) for responsive and dynamic user interfaces.</li>
          <li>Database: PostgreSQL for secure and structured data storage.</li>
          <li>Third-Party Integrations: Stripe/Aamarpay for payment processing and cloud storage for managing images.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Why Choose Us?
        </h2>
        <p className="text-gray-600">
          - Seamless Shopping: From browsing to checkout, enjoy a streamlined shopping experience.
        </p>
        <p className="text-gray-600">
          - Vendor Empowerment: Easy-to-use tools for vendors to manage their stores effectively.
        </p>
        <p className="text-gray-600">
          - Secure Transactions: End-to-end encryption and trusted payment gateways for worry-free shopping.
        </p>
      </section>
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          If you have questions, feedback, or suggestions, feel free to reach out to us. Together, let’s build a better shopping ecosystem!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
