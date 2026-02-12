

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../index.css";
import EthImage from "../images/ethereum.svg";

const ItemDetails = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchItem = async () => {
      try {
        const res = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${itemId}`
        );
        setItem(res.data);
      } catch (err) {
        console.error("Item details fetch failed", err);
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) return null;

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">

              <div className="col-md-6 text-center">
                <img
                  src={item.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={item.title}
                />
              </div>

              <div className="col-md-6">
                <div className="item_info">
                  <h2>{item.title}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i> {item.likes}
                    </div>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <div>
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${item.authorId}`}>
                            <img src={item.authorImage} alt="author" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${item.authorId}`}>
                            Author #{item.authorId}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="de_tab tab_simple mt-4">
                    <h6>Creator</h6>

                    <div className="item_author">
                      <div className="author_list_pp">
                        <Link to={`/author/${item.authorId}`}>
                          <img src={item.authorImage} alt="author" />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to={`/author/${item.authorId}`}>
                          Author #{item.authorId}
                        </Link>
                      </div>
                    </div>

                    <div className="spacer-40"></div>

                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="ETH" />
                      <span>{item.price} ETH</span>
                    </div>

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

