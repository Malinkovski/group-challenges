import React from "react";
import useFetch from "../hooks/useFetch";
import { UrlProps } from "./types";
import Loading from "./Loading";

interface CommentProps {
  id: number;
  name: string;
}

const Comments = ({ url }: UrlProps) => {
  const { loading, data, error } = useFetch<CommentProps[]>(url);

  return (
    <div className="content">
      <Loading loading={loading} error={error} />
      <ul>
        {data &&
          data.map((comment) => <li key={comment.id}>{comment.name}</li>)}
      </ul>
    </div>
  );
};

export default Comments;
