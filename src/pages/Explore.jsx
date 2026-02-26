// // import React, { useEffect } from "react";
// // import SubHeader from "../images/subheader.jpg";
// // import ExploreItems from "../components/explore/ExploreItems";

// // const Explore = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div id="wrapper">
// //       <div className="no-bottom no-top" id="content">
// //         <div id="top"></div>

// //         <section
// //           id="subheader"
// //           className="text-light"
// //           style={{ background: `url("${SubHeader}") top` }}
// //         >
// //           <div className="center-y relative text-center">
// //             <div className="container">
// //               <div className="row">
// //                 <div className="col-md-12 text-center">
// //                   <h1>Explore</h1>
// //                 </div>
// //                 <div className="clearfix"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <section aria-label="section">
// //           <div className="container">
// //             <div className="row">
// //               <ExploreItems />
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Explore;


// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // const ExploreItems = () => {
// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [sortType, setSortType] = useState("default");
// //   const [timeLeft, setTimeLeft] = useState({});

// //   // Fetch API
// //   useEffect(() => {
// //     fetch("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setItems(data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching explore items:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   // Countdown Timer
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const updatedTimes = {};
// //       items.forEach((item) => {
// //         const difference = item.expiryDate - Date.now();

// //         if (difference > 0) {
// //           const hours = Math.floor(difference / (1000 * 60 * 60));
// //           const minutes = Math.floor(
// //             (difference % (1000 * 60 * 60)) / (1000 * 60)
// //           );
// //           const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// //           updatedTimes[item.id] = `${hours}h ${minutes}m ${seconds}s`;
// //         } else {
// //           updatedTimes[item.id] = "Expired";
// //         }
// //       });

// //       setTimeLeft(updatedTimes);
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, [items]);

// //   // Sorting
// //   const sortedItems = [...items].sort((a, b) => {
// //     if (sortType === "price-low") return a.price - b.price;
// //     if (sortType === "price-high") return b.price - a.price;
// //     if (sortType === "likes") return b.likes - a.likes;
// //     return 0;
// //   });

// //   return (
// //     <>
// //       {/* Sort Dropdown */}
// //       <div className="col-md-12 mb-4 text-end">
// //         <select
// //           className="form-select w-auto d-inline"
// //           value={sortType}
// //           onChange={(e) => setSortType(e.target.value)}
// //         >
// //           <option value="default">Default</option>
// //           <option value="price-low">Price: Low to High</option>
// //           <option value="price-high">Price: High to Low</option>
// //           <option value="likes">Most Liked</option>
// //         </select>
// //       </div>

// //       {loading
// //         ? new Array(8).fill(0).map((_, index) => (
// //             <div className="col-lg-3 col-md-6 mb-4" key={index}>
// //               <div className="nft__item skeleton-box"></div>
// //             </div>
// //           ))
// //         : sortedItems.map((item) => (
// //             <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
// //               <div className="nft__item">
// //                 <div className="author_list_pp">
// //                   <Link to={`/author/${item.authorId}`}>
// //                     <img
// //                       className="lazy"
// //                       src={item.authorImage}
// //                       alt=""
// //                     />
// //                   </Link>
// //                 </div>

// //                 <div className="nft__item_wrap">
// //                   <Link to={`/item/${item.nftId}`}>
// //                     <img
// //                       src={item.nftImage}
// //                       className="lazy nft__item_preview"
// //                       alt=""
// //                     />
// //                   </Link>
// //                 </div>

// //                 <div className="nft__item_info">
// //                   <Link to={`/item/${item.nftId}`}>
// //                     <h4>{item.title}</h4>
// //                   </Link>

// //                   <div className="nft__item_price">
// //                     {item.price} ETH
// //                   </div>

// //                   <div className="nft__item_action">
// //                     <span>{timeLeft[item.id]}</span>
// //                   </div>

// //                   <div className="nft__item_like">
// //                     <i className="fa fa-heart"></i>
// //                     <span>{item.likes}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //     </>
// //   );
// // };

// // export default ExploreItems;

// import React, { useEffect } from "react";
// import SubHeader from "../images/subheader.jpg";
// import ExploreHeader from "../components/explore/HeaderExplore";
// import ExploreItems from "../components/explore/ExploreItems";

// const Explore = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="subheader"
//           className="text-light"
//           style={{ background: `url(${SubHeader}) top` }}
//         >
//           <div className="center-y relative text-center">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-12 text-center">
//                   <h1>Explore</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section aria-label="section">
//           <div className="container">
//             <div className="row">

//               <ExploreHeader setSortType={setSortType} />

//               <ExploreItems />

//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Explore;

import React, { useEffect, useState } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreHeader from "../components/explore/HeaderExplore";
import ExploreItems from "../components/explore/ExploreItems";

const Explore = () => {
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url(${SubHeader}) top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <h1>Explore</h1>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">

              <ExploreHeader setSortType={setSortType} />
              <ExploreItems sortType={sortType} />

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Explore;