
import React, { useState } from "react";
import Card1d from "./Components/Card1d";
import Navbar from "./Components/Navbar";
function App() {
  const data = [
    {
      image: "https://img.youtube.com/vi/DULDIS2qlCU/sddefault.jpg",
      songName: "Tumhi Dekho Naa",
      Artist: "Sonu Nigam, Alka Yagnik",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/zZasH6qkn8M/sddefault.jpg",
      songName: "Teri Deewani",
      Artist: "Kailash Kher",
      added: false,
    },
    {
      image: "https://i.ytimg.com/vi/lFdSi01tpYM/maxresdefault.jpg",
      songName: "Sochenge Tumhe Pyar",
      Artist: "Kumar Sanu, Nadeem-Shravan",
      added: false,
    },
    {
      image: "https://i.ytimg.com/vi/boRd0WoCemI/maxresdefault.jpg",
      songName: "Maula Mere Maula",
      Artist: "Roopkumar Rathod, Mithoon",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);

// Phele data ko use state mai save kara liya hai aab jo bhi 
// data use karna hai wo yahi se karna hai 


// VERY IMPORTANT
// Bhaii ye previous bhout kam ke cheez hai ye hame previous
//  updated value dete hai 

// setSongData((data))
//   agar yaha per hum data he pass kar de 
// to usmai bhout badi problem hai q kw wo next previous updated 
// value nahi deta hai 



  const handleClick = (Index) => {
    setSongData((prev) => {
      return prev.map((mapval, mapindex) => {
        if (mapindex === Index) {
          return { ...mapval, added: !mapval.added };
        }
        return mapval;
      });
    });
  };


  return (
    <div className="w-full h-screen bg-zinc-300  ">
      <Navbar data = {songData} />

{/* Yeha per hamne propes use kara hai data parent App se Navbar mai
 bhejne ke liye abb yaha per hamne songData ko data ke form mai bheja hai to use navbaar mai data ke form mai except karege */}

      <div className="px-20 flex gap-8 mt-10 flex-wrap">
        {songData.map((value, index) => (
          <Card1d
            key={index}
            values={value}
            handleClick={handleClick}
            Index={index}
          />

// Harr card ke liye uska data bhej rahe hai 

        ))}
      </div>
    </div>
  );
}
export default App;
