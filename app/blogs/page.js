import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Hello world form shifat",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Hello world form Jeni",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <li key={blog.id}>
            {" "}
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
