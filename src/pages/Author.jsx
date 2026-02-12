


import React from "react";
import { useParams } from "react-router-dom";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import AuthorImage from "../images/author_thumbnail.jpg";

const Author = () => {
  const { authorId } = useParams();

if (!authorId) return null;



  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          className="text-light"
          style={{ background: `url(${AuthorBanner}) top` }}
        />

        <section>
          <div className="container">
            <h2>Author ID: {authorId}</h2>

            <div className="profile_avatar">
              <img src={AuthorImage} alt="" />
              <h4>Author Profile</h4>
            </div>

            <AuthorItems authorId={authorId} />


          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
