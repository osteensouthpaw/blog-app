import React from "react";
import LatestBlogs from "../../_components/LatestBlogs";
import { Blog, User } from "@prisma/client";

interface Props {
  user: User;
  blogs: Blog[];
}

const HomeTab = ({ user, blogs }: Props) => {
  return <LatestBlogs user={user} blogs={blogs} />;
};

export default HomeTab;
