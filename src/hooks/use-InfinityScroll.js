import { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const useInfinityScroll = (endPoint, type) => {
  const [page, setPage] = useState(1);
  const [updateData, setUpdateData] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  useEffect(() => {
    setPage(1);
  }, []);

  //fetch new data whenever page is updated
  useEffect(() => {
    sendRequest(type, page);
  }, [sendRequest, type, page]);

  //update page when fetch is set to changes
  useEffect(() => {
    if (fetch) {
      setFetch(false);
      setPage(page + 1);
    }
  }, [fetch, page]);

  //updata the previous data with the newly fetched data
  useEffect(() => {
    if (status === "pending") return;
    setUpdateData((prev) => {
      if (page === 1) {
        return data;
      } else {
        return [...prev, ...data];
      }
    });
  }, [page, data, status]);

  // function for determine when to fetch
  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 50
    ) {
      setFetch(true);
    }
  }, []);

  //listen to listen to the onScroll function
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  //remove duplicates from array
  const uniqueData = [
    ...new Map(updateData.map((item) => [item.id, item])).values(),
  ];

  return { uniqueData, error, status, page };
};

export default useInfinityScroll;
