// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import axios from "axios";
// // // import OwlCarousel from "react-owl-carousel";

// // // const NewItems = () => {
// // //   const [items, setItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchNewItems = async () => {
// // //       try {
// // //         const res = await axios.get(
// // //           "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
// // //         );
// // //         setItems(res.data || []);
// // //       } catch (err) {
// // //         console.error("New items fetch failed", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchNewItems();

// // //   }, []);

// // //   const options = {
// // //     loop: true,
// // //     margin: 30,
// // //     nav: true,
// // //     dots: false,
// // //     responsive: {
// // //       0: { items: 1 },
// // //       768: { items: 2 },
// // //       1024: { items: 4 }
// // //     }
// // //   };

// // //   return (
// // //     <section id="section-items" className="no-bottom">
// // //       <div className="container">
// // //         <div className="row">
// // //           <div className="col-12 text-center">
// // //      



// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import OwlCarousel from "react-owl-carousel";


// // const NewItems = () => {
// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchNewItems = async () => {
// //       try {
// //         const res = await axios.get(
// //           "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
// //         );
// //         setItems(res.data || []);
// //       } catch (err) {
// //         console.error("New items fetch failed", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchNewItems();
// //   }, []);

// //   const options = {
// //     loop: true,
// //     margin: 30,
// //     nav: true,
// //     dots: false,
// //     responsive: {
// //       0: { items: 1 },
// //       768: { items: 2 },
// //       1024: { items: 4 }
// //     }
// //   };

// //   return (
// //     <section id="section-items" className="no-bottom">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-12 text-center">
// //             <h2>New Items</h2>
// //             <div className="small-border bg-color-2"></div>
// //           </div>
// //         </div>

// //         <div className="row">
// //           <div className="col-12">
// //             {loading ? (
// //               <SkeletonItems />
// //             ) : (
// //               <OwlCarousel className="owl-theme" {...options}>
// //                 {items.map((item) => (
// //                   <div className="item" key={item.id}>
// //                     <NFTItem item={item} />
// //                   </div>
// //                 ))}
// //               </OwlCarousel>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };



// // const NFTItem = ({ item }) => {
// //   const [timeLeft, setTimeLeft] = useState(null);

// //   useEffect(() => {
// //     if (Math.random() > 0.5) return;

// //     let remaining = Math.floor(Math.random() * 20000) + 3600;

// //     const tick = () => {
// //       if (remaining <= 0) {
// //         setTimeLeft("Expired");
// //         return;
// //       }

// //       const h = Math.floor(remaining / 3600);
// //       const m = Math.floor((remaining % 3600) / 60);
// //       const s = remaining % 60;

// //       setTimeLeft(`${h}h ${m}m ${s}s`);
// //       remaining -= 1;
// //     };

// //     tick();
// //     const interval = setInterval(tick, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="nft__item">
// //       {/* AUTHOR */}
// //       <div className="author_list_pp">
// //         <Link to={`/author/${item.author.name}`}>
// //           <img src={item.author.avatar} alt={item.author.name} />
// //           <i className="fa fa-check"></i>
// //         </Link>
// //       </div>

// //       {timeLeft && <div className="de_countdown">{timeLeft}</div>}

// //       {/* IMAGE */}
// //       <div className="nft__item_wrap">
// //         <Link to={`/item/${item.id}`}>
// //           <img
// //             src={item.image}
// //             className="nft__item_preview"
// //             alt={item.title}
// //           />
// //         </Link>
// //       </div>

// //       {/* INFO */}
// //       <div className="nft__item_info">
// //         <Link to={`/item/${item.id}`}>
// //           <h4>{item.title}</h4>
// //         </Link>

// //         <div className="nft__item_price">{item.price} ETH</div>

// //         <div className="nft__item_like">
// //           <i className="fa fa-eye"></i>
// //           <span>{item.views}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // const SkeletonItems = () => (
// //   <div className="row">
// //     {Array.from({ length: 4 }).map((_, i) => (
// //       <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
// //         <div className="nft__item skeleton">
// //           <div className="skeleton-avatar"></div>
// //           <div className="skeleton-image"></div>
// //           <div className="skeleton-text"></div>
// //           <div className="skeleton-text short"></div>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // );

// // export default NewItems;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";


// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const NewItems = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
//       .then((res) => {
//         setItems(res.data);
//       })
//       .catch((err) => {
//         console.error("New items fetch failed", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const options = {
//     loop: true,
//     margin: 30,
//     nav: true,
//     dots: false,
//     responsive: {
//       0: { items: 1 },
//       768: { items: 2 },
//       1024: { items: 4 },
//     },
//   };

//   return (
//     <section id="section-items" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center">
//             <h2>New Items</h2>
//             <div className="small-border bg-color-2"></div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             {loading ? (
//               <SkeletonItems />
//             ) : (
//               <OwlCarousel className="owl-theme" {...options}>
//                 {items.map((item) => (
//                   <div className="item" key={item.id}>
//                     <NFTItem item={item} />
//                   </div>
//                 ))}
//               </OwlCarousel>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const NFTItem = ({ item }) => {
//   const [timeLeft, setTimeLeft] = useState(null);

//   useEffect(() => {
//     if (Math.random() > 0.5) return;

//     let remaining = Math.floor(Math.random() * 20000) + 3600;

//     const interval = setInterval(() => {
//       if (remaining <= 0) {
//         setTimeLeft("Expired");
//         clearInterval(interval);
//         return;
//       }

//       const h = Math.floor(remaining / 3600);
//       const m = Math.floor((remaining % 3600) / 60);
//       const s = remaining % 60;

//       setTimeLeft(`${h}h ${m}m ${s}s`);
//       remaining--;
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="nft__item">
//       {/* AUTHOR */}
//       <div className="author_list_pp">
//         <Link to={`/author/${item.author}`}>
//           <img src={item.authorImage} alt={item.author} />
//           <i className="fa fa-check"></i>
//         </Link>
//       </div>

//       {timeLeft && <div className="de_countdown">{timeLeft}</div>}

//       {/* IMAGE */}
//       <div className="nft__item_wrap">
//         <Link to={`/item/${item.id}`}>
//           <img
//             src={item.image_url}
//             className="nft__item_preview"
//             alt={item.title}
//           />
//         </Link>
//       </div>

//       {/* INFO */}
//       <div className="nft__item_info">
//         <Link to={`/item/${item.id}`}>
//           <h4>{item.title}</h4>
//         </Link>

//         <div className="nft__item_price">{item.price} ETH</div>

//         <div className="nft__item_like">
//           <i className="fa fa-eye"></i>
//           <span>{item.views}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SkeletonItems = () => (
//   <div className="row">
//     {Array.from({ length: 4 }).map((_, i) => (
//       <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
//         <div className="nft__item skeleton">
//           <div className="skeleton-avatar"></div>
//           <div className="skeleton-image"></div>
//           <div className="skeleton-text"></div>
//           <div className="skeleton-text short"></div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default NewItems;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const res = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
        setItems(res.data || []);
      } catch (err) {
        console.error("New items fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 4 }
    }
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>New Items</h2>
            <div className="small-border bg-color-2"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {loading ? (
              <SkeletonItems />
            ) : (
              <OwlCarousel className="owl-theme" {...options}>
                {items.map((item) => (
                  <div className="item" key={item.id}>
                    <NFTItem item={item} />
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const NFTItem = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // demo-style countdown
    if (Math.random() > 0.5) return;

    let remaining = Math.floor(Math.random() * 20000) + 3600;

    const tick = () => {
      if (remaining <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const h = Math.floor(remaining / 3600);
      const m = Math.floor((remaining % 3600) / 60);
      const s = remaining % 60;

      setTimeLeft(`${h}h ${m}m ${s}s`);
      remaining -= 1;
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nft__item">
      {/* AUTHOR */}
      <div className="author_list_pp">
        <Link to={`/author/${item.creator?.name || "unknown"}`}>
          <img src={item.creator?.image} alt={item.creator?.name} />
          <i className="fa fa-check"></i>
        </Link>
      </div>

      {timeLeft && <div className="de_countdown">{timeLeft}</div>}

      {/* IMAGE */}
      <div className="nft__item_wrap">
        <Link to={`/item/${item.id}`}>
          <img
            src={item.image_url}
            className="nft__item_preview"
            alt={item.title}
          />
        </Link>
      </div>

      {/* INFO */}
      <div className="nft__item_info">
        <Link to={`/item/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>

        <div className="nft__item_price">{item.price} ETH</div>

        <div className="nft__item_like">
          <i className="fa fa-eye"></i>
          <span>{item.views}</span>
        </div>
      </div>
    </div>
  );
};

const SkeletonItems = () => (
  <div className="row">
    {Array.from({ length: 4 }).map((_, i) => (
      <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
        <div className="nft__item skeleton">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      </div>
    ))}
  </div>
);

export default NewItems;
