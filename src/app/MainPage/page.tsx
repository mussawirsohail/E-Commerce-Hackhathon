import Image from "next/image";
import FeaturedProducts from "../component/featured";
import ProductPage from "../component/mainsession4";
import Section5 from "../component/section5";
import ShopPage from "../component/shop2";
import Shopmain from "../component/shopmain";
import Team from "../Product/page";
import Header from "../component/header";
import Footer from "../component/footer";
 import { Import } from "lucide-react";


// export default function Home() {
//   return (
//     <>
//     <Header/>
//      <div className="pic1">
//         <div className="bg-gray-900 bg-opacity-50 text-white h-full flex flex-col justify-center">
//           <p className="ml-[140px]">Summer 2020</p>
//           <h1 className="text-5xl mb-8 font-bold ml-[140px] ">NEW COLLECTION</h1>
//           <p className="text-lg mb-8 ml-[140px]">We know how large objects will act, <br />
//           but things on a small scale.</p>
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-[221px] ml-[140px]">
//             SHOP NOW
//           </button>
//         </div>
//       </div>

//       {/* Editor's Pick Section */}
//       <section className="m-[150px]">
    
//         <div className="container mx-auto">
//           <h2 className="text-3xl text-center font-bold ">Editor's Pick</h2>
//           <p className="text-gray-600 text-center mb-[35px]">Problems trying to resolve the conflict between </p>
//           <div className="flex grid-cols-3 gap-8">
//             <div>
//               <img src="hero-men.png" alt="" />
//             </div>
//             <div>
//               <img src="hero-women.png" alt="" />
//             </div>
//             <div>
//               <img src="hero-accecories.png" alt="" />
//               <img src="hero-kids.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </section>
//       <FeaturedProducts/>
//       <ProductPage/>
//       <br /><br />
//       <Section5/>
      
      
//     </>
//   );
// }
export default function Home() {
  return (
    <>
    <Header/>
      {/* Hero Section */}
      <div className="pic1 h-screen relative w-[1044px]">
        <div className="bg-gray-900 bg-opacity-50 text-white h-full flex flex-col justify-center items-center px-4">
          <p className="text-sm md:text-base lg:text-lg">Summer 2020</p>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">NEW COLLECTION</h1>
          <p className="text-sm md:text-lg text-center mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm md:text-base">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <section className="my-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Editor's Pick</h2>
          <p className="text-gray-600 text-center text-sm md:text-base mb-6">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <img src="hero-men.png" alt="Men" className="w-full h-auto" />
            </div>
            <div>
              <img src="hero-women.png" alt="Women" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="hero-accecories.png" alt="Accessories" className="w-full h-auto" />
              <img src="hero-kids.png" alt="Kids" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <Shopmain/>
      <ProductPage/>
      <Section5/>
    </>
  );
}
