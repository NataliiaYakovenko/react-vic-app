
 import React, { useEffect, useState } from 'react';

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

 
 function UsersLoaderHuk() {
   const [currentPage, setCurrentPage] = useState(1);
   const [results, setResults] = useState(5);
   
   const {data: users, isFetching,error}= useData({currentPage,results})
 
   const prevPage = () => {
     if (currentPage > 1) {
       setCurrentPage(currentPage => currentPage - 1);
     }
   };
 
   const nextPage = () => {
     setCurrentPage(currentPage => currentPage + 1);
   };
 
   return (
     <>
       {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
       {isFetching && <div>Loading. Please waite...</div>}
       {!error && !isFetching && (
         <>
           <button onClick={prevPage}>{'<'}</button>
           <button onClick={nextPage}>{'>'}</button>
           <ul>
             {users.map(u => (
               <li key={u.login.uuid}>{JSON.stringify(u)}</li>
             ))}
           </ul>
         </>
       )}
     </>
   );
 }
 
 export default UsersLoaderHuk;