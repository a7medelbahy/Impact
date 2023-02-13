import React from "react";

const BlogBox = (props) => {
  
  return (
    <div className="col-md-6 col-lg-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="blog rounded overflow-hidden d-flex flex-column"
      >
        <div className="blog-img overflow-hidden">
          <img
            src={props.blogItem.img}
            className="img-fluid w-100 overflow-hidden"
            alt="Blog"
          />
        </div>
        <div className="blog-info p-4">
          <p className="light-black mb-1">{props.blogItem.categoary}</p>
          <a href="http://www.google.com" target="_blank" rel="noreferrer">
            {props.blogItem.title}
          </a>
          <div className="blog-author mt-4 d-flex align-items-center gap-4">
            <img
              src={props.blogItem.authorImg}
              className="img-fluid w-25 rounded-circle"
              alt="blog author"
            />
            <div className="author-info">
              <p className="mb-0">{props.blogItem.authorName}</p>
              <small>{props.blogItem.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
