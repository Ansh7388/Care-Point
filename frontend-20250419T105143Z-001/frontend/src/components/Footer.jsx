import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CarePoint is a user-friendly online platform designed to simplify
            the process of booking doctor appointments. Whether you need a
            general physician, specialist consultation, or follow-up care,
            CarePoint connects you with certified doctors (MBBS, MD) who have
            the expertise and experience you can trust. With just a few clicks,
            patients can view doctor profiles, check availability, and schedule
            appointments at their convenience. Our mission is to make healthcare
            accessible, transparent, and hassle-free—anytime, anywhere.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-7388123411</li>
            <li>anshgupta7388@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Prescripto.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
