// import Link from "next/link"
// export default function Header3(){
//     return(
//         <div className="Header">
//             <div>
//                  <h1 className="text-2xl font-bold">Bandage</h1>
//             </div>
//             <div className="HeaderFunc">
//                 <Link href={"MainPage"}><p className="text">Home</p></Link>
//                 <Link href={"/Product"}><p className="text">Product</p></Link>
//                 <Link href={"/pricing"}><p className="text">Pricing</p></Link>
//                 <Link href={"/ContactUs"}><p className="text">Contact</p></Link>
                
//             </div>
//             <div className="flex">
//                 <button className="w-[100px] h-[52px] bg-white text-blue-500">Login</button>
//                 <Link href={"/getintouch"}><button className="w-[214px] h-[52px] rounded-md bg-blue-500 text-white p-2">Become a member</button></Link>
//             </div>
//         </div> 
//     )
// }
import Link from "next/link";

export default function Header3() {
  return (
    <div className="Header px-4 py-6 sm:px-6 md:px-12">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Bandage</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-0 w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
          <Link href={"MainPage"}>
            <p className="text-lg cursor-pointer">Home</p>
          </Link>
          <Link href={"/Product"}>
            <p className="text-lg cursor-pointer">Product</p>
          </Link>
          <Link href={"/pricing"}>
            <p className="text-lg cursor-pointer">Pricing</p>
          </Link>
          <Link href={"/ContactUs"}>
            <p className="text-lg cursor-pointer">Contact</p>
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full sm:w-auto">
          <button className="w-full sm:w-[100px] h-[52px]  bg-white text-blue-500 mb-4 sm:mb-0">Login</button>
          <Link href={"/getintouch"}>
            <button className="w-full sm:w-[214px] h-[52px] rounded-md bg-blue-500 text-white p-2">
              Become a member
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
