import { useCallback } from "react";

const useHttp = (requestFunction) => {
  const sendRequest = useCallback(async () => {
    try {
      const requestData = await requestFunction();
      console.log(requestData);
    } catch (error) {
      console.log("error");
    }
  }, [requestFunction]);

  return {
    sendRequest,
  };
};

export default useHttp;
