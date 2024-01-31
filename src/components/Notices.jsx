import React, { useEffect, useState } from 'react'
import NoticesSearch from './NoticesSearch'

export const Notices = () => {

  const [notices, setNotices] = useState([])
  const [error, setError] = useState([])

  const API_KEY = "pub_37454d5426d0dcf63af7cc56e952bc7cce3b6"


useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=pizza`)
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

console.log(notices)
console.log(error)

  return (
    <>
    <header>
      <NoticesSearch/>
    </header>
    <main>
      {notices.map((notice) => {
        return(
          <div key={notice.id} className="card">
            {notice.title}
          </div>
        )
      })}
    </main>
    </>
  )
}
