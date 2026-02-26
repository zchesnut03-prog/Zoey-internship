// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import AuthorImage from "../../images/author_thumbnail.jpg";
// // // import nftImage from "../../images/nftImage.jpg";

// // // const AuthorItems = () => {
// // //   return (
// // //     <div className="de_tab_content">
// // //       <div className="tab-1">
// // //         <div className="row">
// // //           {new Array(8).fill(0).map((_, index) => (
// // //             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
// // //               <div className="nft__item">
// // //                 <div className="author_list_pp">
// // //                   <Link to="">
// // //                     <img className="lazy" src={AuthorImage} alt="" />
// // //                     <i className="fa fa-check"></i>
// // //                   </Link>
// // //                 </div>
// // //                 <div className="nft__item_wrap">
// // //                   <div className="nft__item_extra">
// // //                     <div className="nft__item_buttons">
// // //                       <button>Buy Now</button>
// // //                       <div className="nft__item_share">
// // //                         <h4>Share</h4>
// // //                         <a href="" target="_blank" rel="noreferrer">
// // //                           <i className="fa fa-facebook fa-lg"></i>
// // //                         </a>
// // //                         <a href="" target="_blank" rel="noreferrer">
// // //                           <i className="fa fa-twitter fa-lg"></i>
// // //                         </a>
// // //                         <a href="">
// // //                           <i className="fa fa-envelope fa-lg"></i>
// // //                         </a>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <Link to="/item-details">
// // //                     <img
// // //                       src={nftImage}
// // //                       className="lazy nft__item_preview"
// // //                       alt=""
// // //                     />
// // //                   </Link>
// // //                 </div>
// // //                 <div className="nft__item_info">
// // //                   <Link to="/item-details">
// // //                     <h4>Pinky Ocean</h4>
// // //                   </Link>
// // //                   <div className="nft__item_price">2.52 ETH</div>
// // //                   <div className="nft__item_like">
// // //                     <i className="fa fa-heart"></i>
// // //                     <span>97</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AuthorItems;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { getExploreItems, getNewItems } from "../../API/nftAPI";

// // const AuthorItems = ({ authorId }) => {
// //   const [items, setItems] = useState([]);

// //   useEffect(() => {
// //     const loadItems = async () => {
// //       try {
// //         const [exploreItems, newItems] = await Promise.all([
// //           getExploreItems(),
// //           getNewItems()
// //         ]);

// //         const allItems = [...exploreItems, ...newItems];

// //         // 🔥 CRITICAL FIX — filter by authorId
// //         const filtered = allItems.filter(
// //           (item) => String(item.authorId) === String(authorId)
// //         );

// //         setItems(filtered);
// //       } catch (err) {
// //         console.error("Author items fetch error:", err);
// //       }
// //     };

// //     loadItems();
// //   }, [authorId]);

// //   if (!items.length) {
// //     return <div style={{ padding: 60 }}>No items found for this author.</div>;
// //   }

// //   return (
// //     <div className="row">
// //       {items.map((item) => (
// //         <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
// //           <div className="nft__item">
// //             <div className="nft__item_wrap">
// //               <Link to={`/item/${item.id}`}>
// //                 <img
// //                   src={item.nftImage}
// //                   className="nft__item_preview"
// //                   alt={item.title}
// //                 />
// //               </Link>
// //             </div>

// //             <div className="nft__item_info">
// //               <Link to={`/item/${item.id}`}>
// //                 <h4>{item.title}</h4>
// //               </Link>
// //               <div className="nft__item_price">
// //                 {item.price} ETH
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default AuthorItems;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getExploreItems, getNewItems } from "../../API/nftAPI";

// const AuthorItems = ({ items }) => {

//   if (!items.length) {
//     return <div style={{ padding: 60 }}>No items found.</div>;
//   }

//   return (
//     <>
//       {items.map((item) => (
//         <div
//           className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
//           key={item.nftId || item.id}
//         >
//           <div className="nft__item">

//             <div className="author_list_pp">
//               <img src={item.authorImage} alt="" />
//               <i className="fa fa-check"></i>
//             </div>

//             <div className="nft__item_wrap">
//               <img
//                 src={item.nftImage}
//                 className="nft__item_preview"
//                 alt={item.title}
//               />
//             </div>

//             <div className="nft__item_info">
//               <h4>{item.title}</h4>
//               <div className="nft__item_price">
//                 {item.price} ETH
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AuthorItems;

// // const AuthorItems = ({ authorId }) => {
// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadItems = async () => {
// //       try {
// //         const [exploreItems, newItems] = await Promise.all([
// //           getExploreItems(),
// //           getNewItems()
// //         ]);

// //         const allItems = [...exploreItems, ...newItems];

// //         const filtered = allItems.filter((item) => {
// //           return (
// //             String(item.authorId) === String(authorId) ||
// //             String(item.author) === String(authorId)
// //           );
// //         });

// //         setItems(filtered);
// //       } catch (err) {
// //         console.error("Author items error:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadItems();
// //   }, [authorId]);

// //   if (loading) {
// //     return <div style={{ padding: 60 }}>Loading author items...</div>;
// //   }

// //   if (!items.length) {
// //     return <div style={{ padding: 60 }}>No items found for this author.</div>;
// //   }

// //   return (
// //   <>
// //     {items.map((item) => (
// //       <div
// //         className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
// //         key={item.nftId || item.id}
// //       >
// //         <div className="nft__item">

// //           <div className="author_list_pp">
// //             <Link to={`/author/${item.authorId}`}>
// //               <img src={item.authorImage} alt="" />
// //               <i className="fa fa-check"></i>
// //             </Link>
// //           </div>

// //           <div className="nft__item_wrap">
// //             <Link to={`/item/${item.nftId || item.id}`}>
// //               <img
// //                 src={item.nftImage}
// //                 className="nft__item_preview"
// //                 alt={item.title}
// //               />
// //             </Link>
// //           </div>

// //           <div className="nft__item_info">
// //             <Link to={`/item/${item.nftId || item.id}`}>
// //               <h4>{item.title}</h4>
// //             </Link>

// //             <div className="nft__item_price">
// //               {item.price} ETH
// //             </div>

// //             <div className="nft__item_like">
// //               <i className="fa fa-heart"></i>
// //               <span>{item.likes}</span>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     ))}
// //   </>
// // );
// // };


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getExploreItems, getNewItems } from "../../API/nftAPI";

const AuthorItems = ({ authorId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const [explore, news] = await Promise.all([
          getExploreItems(),
          getNewItems()
        ]);

        const allItems = [...explore, ...news];

        const filtered = allItems.filter(
          (item) => String(item.authorId) === String(authorId)
        );

        setItems(filtered);
      } catch (err) {
        console.error("Author items error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, [authorId]);

  if (loading) {
    return <div style={{ padding: 60 }}>Loading items...</div>;
  }

  if (!items.length) {
    return <div style={{ padding: 60 }}>No items found.</div>;
  }

  return (
    <>
      {items.map((item) => (
        <div
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          key={item.nftId}
        >
          <div className="nft__item">

            <div className="author_list_pp">
              <Link to={`/author/${item.authorId}`}>
                <img src={item.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>

            <div className="nft__item_wrap">
              <Link to={`/item/${item.nftId}`}>
                <img
                  src={item.nftImage}
                  className="nft__item_preview"
                  alt={item.title}
                />
              </Link>
            </div>

            <div className="nft__item_info">
              <Link to={`/item/${item.nftId}`}>
                <h4>{item.title}</h4>
              </Link>
              <div className="nft__item_price">
                {item.price} ETH
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default AuthorItems;