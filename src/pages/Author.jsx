// // import React from "react";
// // import AuthorBanner from "../images/author_banner.jpg";
// // import AuthorItems from "../components/author/AuthorItems";
// // import { Link } from "react-router-dom";
// // import AuthorImage from "../images/author_thumbnail.jpg";

// // const Author = () => {
// //   return (
// //     <div id="wrapper">
// //       <div className="no-bottom no-top" id="content">
// //         <div id="top"></div>

// //         <section
// //           id="profile_banner"
// //           aria-label="section"
// //           className="text-light"
// //           data-bgimage="url(images/author_banner.jpg) top"
// //           style={{ background: `url(${AuthorBanner}) top` }}
// //         ></section>

// //         <section aria-label="section">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-12">
// //                 <div className="d_profile de-flex">
// //                   <div className="de-flex-col">
// //                     <div className="profile_avatar">
// //                       <img src={AuthorImage} alt="" />

// //                       <i className="fa fa-check"></i>
// //                       <div className="profile_name">
// //                         <h4>
// //                           Monica Lucas
// //                           <span className="profile_username">@monicaaaa</span>
// //                           <span id="wallet" className="profile_wallet">
// //                             UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
// //                           </span>
// //                           <button id="btn_copy" title="Copy Text">
// //                             Copy
// //                           </button>
// //                         </h4>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="profile_follow de-flex">
// //                     <div className="de-flex-col">
// //                       <div className="profile_follower">573 followers</div>
// //                       <Link to="#" className="btn-main">
// //                         Follow
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-md-12">
// //                 <div className="de_tab tab_simple">
// //                   <AuthorItems />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Author;




// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import { useEffect } from "react";
// // import AuthorBanner from "../images/author_banner.jpg";
// // import AuthorItems from "../components/author/AuthorItems";
// // import AuthorImage from "../images/author_thumbnail.jpg";

// // const Author = () => {
// //   const { authorId } = useParams();

// //   if (!authorId) return null;

// //   return (
// //     <div id="wrapper">
// //       <div className="no-bottom no-top" id="content">
// //         <div id="top"></div>

// //         <section
// //           id="profile_banner"
// //           className="text-light"
// //           style={{ background: `url(${AuthorBanner}) top` }}
// //         />

// //         <section>
// //           <div className="container">
// //             <h2>Author ID: {authorId}</h2>

// //             <div className="profile_avatar">
// //               <img src={AuthorImage} alt="" />
// //               <h4>Author Profile</h4>
// //             </div>

// //             <AuthorItems authorId={authorId} />
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Author;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import AuthorBanner from "../images/author_banner.jpg";
// import AuthorItems from "../components/author/AuthorItems";

// const Author = () => {
//   const { authorId } = useParams();
//   const [author, setAuthor] = useState(null);

//   useEffect(() => {
//   if (!authorId) return;

//   fetch("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers")
//     .then((res) => res.json())
//     .then((data) => {
//       const foundAuthor = data.find(
//         (seller) => seller.authorId.toString() === authorId
//       );

//       if (foundAuthor) {
//         setAuthor(foundAuthor);
//       } else {
//         setAuthor({
//           authorName: `Author ${authorId}`,
//           authorImage: null,
//         });
//       }
//     })
//     .catch((err) => console.error("Error loading author:", err));
// }, [authorId]);


//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="profile_banner"
//           className="text-light"
//           style={{ background: `url(${AuthorBanner}) top` }}
//         />

//         <section>
//           <div className="container">
//             <h2>{author?.authorName}</h2>

// <div className="profile_avatar">
//   {author?.authorImage && (
//     <img src={author.authorImage} alt={author.authorName} />
//   )}
//   <h4>{author?.authorName}</h4>
// </div>
              
//             <AuthorItems authorId={authorId} />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Author;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { getAuthorById } from "../API/nftAPI";

const Author = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, [authorId]);

  useEffect(() => {
    
    const loadAuthor = async () => {
      try {
        const data = await getAuthorById(authorId);

// console.log("AUTHOR API RESPONSE:", data);

        setAuthor(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadAuthor();
  }, [authorId]);

  if (!author) return <div style={{ padding: 80 }}>Loading...</div>;

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">

        <section
          id="profile_banner"
          className="text-light"
          style={{ background: `url(${AuthorBanner}) top` }}
        />

        <section>
  <div className="container">

    <div className="row align-items-center mb-4">

      <div className="col-md-2 text-center">
        <img
          src={author.authorImage}
          alt={author.authorName}
          className="img-fluid rounded-circle"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-6">
  <h2>{author.authorName}</h2>

  <p className="text-muted mb-2">
    @{author.tag || author.authorName?.toLowerCase()}
  </p>

  <div className="d-flex align-items-center gap-2 flex-wrap">

    <span className="text-muted">
      {author.address
        ? `${author.address.slice(0, 6)}...${author.address.slice(-4)}`
        : ""}
    </span>

    <button
  className="btn-main btn-sm"
  style={{ padding: "4px 12px" }}
  onClick={() => navigator.clipboard.writeText(author.address)}
>
  Copy
</button>

  </div>
</div>

      <div className="col-md-4 text-md-end">
        <h5>{author.followers} Followers</h5>
        <button className="btn-main">Follow</button>
      </div>

    </div>

    <div className="row">
      <AuthorItems authorId={authorId} />
    </div>

  </div>
</section>

      </div>
    </div>
  );
};

export default Author;