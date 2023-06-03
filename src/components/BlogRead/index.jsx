import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

import BlogPost from "../../assets/blog.png";

const BlogRead = () => {
  return (
    <div className={styles.blogReadContainer}>
      <Typography className={styles.dailyReadTitle} component="h3">
        <div className={styles.blogDot}></div>
        DAILY READ
      </Typography>
      <Typography className={styles.blogTitle} component="h3">
        Equitable medical education with efforts toward real change
      </Typography>
      <img className={styles.blogPost} src={BlogPost} alt="blog-post" />
    </div>
  );
};

export default BlogRead;
