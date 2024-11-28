import React from "react";

const BlogViewer = ({ content }: { content: string }) => {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogViewer;
