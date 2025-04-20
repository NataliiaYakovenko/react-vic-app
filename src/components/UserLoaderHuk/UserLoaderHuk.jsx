
 import React, { useEffect, useState } from 'react';
 import useData from '../../hooks/useData';

 

 
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