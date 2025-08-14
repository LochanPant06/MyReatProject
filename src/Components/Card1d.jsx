import React from "react";
function Card1d({ values, handleClick, key, Index }) {


  const { image, Artist, songName, added } = values;

// Haame jo bhi cheez values se kamm mai lene hai unko phele he nikal liya hai abb hame value.something likhke nahi likhna padega kise cheez ke value ke liye

  return (
    <div className="w-[315px] bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative ">
      <div className="w-25 h-20 bg-orange-600 rounded-md ">
        <img className="w-full h-full object-fit" src={image} alt="" />
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">{songName}</h2>
        <h3 className="text-sm">{Artist}</h3>
      </div>

{/* Main task yaha per hai hame child se parent kko data bhejna hai so we have pass a function from parent to the child which will return the index where the change is happned    onClick={()=>handleClick(Index)} */}


      <button onClick={()=>handleClick(Index)} className={`px-4 py-3 whitespace-nowrap ${added === false? "bg-orange-600" : "bg-teal-700"} absolute bottom-[-40px] left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full text-white text-xs`}>
        {added === false? "Add to favourite" : "Added"}
      </button>
    </div>
  );
}
export default Card1d;

