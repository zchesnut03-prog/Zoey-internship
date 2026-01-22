// import React, { useEffect } from "react";
// import EthImage from "../images/ethereum.svg";
// import { Link } from "react-router-dom";
// import AuthorImage from "../images/author_thumbnail.jpg";
// import nftImage from "../images/nftImage.jpg";

// const ItemDetails = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
//         <section aria-label="section" className="mt90 sm-mt-0">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 text-center">
//                 <img
//                   src={nftImage}
//                   className="img-fluid img-rounded mb-sm-30 nft-image"
//                   alt=""
//                 />
//               </div>
//               <div className="col-md-6">
//                 <div className="item_info">
//                   <h2>Rainbow Style #194</h2>

//                   <div className="item_info_counts">
//                     <div className="item_info_views">
//                       <i className="fa fa-eye"></i>
//                       100
//                     </div>
//                     <div className="item_info_like">
//                       <i className="fa fa-heart"></i>
//                       74
//                     </div>
//                   </div>
//                   <p>
//                     doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//                     illo inventore veritatis et quasi architecto beatae vitae
//                     dicta sunt explicabo.
//                   </p>
//                   <div className="d-flex flex-row">
//                     <div className="mr40">
//                       <h6>Owner</h6>
//                       <div className="item_author">
//                         <div className="author_list_pp">
//                           <Link to="/author">
//                             <img className="lazy" src={AuthorImage} alt="" />
//                             <i className="fa fa-check"></i>
//                           </Link>
//                         </div>
//                         <div className="author_list_info">
//                           <Link to="/author">Monica Lucas</Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div></div>
//                   </div>
//                   <div className="de_tab tab_simple">
//                     <div className="de_tab_content">
//                       <h6>Creator</h6>
//                       <div className="item_author">
//                         <div className="author_list_pp">
//                           <Link to="/author">
//                             <img className="lazy" src={AuthorImage} alt="" />
//                             <i className="fa fa-check"></i>
//                           </Link>
//                         </div>
//                         <div className="author_list_info">
//                           <Link to="/author">Monica Lucas</Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="spacer-40"></div>
//                     <h6>Price</h6>
//                     <div className="nft-item-price">
//                       <img src={EthImage} alt="" />
//                       <span>1.85</span>
//                     </div>
//                   </div>
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
import axios from "axios";
import AuthorImage from "../images/author_thumbnail.jpg";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchItem = async () => {
      try {
        const res = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );

        const foundItem = res.data.find(
          (i) => String(i.id) === String(itemId)
        );

        if (foundItem) {
          setItem(foundItem);
        } else {
          // fallback: try hotCollections endpoint (some items come from there)
          try {
            const hotRes = await axios.get(
              "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
            );

            const foundHot = hotRes.data.find(
              (h) => String(h.nftId) === String(itemId) || String(h.id) === String(itemId)
            );

            if (foundHot) {
              // Map minimal fields so ItemDetails can render
              setItem({
                id: foundHot.nftId || foundHot.id,
                title: foundHot.title || foundHot.name,
                nftImage: foundHot.nftImage || foundHot.coverImage,
                price: foundHot.price || "—",
                likes: foundHot.likes || 0,
                code: foundHot.code,
                author: {
                  id: foundHot.authorId || (foundHot.author && foundHot.author.id) || 1,
                  name: foundHot.authorName || (foundHot.author && foundHot.author.name) || "Unknown",
                  image: foundHot.authorImage || (foundHot.author && foundHot.author.image) || ""
                }
              });
            } else {
              setItem(null);
            }
          } catch (hotErr) {
            console.error("Fallback hotCollections fetch failed", hotErr);
            setItem(null);
          }
        }
      } catch (err) {
        console.error("Item fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <div style={{ padding: 100, textAlign: "center" }}>Loading...</div>;
  }

  if (!item) {
    return <div style={{ padding: 100, textAlign: "center" }}>Item not found</div>;
  }

  return (
    <div id="wrapper">
      <div id="content" className="no-bottom no-top">
        <div id="top"></div>

        <section className="mt90 sm-mt-0">
          <div className="container">
            <div className="row align-items-center">

              {/* IMAGE */}
              <div className="col-md-6 text-center">
                <img
                  src={item.nftImage}
                  className="img-fluid img-rounded mb-sm-30"
                  alt={item.title}
                />
              </div>

              {/* INFO */}
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{item.title}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i> {item.views || item.count || item.viewsCount || '—'}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i> {item.likes}
                    </div>
                  </div>

                  <p>
                    {item.description || item.details || `This is the details page for ${item.title}.`}
                  </p>


                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${item.owner?.id || item.author?.id || 1}`}>
                            <img className="lazy" src={item.owner?.image || item.author?.image || AuthorImage} alt={item.owner?.name || item.author?.name || "Owner"} />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${item.owner?.id || item.author?.id || 1}`}>{item.owner?.name || item.author?.name || "Owner"}</Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${item.creator?.id || item.author?.id || 1}`}>
                            <img className="lazy" src={item.creator?.image || item.author?.image || AuthorImage} alt={item.creator?.name || item.author?.name || "Creator"} />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${item.creator?.id || item.author?.id || 1}`}>{item.creator?.name || item.author?.name || "Creator"}</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-20"></div>

                  <h6>Price</h6>
                  <div className="nft-item-price">
                    <i className="fab fa-ethereum"></i>
                    <span>{item.price}</span>
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

