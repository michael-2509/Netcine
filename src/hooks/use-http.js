import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatchFn] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : "null",
    error: null,
    data: null,
  });

  const sendRequest = useCallback(async () => {
    dispatchFn({ type: "SEND" });
    try {
      const responseData = await requestFunction();
      dispatchFn({ type: "SUCCESS", responseData });
    } catch (error) {
      dispatchFn({
        type: "ERROR",
        errorMessage: error.Message || "something went wrong!",
      });
    }
  }, [requestFunction]);

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
