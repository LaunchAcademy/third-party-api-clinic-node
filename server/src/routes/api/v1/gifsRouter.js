import express from "express"
import got from "got"

import GiphyClient from "../../../apiClient/GiphyClient.js"

const gifsRouter = new express.Router()

const baseUrl = "http://api.giphy.com/v1/gifs/search"
const giphyApiKey = "samprs7x2dZeRpIQQ8C0ARQta1nffdFC"

gifsRouter.get("/", async (req, res) => {
  const query = "cat"
  // const url = `${baseUrl}?api_key=${giphyApiKey}&q=${query}`

  try {

    // const response = await got(url)
    // const gifBody = response.body
    // const parsedGifData = JSON.parse(gifBody)

    // const gifUrls = parsedGifData.data.map(gifObject => {
    //   return gifObject.images.original.url
    // })

    const gifUrls = await GiphyClient.getGiphs(query)

    return res.set({ "Content-Type": "application/json" })
      .status(200)
      .json(gifUrls)

  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default gifsRouter