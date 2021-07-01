import React, { useState, useEffect } from 'react'
import api from '../api'

function Games() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/search/channels?query=a_seagull')

      console.log(result.data)
    }

    fetchData()
  })

  return (
    <div>
      <h1>Most Popular Games</h1>
    </div>
  )
}

export default Games
