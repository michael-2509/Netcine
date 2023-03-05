import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// import SearchBar from "../SearchBar.js/SearchBar";
import useHttp from "../../hooks/use-http";

import InfoList from "./InfoList";
import InfoSkeleton from "../InfoSkeleton";

const Info = ({ endpoint }) => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(endpoint, true);
  const { id, media_type } = params;

  useEffect(() => {
    sendRequest(media_type, id);
  }, [sendRequest, media_type, id]);

  if (status === "pending") {
    return <InfoSkeleton />;
  }

  if (error) {
    return <p className="text-white">{error} </p>;
  }

  if (status === "complete" && data === null) {
    return <p>No data avaialable now</p>;
  }
  return (
    <>
      <InfoList data={data} />
    </>
  );
};

export default Info;
