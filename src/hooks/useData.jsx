import { useEffect, useState } from "react";

function useData({currentPage, results}){
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

 
  const loadData = () => {
    setIsFetching(true);

    fetch(
      `https://randomuser.me/api?page=${currentPage}&results=${results}&seed=pe2022`
    )
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadData();
  }, [currentPage, results]);
    return {data, isFetching,error}

 }

 export default useData