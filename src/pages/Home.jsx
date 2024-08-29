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
    </>
  );
}

export default Home;
