import React, { useState, useEffect } from "react"
import { hot } from "react-hot-loader/root"

const App = (props) => {
  const [gifs, setGifs] = useState([])

  const getGifs = async () => {
    const response = await fetch("/api/v1/gifs")
    const parsedImages = await response.json() 

    setGifs(parsedImages)
  }


  useEffect(() => {
    getGifs()
  }, [])

  const gifImages = gifs.map((gifLink) => {
    return <img key={gifLink} src={gifLink} height="200" width="200"></img>
  })
  
  return (
    <div>
      <h1>Fabulous Images</h1>
      {gifImages}
    </div>
  )
}

export default hot(App)
