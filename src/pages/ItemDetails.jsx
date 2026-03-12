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

              {/* image */}
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