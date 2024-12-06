import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight, faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Exclusive Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Exclusive</h2>
          <p>Subscribe</p>
          <p className="mb-3">Get 10% off your first order</p>
          <form className="flex items-center border py-1 px-2 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white w-full focus:outline-none"
              aria-label="Enter your email"
            />
            <button type="submit" className="ml-2">
              <FontAwesomeIcon icon={faArrowCircleRight} className="text-xl" />
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Support</h2>
          <address>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>
              <a href="mailto:exclusive@gmail.com" className="hover:underline">
                exclusive@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+8801588889999" className="hover:underline">
                +88015-88888-9999
              </a>
            </p>
          </address>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Account</h2>
          <ul className="space-y-2">
            <li><Link href="/account">My Account</Link></li>
            <li><Link href="/login">Login / Register</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
            <li><Link href="/shop">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms Of Use</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Download App Section with QR Code */}
        <div>
          <h2 className="font-bold text-xl mb-4">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex flex-col lg:flex-row gap-4 my-3 items-center justify-start lg:justify-start">
            {/* App Store Buttons and QR Code in a single row for large screens */}
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src={"/footer/playstore.png"}
                  alt="Google Play Store"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Image
                  src={"/footer/appstore.png"}
                  alt="Apple App Store"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-4 lg:mt-0">
              <Image
                src="/footer/Qrcode.png"
                alt="QR Code for App Download"
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl cursor-pointer" />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 border-t border-neutral-700">
        <p className="text-sm">
          <FontAwesomeIcon icon={faCopyright} className="mr-2" />
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
