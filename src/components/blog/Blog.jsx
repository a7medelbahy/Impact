import React from "react";
import "./blog.css";
import { BlogsData } from "../../data";
import SectionHead from "./../SectionHead";
import BlogBox from "./BlogBox";

const Blog = () => {
  
  return (
    <div className="blogs section-padding" id="blog">
      <div className="container">
        <SectionHead
          sectionName="Recent Blog Posts"
          desc="Consequatur libero assumenda est voluptatem est quidem illum."
        />
        <div className="row gy-4 align-items-center justify-content-center">
          {BlogsData.map((blogItem) => {
            return <BlogBox key={blogItem.id} blogItem={blogItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
