import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=600')] min-h-[calc(100vh-64px)] bg-no-repeat bg-cover flex flex-col justify-center pl-32 space-y-3">
      <p className="text-pink-500">SPA & WELNESS SALOON</p>
      <h1 className="text-3xl font-bold">
        Make your skin
        <br /> shine and glowing
      </h1>
      <p className="max-w-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        illo debitis pariatur voluptatum modi veniam fuga ipsa fugit distinctio?
        Inventore esse dolore ab quaerat reprehenderit. Ipsa hic quas vitae!
        Iste!
      </p>
      <div className="space-x-3">
        <button className="bg-violet-600 px-8 py-3 rounded-md text-white text-xs">
          DISCOVE MORE
        </button>
        <button className="bg-pink-500 px-8 py-3 rounded-md text-white text-xs">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
