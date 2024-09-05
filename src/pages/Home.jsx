import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=600')] min-h-[calc(100vh-64px)] bg-no-repeat bg-cover flex flex-col justify-center pl-32 space-y-3">
        <p className="text-pink-500">SPA & WELNESS SALOON</p>
        <h1 className="text-3xl font-bold">
          Make your skin
          <br /> shine and glowing
        </h1>
        <p className="max-w-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          illo debitis pariatur voluptatum modi veniam fuga ipsa fugit
          distinctio? Inventore esse dolore ab quaerat reprehenderit. Ipsa hic
          quas vitae! Iste!
        </p>
        <div className="space-x-3">
          <button className="bg-violet-600 px-8 py-3 rounded-md text-white text-xs">
            DISCOVER MORE
          </button>
          <button className="bg-pink-500 px-8 py-3 rounded-md text-white text-xs">
            BOOK NOW
          </button>
        </div>
      </div>
      <AboutUs />
      <div className="flex h-60">
        <div className="bg-[url('https://images.pexels.com/photos/3852148/pexels-photo-3852148.jpeg?auto=compress&cs=tinysrgb&w=600')] h-full w-2/6 justify-center pl-10 flex-col flex">
          <h1 className="text-pink-500">OFFER FOR WOMEN</h1>
          <h2 className="mt-6">Best Care For Women Skin & Body</h2>
          <div className="">
            <button className="bg-pink-500 px-6 py-1.5 rounded-md text-white text-xs mt-3">
              START NOW
            </button>
          </div>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/27544683/pexels-photo-27544683/free-photo-of-a-tube-of-cosmetic-cream-on-a-pink-background.jpeg?auto=compress&cs=tinysrgb&w=600')] h-full w-2/6 justify-center pl-10 flex-col flex">
          <h1 className="text-pink-500">OFFER FOR MEN</h1>
          <h2 className="mt-6">Get The Best Glow With Our Man Products</h2>
          <div className="">
            <button className="bg-pink-500 px-6 py-1.5 rounded-md text-white text-xs mt-3">
              START NOW
            </button>
          </div>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/5069404/pexels-photo-5069404.jpeg?auto=compress&cs=tinysrgb&w=600')] h-full w-2/6 justify-center pl-10 flex-col flex">
          <h1 className="text-pink-500">OFFER FOR COUPLES</h1>
          <h2 className="mt-6">Get The Best Care For Couples</h2>
          <div className="">
            <button className="bg-pink-500 px-6 py-1.5 rounded-md text-white text-xs mt-3">
              START NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20">
       <div className="flex gap-5">
       <h2 className="font-bold text-4xl">WHAT WE PROVIDE</h2> 
       <img src="https://www.svgheart.com/wp-content/uploads/2021/11/black-woman-face-melanin-free-svg-file-SvgHeart.Com.png" alt="" className="w-10"/>
       </div>
       <div className="">
        <div className=""> 
          <div className="flex space-x-3">
            <div className="">
            <img src="data:image/jpeg;base64,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" alt="" className="w-20"/>
            </div>
            <div className="">
              <h3 className="font-bold">Facials</h3>
              < p className="max-w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequatur.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="">
            <img src="data:image/png;base64,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" alt="" className="w-20"/>
            </div>
            <div className="">
              <h3 className="font-bold">Mineral Baths</h3>
              < p className="max-w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequatur.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="">
            <img src="data:image/jpeg;base64,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" alt="" className="w-20"/>
            </div>
            <div className="">
              <h3 className="font-bold">Massage</h3>
              < p className="max-w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequatur.</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="https://www.shutterstock.com/image-photo/asian-woman-sleep-relax-thai-spa-2190977083" alt="" />
        </div>
        <div className=""></div>
       </div>

      </div>
    </>
  );
}

export default Home;
