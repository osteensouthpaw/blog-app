interface Props {
  content: string;
  className?: string;
}

const BlogViewer = ({ content, className }: Props) => {
  return (
    <div
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogViewer;
