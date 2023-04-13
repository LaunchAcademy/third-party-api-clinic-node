import express from "express"
import got from "got"

import dotenv from "dotenv"
dotenv.config()

import GiphyClient from "../../../apiClient/GiphyClient.js"

const gifsRouter = new express.Router()

// const baseUrl = "http://api.giphy.com/v1/gifs/search"
// const giphyApiKey = process.env.GIPHY_API_KEY

gifsRouter.get("/", async (req, res) => {
  const query = "bunnies"

  try {
  //   const response = await got(`${baseUrl}?api_key=${giphyApiKey}&q=${query}`)
  //   const parsedData = JSON.parse(response.body)
  //   const specificData = parsedData.data[0].images.original.url
    
  //   const gifUrls = parsedData.data.map(imageObject => {
  //     return imageObject.images.original.url
  //   })
    
    const gifUrls = await GiphyClient.getGiphs(query)

    return res.set({ "Content-Type": "application/json" })
      .status(200)
      .json(gifUrls)

  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default gifsRouter