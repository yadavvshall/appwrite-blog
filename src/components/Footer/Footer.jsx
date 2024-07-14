import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-800 text-white border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2023. All Rights Reserved by V.
                </p>
              </div>
              <div className="flex mt-4 space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-300 hover:text-white"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Newsletter
              </h3>
              <form>
                <div className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
