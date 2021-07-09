import React, {useEffect,useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(
        () => {
          setTimeout(() => {
            fetch(url)
              .then(res => { 
                if(!res.ok){
                  throw Error('could not fetch data form that resourcce');
                }           
                return res.json();
              })
              .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
              })
              .catch( err => {
                setIsPending(false);
                setError(true);
              }
    
              )
          }, 1000)
        }
        , [url]);

    return { data, isPending, error } 
}
 
export default useFetch;