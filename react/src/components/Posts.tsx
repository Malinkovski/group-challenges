import React from "react";
import useFetch from "../hooks/useFetch";
import { UrlProps } from "./types";
import Loading from "./Loading";

interface CommentProps {
  id: number;
  body: string;
}

const Posts = ({ url }: UrlProps) => {
  const { loading, data, error } = useFetch<CommentProps[]>(url, []);

  return (
    <div className="content">
      <Loading loading={loading} error={error} />
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
