import { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const useInfinityScroll = (endPoint, type) => {
  const [page, setPage] = useState(1);
  const [updateData, setUpdateData] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  //fetch new data whenever page is updated
  useEffect(() => {
    sendRequest(type, page);
    setFetch(false);
  }, [sendRequest, type, page]);

  //updata the previous data with the newly fetched data
  useEffect(() => {
    setUpdateData((prev) => {
      if (page === 1) {
        return data;
      } else {
        return [...prev, ...data];
      }
    });
  }, [page, data, status]);

  //updates page when user scrolls to the bottom
  useEffect(() => {
    if (fetch) {
      setPage(page + 1);
    }
  }, [page, fetch]);

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

  useEffect(() => {
    setPage(1);
  }, []);

  console.log(status);
  console.log(data);
  console.log(updateData);
  return { updateData, error, status, page };
};

export default useInfinityScroll;
