import React, { useEffect, useState } from 'react'
import NoticesCard from './NoticesCard'

export const Notices = ({search}) => {
  

  const [notices, setNotices] = useState([])
  const [error, setError] = useState([])

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;


useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${search}&language=en`)
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
    }
    const responseData = await response.json();

    setNotices(responseData.results);
  } catch (error) {
      setError(error.message);
    }
  }
  fetchData();
}, [search])


  return (
    <>
    <main className='flex flex-wrap gap-5'>
      {notices.map((notice) => {
        return(
          <NoticesCard notice={notice} key={notice.article_id}/>
        )
      })}
    </main>
    </>
  )
}
