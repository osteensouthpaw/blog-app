import React, { PropsWithChildren } from "react";

const BlogLayout = ({ children }: PropsWithChildren) => {
  return <div className="mt-10">{children}</div>;
};

export default BlogLayout;
