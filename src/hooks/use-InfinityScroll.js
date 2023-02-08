import { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const useInfinityScroll = (endPoint, type, id) => {
  const [page, setPage] = useState(1);
  const [updateData, setUpdateData] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  useEffect(() => {
    sendRequest(type, page);
    setFetch(false);
    if (fetch) {
      setPage(page + 1);
    }
  }, [sendRequest, type, page, fetch]);

  useEffect(() => {
    setUpdateData((prev) => {
      if (page === 1) {
        console.log("page 1: ");
        return data;
      } else if (page > 1 && status === "pending") {
        console.log("page 2 but no data yet: ");
        return [...prev];
      } else {
        console.log("page 3 with total data: ");

        return [...prev, ...data];
      }
    });
  }, [data, page, fetch, status]);

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

  return { updateData, error, status, page };
};

export default useInfinityScroll;
