// import Link from "next/link"
// export default function Header2(){
//     return(
//         <>
//         <div className="flex w-[100%] h-[58px] bg-[#23856D] border-black text-white space-x-40">
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
//                 <Link href={"MainPage"}><p className="text">Home</p></Link>
//                 <Link href={"/Shop"}> <p className="text">Shop</p> </Link>
//                 <Link href={"/ContactUs"}><p className="text">About</p></Link>
//                 <Link href={"/Blogs"}><p className="text">Blog</p></Link>
//                 <Link href={"/"}><p className="text">Contact</p></Link>
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

export default function Header2() {
  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between w-full h-[58px] bg-[#23856D] border-black text-white px-4 py-2">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-7 mb-2 sm:mb-0">
          <div className="flex items-center mb-2 sm:mb-0">
            <img src="call.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <img src="email.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Promotion Text */}
        <div className="hidden sm:block h-[44px] w-[343px] mt-[15px]">
          <p className="TopHeaderText">Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 sm:space-x-4 items-center mb-2 sm:mb-0">
          <p>Follow us: </p>
          <img src="instagram.png" alt="" className="h-[26px] w-[26px]" />
          <img src="youtube.png" alt="" className="h-[26px] w-[26px]" />
          <img src="facebook.png" alt="" className="h-[26px] w-[26px]" />
          <img src="twitter.png" alt="" className="h-[26px] w-[26px]" />
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 bg-white">
        {/* Logo */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Bandage</h1>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 sm:space-x-8 mt-4 sm:mt-0">
          <Link href={"MainPage"}>
            <p className="text-lg cursor-pointer">Home</p>
          </Link>
          <Link href={"/Shop"}>
            <p className="text-lg cursor-pointer">Shop</p>
          </Link>
          <Link href={"/ContactUs"}>
            <p className="text-lg cursor-pointer">About</p>
          </Link>
          <Link href={"/Blogs"}>
            <p className="text-lg cursor-pointer">Blog</p>
          </Link>
          <Link href={"/"}>
            <p className="text-lg cursor-pointer">Contact</p>
          </Link>
          <Link href={""}>
            <p className="text-lg cursor-pointer">Pages</p>
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <div className="flex items-center">
            <img src="vector.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
            <p className="ml-2 text-sm">Login / Register</p>
          </div>
          <img src="search.png" alt="search" className="h-[46px] w-[56px] cursor-pointer" />
          <img src="heart.png" alt="heart" className="h-[46px] w-[56px] cursor-pointer" />
          <img src="cart.png" alt="cart" className="h-[46px] w-[56px] cursor-pointer" />
        </div>
      </div>
    </>
  );
}
