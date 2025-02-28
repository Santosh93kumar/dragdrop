import React, { useState } from "react";

const DropDown = () => {
  const [showList, setShowList] = useState({ show: false, symbol: "+" });
  const [showCategory, setShowCategory] = useState(false);
  

  const categories = [
    "https://cdn.prod.website-files.com/605826c62e8de87de744596e/66b598c6914b366fdfe073bb_63f46234eba504b8a2464cf7_Whey%2520ProteinBuiltathletics.jpeg",
    "https://www.algolia.com/doc/assets/images/guides/solutions/solutions-category-pages-facet-example-3fb9c5b5.jpg",
    "https://media.nngroup.com/media/editor/2022/01/05/bonobospants.jpg",
    "https://media.nngroup.com/media/editor/2022/01/24/lululemonmirror.jpg",
    "https://cdn.prod.website-files.com/605826c62e8de87de744596e/66b598c6914b366fdfe073bb_63f46234eba504b8a2464cf7_Whey%2520ProteinBuiltathletics.jpeg",
    "https://www.algolia.com/doc/assets/images/guides/solutions/solutions-category-pages-facet-example-3fb9c5b5.jpg",
    "https://media.nngroup.com/media/editor/2022/01/05/bonobospants.jpg",
    "https://media.nngroup.com/media/editor/2022/01/24/lululemonmirror.jpg"

  ];


  return (
    <div className="flex flex-col gap-2 absolute top-2 right-2 items-end">
      {/* Toggle Button */}
      <button
        onClick={() =>
          setShowList((prev) => ({
            show: !prev.show,
            symbol: prev.show ? "+" : "×",
          }))
        }
        className="rounded cursor-pointer bg-white w-10 h-10 flex items-center justify-center text-2xl shadow-md md:w-8 md:h-8"
      >
        {showList.symbol}
      </button>

      {/* Dropdown Menu */}
      {showList.show && (
        <div className="text-start font-medium bg-white p-2 shadow-lg rounded-md w-full max-w-sm md:w-64">
          <h2 className="text-lg font-semibold">Blocks</h2>
          <hr className="my-2" />

          <ul className="space-y-2">
            <li>
              <button className="cursor-pointer w-full text-left">Landing Page</button>
            </li>
            <li>
              <button className="cursor-pointer w-full text-left">Navbar</button>
            </li>
            <li>
              <button
                onClick={() => setShowCategory(!showCategory)}
                className="cursor-pointer w-full text-left"
              >
                Category
              </button>

              {/* Category Images */}
              {showCategory && (
                <div className="grid grid-cols-2 gap-3 p-2 bg-gray-300 rounded-md w-auto max-h-40 overflow-y-auto">
                  {categories.map((page, index) => (
                    <img
                      src={page}
                      alt="category"
                      key={index}
                     
                      className="w-[15vh] h-[10vh] cursor-pointer shadow-md shadow-black rounded"
                    />
                  ))}
                </div>
              )}
            </li>
            <li>
              <button className="cursor-pointer w-full text-left">Footer</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
