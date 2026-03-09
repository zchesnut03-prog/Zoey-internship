// // import React, { useEffect } from "react";
// // import EthImage from "../images/ethereum.svg";
// // import { Link } from "react-router-dom";
// // import AuthorImage from "../images/author_thumbnail.jpg";
// // import nftImage from "../images/nftImage.jpg";

// // const ItemDetails = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div id="wrapper">
// //       <div className="no-bottom no-top" id="content">
// //         <div id="top"></div>
// //         <section aria-label="section" className="mt90 sm-mt-0">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-6 text-center">
// //                 <img
// //                   src={nftImage}
// //                   className="img-fluid img-rounded mb-sm-30 nft-image"
// //                   alt=""
// //                 />
// //               </div>
// //               <div className="col-md-6">
// //                 <div className="item_info">
// //                   <h2>Rainbow Style #194</h2>

// //                   <div className="item_info_counts">
// //                     <div className="item_info_views">
// //                       <i className="fa fa-eye"></i>
// //                       100
// //                     </div>
// //                     <div className="item_info_like">
// //                       <i className="fa fa-heart"></i>
// //                       74
// //                     </div>
// //                   </div>
// //                   <p>
// //                     doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
// //                     illo inventore veritatis et quasi architecto beatae vitae
// //                     dicta sunt explicabo.
// //                   </p>
// //                   <div className="d-flex flex-row">
// //                     <div className="mr40">
// //                       <h6>Owner</h6>
// //                       <div className="item_author">
// //                         <div className="author_list_pp">
// //                           <Link to="/author">
// //                             <img className="lazy" src={AuthorImage} alt="" />
// //                             <i className="fa fa-check"></i>
// //                           </Link>
// //                         </div>
// //                         <div className="author_list_info">
// //                           <Link to="/author">Monica Lucas</Link>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div></div>
// //                   </div>
// //                   <div className="de_tab tab_simple">
// //                     <div className="de_tab_content">
// //                       <h6>Creator</h6>
// //                       <div className="item_author">
// //                         <div className="author_list_pp">
// //                           <Link to="/author">
// //                             <img className="lazy" src={AuthorImage} alt="" />
// //                             <i className="fa fa-check"></i>
// //                           </Link>
// //                         </div>
// //                         <div className="author_list_info">
// //                           <Link to="/author">Monica Lucas</Link>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="spacer-40"></div>
// //                     <h6>Price</h6>
// //                     <div className="nft-item-price">
// //                       <img src={EthImage} alt="" />
// //                       <span>1.85</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ItemDetails;


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import AuthorImage from "../images/author_thumbnail.jpg";

// const ItemDetails = () => {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const fetchItem = async () => {
//       try {
//         const res = await axios.get(
//           "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
//         );

//         const foundItem = res.data.find(
//           (i) => String(i.id) === String(itemId)
//         );

//         if (foundItem) {
//           setItem(foundItem);
//         } else {
//           // fallback: try hotCollections endpoint (some items come from there)
//           try {
//             const hotRes = await axios.get(
//               "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
//             );

//             const foundHot = hotRes.data.find(
//               (h) => String(h.nftId) === String(itemId) || String(h.id) === String(itemId)
//             );

//             if (foundHot) {
//               // Map minimal fields so ItemDetails can render
//               setItem({
//                 id: foundHot.nftId || foundHot.id,
//                 title: foundHot.title || foundHot.name,
//                 nftImage: foundHot.nftImage || foundHot.coverImage,
//                 price: foundHot.price || "—",
//                 likes: foundHot.likes || 0,
//                 code: foundHot.code,
//                 author: {
//                   id: foundHot.authorId || (foundHot.author && foundHot.author.id) || 1,
//                   name: foundHot.authorName || (foundHot.author && foundHot.author.name) || "Unknown",
//                   image: foundHot.authorImage || (foundHot.author && foundHot.author.image) || ""
//                 }
//               });
//             } else {
//               setItem(null);
//             }
//           } catch (hotErr) {
//             console.error("Fallback hotCollections fetch failed", hotErr);
//             setItem(null);
//           }
//         }
//       } catch (err) {
//         console.error("Item fetch failed", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItem();
//   }, [itemId]);

//   if (loading) {
//     return <div style={{ padding: 100, textAlign: "center" }}>Loading...</div>;
//   }

//   if (!item) {
//     return <div style={{ padding: 100, textAlign: "center" }}>Item not found</div>;
//   }

//   return (
//     <div id="wrapper">
//       <div id="content" className="no-bottom no-top">
//         <div id="top"></div>

//         <section className="mt90 sm-mt-0">
//           <div className="container">
//             <div className="row align-items-center">

//               {/* IMAGE */}
//               <div className="col-md-6 text-center">
//                 <img
//                   src={item.nftImage}
//                   className="img-fluid img-rounded mb-sm-30"
//                   alt={item.title}
//                 />
//               </div>

//               {/* INFO */}
//               <div className="col-md-6">
//                 <div className="item_info">
//                   <h2>{item.title}</h2>

//                   <div className="item_info_counts">
//                     <div className="item_info_views">
//                       <i className="fa fa-eye"></i> {item.views || item.count || item.viewsCount || '—'}
//                     </div>
//                     <div className="item_info_like">
//                       <i className="fa fa-heart"></i> {item.likes}
//                     </div>
//                   </div>

//                   <p>
//                     {item.description || item.details || `This is the details page for ${item.title}.`}
//                   </p>


//                   <div className="owner-creator">
//                     <div className="owner-row" style={{ marginBottom: 20 }}>
//                       <h6>Owner</h6>
//                       <div className="item_author" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
//                         <div className="author_list_pp">
//                           <Link to={`/author/${item.owner?.id || item.author?.id || 1}`}>
//                             <img className="lazy" src={item.owner?.image || item.author?.image || AuthorImage} alt={item.owner?.name || item.author?.name || "Owner"} style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover' }} />
//                             <i className="fa fa-check"></i>
//                           </Link>
//                         </div>
//                         <div className="author_list_info">
//                           <Link to={`/author/${item.owner?.id || item.author?.id || 1}`} style={{ fontWeight: 600, fontSize: 16 }}>{item.owner?.name || item.author?.name || "Owner"}</Link>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="creator-row">
//                       <h6>Creator</h6>
//                       <div className="item_author" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
//                         <div className="author_list_pp">
// //                           <Link to={`/author/${item.creator?.id || item.author?.id || 1}`}>
// //                             <img className="lazy" src={item.creator?.image || item.author?.image || AuthorImage} alt={item.creator?.name || item.author?.name || "Creator"} style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover' }} />
// //                             <i className="fa fa-check"></i>
// //                           </Link>
// //                         </div>
// //                         <div className="author_list_info">
// //                           <Link to={`/author/${item.creator?.id || item.author?.id || 1}`} style={{ fontWeight: 600, fontSize: 16 }}>{item.creator?.name || item.author?.name || "Creator"}</Link>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="spacer-20"></div>

// //                   <h6>Price</h6>
// //                   <div className="nft-item-price">
// //                     <i className="fab fa-ethereum"></i>
// //                     <span>{item.price}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </section>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ItemDetails;

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getNewItems, getExploreItems, getHotCollections} from "../API/nftAPI";

// const ItemDetails = () => {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {

    

//     const loadItem = async () => {



//       try {
//         // const [newItems, explore] = await Promise.all([
//         //   getNewItems(),
//         //   getExploreItems()
//         // ]);

//         // const allItems = [...newItems, ...explore];

        

//         const [newItemsRes, exploreRes, hotRes] = await Promise.all([
//   getNewItems(),
//   getExploreItems(),
//   getHotCollections()
// ]);

// const newItems = Array.isArray(newItemsRes)
//   ? newItemsRes
//   : newItemsRes?.data || [];

// const explore = Array.isArray(exploreRes)
//   ? exploreRes
//   : exploreRes?.data || [];

// const hot = Array.isArray(hotRes)
//   ? hotRes
//   : hotRes?.data || [];

// const allItems = [...newItems, ...explore, ...hot];



//         const found = allItems.find(
//   (i) => String(i.nftId) === String(itemId)
// );
// console.log("FOUND ITEM:", found);
//         setItem(found);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     loadItem();
//   }, [itemId]);

//   if (!item) return <div style={{ padding: 80 }}>Loading...</div>;

//   return (
//     <div id="wrapper">
//       <div id="content" className="no-bottom no-top">

//         <section className="mt90">
//           <div className="container">
//             <div className="row align-items-center">

//               <div className="col-lg-6 col-md-7">
//                 <div
//   style={{
//     width: "100%",
//     aspectRatio: "1 / 1",
//     overflow: "hidden",
//     borderRadius: "16px"
//   }}
// >
//   <img
//     src={item.nftImage}
//     alt={item.title}
//     style={{
//       width: "100%",
//       height: "100%",
//       objectFit: "cover"
//     }}
//   />
// </div>
//               </div>

//               <div className="col-lg-5 col-md-5">

//   <h2>{item.title}</h2>

//   <div className="nft-item-price">
//     {item.price} ETH
//   </div>

//   {/* Creator / Author Section */}
//   <div style={{ marginTop: "20px" }}>
//     <p style={{ marginBottom: "6px", fontWeight: "500" }}>
//       Creator:
//     </p>

//     <Link to={`/author/${item.authorId}`}>
//       {item.authorName || "View Author"}
//     </Link>
//   </div>

//   {/* Description */}
//   {item.description && (
//     <div style={{ marginTop: "25px" }}>
//       <p style={{ lineHeight: "1.6", color: "#ccc" }}>
//         {item.description}
//       </p>
//     </div>
//   )}

//   {/* Metadata Section */}
//   <div style={{ marginTop: "25px" }}>
//     {item.category && (
//       <p><strong>Category:</strong> {item.category}</p>
//     )}

//     {item.createdAt && (
//       <p><strong>Created:</strong> {item.createdAt}</p>
//     )}

//     {item.collectionName && (
//       <p><strong>Collection:</strong> {item.collectionName}</p>
//     )}
//   </div>

// </div>

//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default ItemDetails;

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getExploreItems } from "../API/nftAPI";

// const ItemDetails = () => {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {

//     const loadItem = async () => {
//       try {

//         // ONLY load explore items so we get the full object
//         const exploreRes = await getExploreItems();

//         const explore = Array.isArray(exploreRes)
//           ? exploreRes
//           : exploreRes?.data || [];

//         const found = explore.find(
//           (i) => String(i.nftId) === String(itemId)
//         );

//         console.log("FOUND FULL ITEM:", found);

//         setItem(found);

//       } catch (err) {
//         console.error(err);
//       }
//     };

//     loadItem();

//   }, [itemId]);

//   if (!item) return <div style={{ padding: 80 }}>Loading...</div>;

//   return (
//     <div id="wrapper">
//       <div id="content" className="no-bottom no-top">

//         <section className="mt90">
//           <div className="container">
//             <div className="row align-items-center">

//               <div className="col-lg-6 col-md-7">
//                 <div
//                   style={{
//                     width: "100%",
//                     aspectRatio: "1 / 1",
//                     overflow: "hidden",
//                     borderRadius: "16px"
//                   }}
//                 >
//                   <img
//                     src={item.nftImage}
//                     alt={item.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover"
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-5 col-md-5">

// <h2 style={{marginBottom:"10px"}}>
//   {item.title}
// </h2>

// <h3 style={{color:"#888", marginBottom:"25px"}}>
//   #{item.nftId}
// </h3>

// {/* Likes Box */}
// <div style={{display:"flex", gap:"12px", marginBottom:"25px"}}>

// <div style={{
//   background:"#eee",
//   padding:"10px 16px",
//   borderRadius:"8px",
//   display:"flex",
//   alignItems:"center",
//   gap:"8px"
// }}>
//   👁 324
// </div>

// <div style={{
//   background:"#eee",
//   padding:"10px 16px",
//   borderRadius:"8px",
//   display:"flex",
//   alignItems:"center",
//   gap:"8px"
// }}>
//   ❤️ {item.likes}
// </div>

// <p style={{
//   color:"#777",
//   lineHeight:"1.6",
//   marginBottom:"30px"
// }}> 
//   illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
// </p>

// </div>

// <p style={{fontWeight:"600"}}>Owner</p>

// <div style={{
//   display:"flex",
//   alignItems:"center",
//   gap:"12px",
//   marginBottom:"25px"
// }}>
//   <img
//     src={item.authorImage}
//     style={{
//       width:"40px",
//       height:"40px",
//       borderRadius:"50%"
//     }}
//   />

//   <span>Nicholas Daniels</span>
// </div>


// {/* Creator Section */}
// <p style={{fontWeight:"600"}}>Creator</p>

// <div style={{
//   display:"flex",
//   alignItems:"center",
//   gap:"12px",
//   marginBottom:"30px"
// }}>
//   <img
//     src={item.authorImage}
//     style={{
//       width:"40px",
//       height:"40px",
//       borderRadius:"50%"
//     }}
//   />

//   <Link to={`/author/${item.authorId}`}>
//     Author #{item.authorId}
//   </Link>
// </div>


// {/* Price Section */}
// <p style={{fontWeight:"600"}}>Price</p>

// <div style={{
//   display:"flex",
//   alignItems:"center",
//   gap:"10px",
//   marginTop:"10px"
// }}>
//   <img
//     src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
//     width="24"
//   />

//   <span style={{
//     fontSize:"28px",
//     fontWeight:"600"
//   }}>
//     {item.price}
//   </span>
// </div>



// </div>

//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default ItemDetails;

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getExploreItems } from "../API/nftAPI";

// const ItemDetails = () => {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {

//     const loadItem = async () => {
//       try {

//         const exploreRes = await getExploreItems();

//         const explore = Array.isArray(exploreRes)
//           ? exploreRes
//           : exploreRes?.data || [];

//         const found = explore.find(
//           (i) => String(i.nftId) === String(itemId)
//         );

//         console.log("FOUND FULL ITEM:", found);

//         setItem(found);

//       } catch (err) {
//         console.error(err);
//       }
//     };

//     loadItem();

//   }, [itemId]);

//   if (!item) return <div style={{ padding: 80 }}>Loading...</div>;

//   return (
//     <div id="wrapper">
//       <div id="content" className="no-bottom no-top">

//         <section className="mt90">
//           <div className="container">
//             <div className="row align-items-center">

//               {/* IMAGE */}
//               <div className="col-lg-6 col-md-7">
//                 <div
//                   style={{
//                     width: "100%",
//                     aspectRatio: "1 / 1",
//                     overflow: "hidden",
//                     borderRadius: "16px"
//                   }}
//                 >
//                   <img
//                     src={item.nftImage}
//                     alt={item.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover"
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="col-lg-5 col-md-5">

//                 {/* TITLE + ID */}
//                 <h2 style={{marginBottom:"25px"}}>
//                   {item.title}
//                   <span style={{color:"#888", marginLeft:"10px"}}>
//                     #{item.nftId}
//                   </span>
//                 </h2>

//                 {/* STATS */}
//                 <div style={{
//                   display:"flex",
//                   gap:"14px",
//                   marginBottom:"25px"
//                 }}>

//                   <div style={{
//                     background:"#eee",
//                     padding:"8px 18px",
//                     borderRadius:"8px",
//                     fontSize:"14px",
//                     display:"flex",
//                     alignItems:"center",
//                     gap:"6px"
//                   }}>
//                     👁 324
//                   </div>

//                   <div style={{
//                     background:"#eee",
//                     padding:"8px 18px",
//                     borderRadius:"8px",
//                     fontSize:"14px",
//                     display:"flex",
//                     alignItems:"center",
//                     gap:"6px"
//                   }}>
//                     ❤️ {item.likes}
//                   </div>

//                 </div>

//                 {/* DESCRIPTION */}
//                 <p style={{
//                   color:"#777",
//                   lineHeight:"1.7",
//                   marginBottom:"35px"
//                 }}>
//                   illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//                 </p>

//                 {/* OWNER */}
//                 <p style={{fontWeight:"600", color:"#000"}}>Owner</p>

//                 <div style={{
//                   display:"flex",
//                   alignItems:"center",
//                   gap:"12px",
//                   marginBottom:"25px"
//                 }}>
//                   <div style={{position:"relative"}}>
//                     <img
//                       src={item.authorImage}
//                       style={{
//                         width:"42px",
//                         height:"42px",
//                         borderRadius:"50%"
//                       }}
//                     />

//                     {/* purple verification */}
//                     <span style={{
//                       position:"absolute",
//                       bottom:"-2px",
//                       right:"-2px",
//                       background:"#6f42c1",
//                       color:"#fff",
//                       width:"16px",
//                       height:"16px",
//                       borderRadius:"50%",
//                       fontSize:"10px",
//                       display:"flex",
//                       alignItems:"center",
//                       justifyContent:"center"
//                     }}>
//                       ✓
//                     </span>
//                   </div>

//                   <Link to={`/owner/${item.ownerId}`}
//                   style={{
//                           fontWeight: "500",
//                           color: "#000",
//                           textDecoration: "none"
//                         }}>

//                     Author #{item.ownerId}
//                   </Link>
//                 </div>

//                 {/* CREATOR */}
//                 <p style={{fontWeight:"600", color:"#000"}}>Creator</p>

//                 <div style={{
//                   display:"flex",
//                   alignItems:"center",
//                   gap:"12px",
//                   marginBottom:"35px"
//                 }}>
//                   <div style={{position:"relative"}}>
//                     <img
//                       src={item.authorImage}
//                       style={{
//                         width:"42px",
//                         height:"42px",
//                         borderRadius:"50%"
//                       }}
//                     />

//                     <span style={{
//                       position:"absolute",
//                       bottom:"-2px",
//                       right:"-2px",
//                       background:"#6f42c1",
//                       color:"#fff",
//                       width:"16px",
//                       height:"16px",
//                       borderRadius:"50%",
//                       fontSize:"10px",
//                       display:"flex",
//                       alignItems:"center",
//                       justifyContent:"center"
//                     }}>
//                       ✓
//                     </span>
//                   </div>

//                   <Link to={`/author/${item.authorId}`}
//                   style={{
//                           fontWeight: "500",
//                           color: "#000",
//                           textDecoration: "none"
//                         }}>

//                     Author #{item.authorId}
//                   </Link>
//                 </div>

//                 {/* PRICE */}
//                 <p style={{fontWeight:"600", color:"#000"}}>Price</p>

//                 <div style={{
//                   display:"flex",
//                   alignItems:"center",
//                   gap:"10px"
//                 }}>
//                   <img
//                     src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
//                     width="26"
//                     alt="ETH"
//                   />

//                   <span style={{
//                     fontSize:"28px",
//                     fontWeight:"600"
//                   }}>
//                     {item.price}
//                   </span>
//                 </div>

//               </div>

//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default ItemDetails;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemDetails } from "../API/nftAPI";

const ItemDetails = () => {

  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {

  window.scrollTo({ top: 0, behavior: "smooth" });

  const loadItem = async () => {

      try {

        const data = await getItemDetails(itemId);

        console.log("ITEM DETAILS:", data);

        setItem(data);

      } catch (err) {
        console.error(err);
      }

    };

    loadItem();

  }, [itemId]);

  if (!item) return <div style={{ padding: 80 }}>Loading...</div>;

  return (
    <div id="wrapper">
      <div id="content" className="no-bottom no-top">

        <section className="mt90">
          <div className="container">
            <div className="row align-items-stretch">

              {/* Image */}
              <div className="col-lg-6 col-md-7">
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: "16px"
                  }}
                >
                  <img
                    src={item.nftImage}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </div>

              {/* right side */}
              <div
  className="col-lg-5 col-md-5"
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  }}
>
  <div>

                {/* title and # */}
                <h2 style={{ marginBottom: "20px" }}>
  {item.title} #{item.tag}
</h2>

                {/* views and likes */}
                <div style={{
                  display:"flex",
                  gap:"14px",
                  marginBottom:"25px"
                }}>

                  <div style={{
                    background:"#f4f4f4",
                    padding:"10px 20px",
                    borderRadius:"10px",
                    fontSize:"14px",
                    display:"flex",
                    alignItems:"center",
                    gap:"8px",
                    fontWeight: "500"
                  }}>
                    👁 {item.views}
                  </div>

                  <div style={{
                    background:"#f4f4f4",
                    padding:"10px 20px",
                    borderRadius:"10px",
                    fontSize:"14px",
                    display:"flex",
                    alignItems:"center",
                    gap:"8px",
                    fontWeight: "500"
                  }}>
                    ❤️ {item.likes}
                  </div>

                </div>

                {/* para */}
                <p style={{
                  color:"#777",
                  lineHeight:"1.7",
                  marginBottom:"20px"
                }}>
                  {item.description}
                </p>

                {/* owner */}
                <p style={{fontWeight:"600", color:"#000", marginBottom:"10px"}}>Owner</p>

                <div style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  marginBottom:"35px"
                }}>

                  <div style={{position:"relative"}}>

                    <img
                      src={item.ownerImage}
                      style={{
                        width:"42px",
                        height:"42px",
                        borderRadius:"50%"
                      }}
                    />

                    <span style={{
                      position:"absolute",
                      bottom:"-2px",
                      right:"-2px",
                      background:"#6f42c1",
                      color:"#fff",
                      width:"16px",
                      height:"16px",
                      borderRadius:"50%",
                      fontSize:"10px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}>
                      ✓
                    </span>

                  </div>

                  <Link
                    to={`/author/${item.ownerId}`}
                    style={{
                      fontWeight: "500",
                      color: "#000",
                      textDecoration: "none"
                    }}
                  >
                    {item.ownerName}
                  </Link>

                </div>

                {/* creator */}
                <p style={{fontWeight:"600", color:"#000", marginBottom:"10px"}}>Creator</p>

                <div style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  marginBottom:"35px"
                }}>

                  <div style={{position:"relative"}}>

                    <img
                      src={item.creatorImage}
                      style={{
                        width:"42px",
                        height:"42px",
                        borderRadius:"50%"
                      }}
                    />
                    <span style={{
                      position:"absolute",
                      bottom:"-2px",
                      right:"-2px",
                      background:"#6f42c1",
                      color:"#fff",
                      width:"16px",
                      height:"16px",
                      borderRadius:"50%",
                      fontSize:"10px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}>
                      ✓
                    </span>
                  </div>
                  <Link
                    to={`/author/${item.creatorId}`}
                    style={{
                      fontWeight: "500",
                      color: "#000",
                      textDecoration: "none"
                    }}
                  >
                    {item.creatorName}
                  </Link>

                </div>
                </div>

                {/* price */}

                <div>
                
                <p style={{fontWeight:"600", color:"#000", marginBottom:"10px"}}>Price</p>

                <div style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"10px"
                }}>
                  <img
                    src="https://nft-marketplacee.web.app/static/media/ethereum.df265e367364f285053a1285ad8d418d.svg"
                    width="26"
                    alt="ETH"
                  />

                  <span style={{
                    fontSize:"28px",
                    fontWeight:"600",
                    color: "#000"
                  }}>
                    {item.price} 
                  </span>

                </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ItemDetails;