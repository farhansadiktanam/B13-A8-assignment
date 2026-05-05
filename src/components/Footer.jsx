import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Ishurdi, Bangladesh</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" target="_blank" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-gray-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/terms">
                <span className="hover:text-gray-400 cursor-pointer">
                  Terms & Conditions
                </span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span className="hover:text-gray-400 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-sm text-gray-400">
            We provide high-quality services and products. Stay connected with
            us.
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
