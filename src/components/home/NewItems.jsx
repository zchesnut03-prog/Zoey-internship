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
                  <div className="item" key={item.nftId}>
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
    if (!item.expiryDate) return;

    const tick = () => {
      const now = Date.now();
      const remaining = Math.floor((item.expiryDate - now) / 1000);

      if (remaining <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const h = Math.floor(remaining / 3600);
      const m = Math.floor((remaining % 3600) / 60);
      const s = remaining % 60;

      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [item.expiryDate]);

  return (
    <div className="nft__item">
      
      <div className="author_list_pp">
        <Link to={`/author/${item.authorId}`}>
          <img src={item.authorImage} alt="author" />
          <i className="fa fa-check"></i>
        </Link>
      </div>

      {timeLeft && <div className="de_countdown">{timeLeft}</div>}

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

        <div className="nft__item_price">{item.price} ETH</div>

        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{item.likes}</span>
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
