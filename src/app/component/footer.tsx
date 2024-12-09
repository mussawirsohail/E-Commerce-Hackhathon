// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer>
//         <div className="Footer-header" >
//             <h1 className="text-2xl font-bold" >Bandage</h1>
//             <div className=" flex w-[236px] m-[5px]">
//                 <img src="facebookB.png" alt="" className='h-[24px] ml-[15px] w-[24px]'/>
//                 <img src="instaB.png" alt="" className='h-[24px] w-[24px] ml-[15px]'/>
//                 <img src="twitterB.png" alt="" className='h-[24px] w-[24px] ml-[15px]'/>
//             </div>


//         </div>
//       <div className="footer-wrapper">
//         <div className="footer-section">
//           <h3>Company Info</h3>
//           <ul>
//             <li><Link href="/about">About Us</Link></li>
//             <li><Link href="/carrier">Carrier</Link></li>
//             <li><Link href="/hiring">We are hiring</Link></li>
//             <li><Link href="/blog">Blog</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Legal</h3>
//           <ul>
//             <li><Link href="/about-us">About Us</Link></li>
//             <li><Link href="/carrier">Carrier</Link></li>
//             <li><Link href="/we-are-hiring">We are hiring</Link></li>
//             <li><Link href="/blog">Blog</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Feature</h3>
//           <ul>
//             <li><Link href="/about-us">Business Marketing</Link></li>
//             <li><Link href="/carrier">User Analytic</Link></li>
//             <li><Link href="/we-are-hiring">Live Chat</Link></li>
//             <li><Link href="/blog">Unlimited Support</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Rosources</h3>
//           <ul>
//             <li><Link href="/about-us">IOS & Android</Link></li>
//             <li><Link href="/carrier">Watch a demo</Link></li>
//             <li><Link href="/we-are-hiring">Customers</Link></li>
//             <li><Link href="/blog">API</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Get In Touch</h3>
//           <form>
//             <input type="email" placeholder="Your Email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>
      
//         <p className='ml-[65px]'>Made With Love By Finland All Right Reserved</p>
      
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Bandage</h1>
        <div className="flex space-x-4">
          <img
            src="facebookB.png"
            alt="Facebook"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="instaB.png"
            alt="Instagram"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="twitterB.png"
            alt="Twitter"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/carrier">Carrier</Link>
            </li>
            <li>
              <Link href="/hiring">We are hiring</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refunds">Refund Policy</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/business">Business Marketing</Link>
            </li>
            <li>
              <Link href="/analytics">User Analytics</Link>
            </li>
            <li>
              <Link href="/chat">Live Chat</Link>
            </li>
            <li>
              <Link href="/support">Unlimited Support</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/apps">iOS & Android</Link>
            </li>
            <li>
              <Link href="/demo">Watch a Demo</Link>
            </li>
            <li>
              <Link href="/customers">Customers</Link>
            </li>
            <li>
              <Link href="/api">API</Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Made With Love By Finland. All Rights Reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
