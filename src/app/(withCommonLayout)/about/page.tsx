import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="text-default-800 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-default-900">
            About Us
          </h1>
          <p className="text-lg text-default-600">
            Your one-stop destination for a seamless online shopping experience.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-default-900">
                Our Mission
              </h2>
              <p className="text-default-600 text-lg">
                Our mission is to bridge the gap between businesses and
                customers by providing a robust and user-friendly e-commerce
                platform.
              </p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-default-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-default-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-default-800">
                User-Centric Design
              </h3>
              <p className="text-default-600">
                Enjoy an intuitive and seamless shopping experience.
              </p>
            </div>
            <div className="bg-default-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-default-800">
                Advanced Vendor Tools
              </h3>
              <p className="text-default-600">
                Easily manage shops, products, and inventories.
              </p>
            </div>
            <div className="bg-default-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-default-800">
                Secure Transactions
              </h3>
              <p className="text-default-600">
                Trusted payment gateways for worry-free shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="bg-default-100 p-8 rounded-lg shadow">
            <h2 className="text-3xl font-semibold mb-4 text-default-900">
              Technologies We Use
            </h2>
            <ul className="list-disc list-inside text-default-600 text-lg space-y-2">
              <li>
                Backend: Node.js and Express.js for server-side efficiency.
              </li>
              <li>
                Frontend: React.js (or Next.js) for dynamic user interfaces.
              </li>
              <li>
                Database: PostgreSQL for secure and structured data management.
              </li>
              <li>
                Payments: Integrated with Aamarpay/Stripe for secure checkout.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-default-600">
            Have any questions or feedback? Feel free to get in touch and let’s
            build the future of online shopping together!
          </p>
          <div className="pt-6">
            <Link
              href={"/contact"}
              className="mt-10 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
