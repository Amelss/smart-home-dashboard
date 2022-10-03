import React from 'react'

export default function PowerGraph() {
  return (
    <div className="">
      <div className="flex justify-between p-5">
        <h1 className="">Power Consumed</h1>
        <div className="flex items-center">
          <select
            name="month"
            id="month"
            className="border-none rounded-lg h-7 w-24 text-xs pr-0 pt-0 pb-0 bg-search"
          >
            <option value="month"hidden >Month</option>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
          <img
            src="/assets/verve-images/arrow.png"
            alt="arrow"
            className="ml-5 bg-search  rounded-lg pb-2 pt-2 pl-[10px] pr-[10px]"
          />
        </div>
      </div>
      <img src="/assets/verve-images/graph.png" alt="power graph" className=' p-5 mx-auto'/>
    </div>
  );
}
