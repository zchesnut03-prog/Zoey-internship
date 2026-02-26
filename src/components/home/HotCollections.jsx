// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import OwlCarousel from "react-owl-carousel";
// import AuthorImage from "../../images/author_thumbnail.jpg";
// import nftImage from "../../images/nftImage.jpg";




// const HotCollections = () => {
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fetchError, setFetchError] = useState(false);

//   const fetchHotCollections = async () => {
//     setLoading(true);
//     setFetchError(false);
//     try {
//       const response = await axios.get(
//         "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
//       );
//       setCollections(response.data || []);
//       if (!response.data || response.data.length === 0) setFetchError(true);
//     } catch (error) {
//       console.error("Error fetching hot collections:", error);
//       setFetchError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHotCollections();
//   }, []);

//   const options = {
//     loop: true,
//     margin: 30,
//     nav: true,
//     dots: false,
//     responsive: {
//       0: { items: 1 },
//       768: { items: 2 },
//       1024: { items: 4 }
//     }
//   };

//   return (
//     <section id="section-collections" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="text-center">
//               <h2>Hot Collections</h2>
//               <div className="small-border bg-color-2"></div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <OwlCarousel className="owl-theme" {...options}>
//               {collections.slice(0, 6).map((item) => (
//                 <div className="item" key={item.id}>
//               <div className="nft_coll">
//                     <div
//                       className="nft_wrap"
//                       style={{
//                         backgroundImage: `url(${item.nftImage || item.coverImage || ''})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                       }}
//                     >
//                   <Link to="/item-details">
//                         <span className="nft_coll_hover" />
//                   </Link>
//                 </div>

//                 <div className="nft_coll_pp">
//                   {/* <Link to="/author"> */}
//                   <Link to={`/author/${item.authorId}`}>

//                         <img className="pp-coll" src={item.authorImage} alt={item.authorName} />
//                   </Link>
//                   <i className="fa fa-check"></i>
//                 </div>

//                 <div className="nft_coll_info">
//                   <Link to="/explore">
//                         <h4>{item.title}</h4>
//                   </Link>
//                       <span>{item.code}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//             </OwlCarousel>
//           </div>
//         {fetchError && !loading && (
//           <div style={{ textAlign: 'center', padding: '12px', color: 'var(--text-muted, #6c757d)' }}>
//             Hot Collections are unavailable right now.
//             <div style={{ marginTop: 8 }}>
//               <button className="btn-main" onClick={fetchHotCollections}>Retry</button>
//             </div>
//           </div>
//         )}
//           </div>
//       </div>
//     </section>
//   );
// };

// export default HotCollections;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import { getHotCollections } from "../../API/nftAPI";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getHotCollections();
        setCollections(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
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

  if (loading) return <div style={{ padding: 80 }}>Loading...</div>;

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="text-center">
          <h2>Hot Collections</h2>
          <div className="small-border bg-color-2"></div>
        </div>

        <OwlCarousel className="owl-theme" {...options}>
          {collections.map((item) => (
            <div className="item" key={item.id}>
              <div className="nft_coll">

                <div
                  className="nft_wrap"
                  style={{
                    backgroundImage: `url(${item.nftImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <Link to={`/item/${item.id}`}>
                    <span className="nft_coll_hover" />
                  </Link>
                </div>

                <div className="nft_coll_pp">
                  <Link to={`/author/${item.authorId}`}>
                    <img
                      className="pp-coll"
                      src={item.authorImage}
                      alt={item.authorName}
                    />
                  </Link>
                </div>

                <div className="nft_coll_info">
                  <h4>{item.title}</h4>
                </div>

              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HotCollections;