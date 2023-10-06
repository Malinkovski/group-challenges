import React from "react";

interface LoadingProps {
  loading: boolean;
  error?: string | null;
}

const Loading = ({ loading, error }: LoadingProps) => {
  if (loading) {
    return (
      <p>
        <i className="fas fa-spinner fa-pulse"></i>
      </p>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return null;
};

export default Loading;
