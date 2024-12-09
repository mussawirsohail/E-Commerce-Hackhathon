// import Link from "next/link"
// export default function Header(){
//     return(
//         <>
//         <div className="flex w-[100%] h-[58px] border-black bg-[#252B42]  text-white space-x-40">
//             <div className="flex w-[421px] h-[46px] mt-[15px] space-x-7">
//                 <div className="flex">
//             <img src="call.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
//                 <p>(225) 555-0118</p>
//                 </div>
//                 <div className="flex">
//                 <img src="email.png" alt="" className="h-[16px] w-[16px] m-[5px]"/>
//                 <p>michelle.rivera@example.com</p>
//                 </div>
//             </div>
//             <div className="h-[44px] w-[343px] mt-[15px]">
//             <p className="TopHeaderText">Follow Us and get a chance to win 80% off  </p>
//             </div>
//             <div className="flex h-[46px] w-[233px] mt-[15px] ml-[150px]">
//             <p className="">Follow us: </p>
//             <img src="instagram.png" alt="" className="h-[26px] w-[26px]"/>
//             <img src="youtube.png" alt="" className="h-[26px] w-[26px]"/>
//             <img src="facebook.png" alt="" className="h-[26px] w-[26px]"/>
//             <img src="twitter.png" alt="" className="h-[26px] w-[26px]"/>
//             </div>
//         </div>
//         <div className="Header">
//             <div>
//                  <h1 className="text-2xl font-bold">Bandage</h1>
//             </div>
//             <div className="HeaderFunc">
//                 <Link href={"/MainPage"}><p className="text">Home</p></Link>
//                 <Link href={"/Shop"}> <p className="text">Shop</p> </Link>
//                 <Link href={""}><p className="text">About</p></Link>
//                 <Link href={"/"}><p className="text">Blog</p></Link>
//                 <Link href={"/ContactUs"}><p className="text">Contact</p></Link>
//                 <Link href={""}><p className="text">Pages</p></Link>
//             </div>
//             <div className="searching">
//                 <div className=" flex mt-[10px]">
//                 <img src="vector.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
//                 <p className="ml-5px"> Login / Register </p>
//                 </div> 
//                 <img src="search.png" alt="" className="h-[46px] w-[56px]"/>
//                 <img src="heart.png" alt="heart" className="h-[46px] w-[56px]"/>
                
//                 <img src="cart.png" alt="cart" className="h-[46px] w-[56px]"/>
//             </div>
//         </div>    
//         </>
//     )
// }
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[58px] bg-[#252B42] text-white px-4 py-2 md:space-x-40">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:w-[421px] space-y-2 md:space-y-0 md:space-x-7">
          <div className="flex items-center space-x-2">
            <img src="call.png" alt="Call" className="h-[16px] w-[16px]" />
            <p className="text-sm">(225) 555-0118</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="email.png" alt="Email" className="h-[16px] w-[16px]" />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Promotion Text */}
        <div className="text-center text-sm md:text-base md:w-[343px]">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <p className="text-sm">Follow us:</p>
          <img src="instagram.png" alt="Instagram" className="h-[26px] w-[26px]" />
          <img src="youtube.png" alt="YouTube" className="h-[26px] w-[26px]" />
          <img src="facebook.png" alt="Facebook" className="h-[26px] w-[26px]" />
          <img src="twitter.png" alt="Twitter" className="h-[26px] w-[26px]" />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 border-b">
        {/* Brand Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">Bandage</div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-10">
          <Link href="/MainPage">
            <p className="cursor-pointer hover:text-gray-400">Home</p>
          </Link>
          <Link href="/Shop">
            <p className="cursor-pointer hover:text-gray-400">Shop</p>
          </Link>
          <Link href="#">
            <p className="cursor-pointer hover:text-gray-400">About</p>
          </Link>
          <Link href="/Blogs">
            <p className="cursor-pointer hover:text-gray-400">Blog</p>
          </Link>
          <Link href="/ContactUs">
            <p className="cursor-pointer hover:text-gray-400">Contact</p>
          </Link>
          <Link href="#">
            <p className="cursor-pointer hover:text-gray-400">Pages</p>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <img src="vector.png" alt="Login" className="h-[16px] w-[16px]" />
            <p className="text-sm cursor-pointer">Login / Register</p>
          </div>
          <img src="search.png" alt="Search" className="h-[36px] w-[36px] cursor-pointer" />
          <img src="heart.png" alt="Heart" className="h-[36px] w-[36px] cursor-pointer" />
          <img src="cart.png" alt="Cart" className="h-[36px] w-[36px] cursor-pointer" />
        </div>
      </div>
    </>
  );
}
