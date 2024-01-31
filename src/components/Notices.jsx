import React, { useEffect, useState } from 'react'
import NoticesCard from './NoticesCard'
import NoticesSearch from './NoticesSearch'

export const Notices = () => {

  const [notices, setNotices] = useState([])
  const [error, setError] = useState([])

  const API_KEY = "pub_37454d5426d0dcf63af7cc56e952bc7cce3b6"


useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=pizza&language=es`)
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
}, [])



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
