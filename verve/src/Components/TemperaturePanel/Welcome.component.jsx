import React from 'react'

export default function Welcome() {
  return (
    <div className="bg-welcomeYellow rounded-3xl pt-4 pl-4 pr-0 flex justify-between mb-10">
      <div className="pb-4">
        <h1 className="font-poppins text-titleText text-2xl font-bold tracking-wide pb-2">
          {" "}
          Hello, Scarlett!
        </h1>
        <p className="font-mulish text-xs pb-2 text-miniMessage w-[200px] xl:w-[300px]">
          Welcome Home! The air quality is good and fresh, you can go out today.
        </p>
        <div className="flex items-center font-mulish pb-2">
          <img
            src="./assets/verve-images/thermometer.png"
            alt="temperature"
            className="w-3"
          />
          <p className="text-md pl-2">
            +25<span className="text-xs">&#8451;</span>
            <span className="text-xs tracking-wide"> Outdoor temperature</span>
          </p>
        </div>
        <div className="flex items-center font-mulish">
          <img
            src="/assets/verve-images/cloud.png"
            alt="clouds"
            className="w-4"
          />
          <p className="pl-2 text-xs tracking-wide">Fuzzy, cloudy weather</p>
        </div>
      </div>
      
        <img
          src="/assets/verve-images/hello-scarlett.png"
          alt=""
          className=" w-56 h-auto -ml-24 xl:w-56 xl:h-auto rounded-r-3xl xl:ml-0 2xl:w-56 2xl:-ml-4"
        />
      
    
    </div>
  );
}
