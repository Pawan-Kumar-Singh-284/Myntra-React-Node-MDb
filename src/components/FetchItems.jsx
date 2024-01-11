import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { statusActions } from "../store/statusSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    // dispatch(statusActions.markFetchingStarted());
    fetch("http://localhost:8081/api/auth/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(statusActions.markFetchDone());
        // dispatch(statusActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items));

        // console.log(items[0]);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
}

export default FetchItems;
