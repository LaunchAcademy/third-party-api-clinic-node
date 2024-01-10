import express from "express"
import got from "got"

// import dotenv from "dotenv"
// dotenv.config()

import GiphyClient from "../../../apiClient/GiphyClient.js"

const gifsRouter = new express.Router()

gifsRouter.get("/", async (req, res) => {
  // const baseUrl = "http://api.giphy.com/v1/gifs/search"
  // const giphyApiKey = process.env.GIPHY_API_KEY
  const query = "cat"

  try {
    // const queryRequestURL = `${baseUrl}?api_key=${giphyApiKey}&q=${query}&limit=5`
    // const response = await got(queryRequestURL)
    // const parsedData = JSON.parse(response.body)

    // const specificData = parsedData.data[0].images.original.url
    // console.log(specificData)

    // const gifUrls = parsedData.data.map(imageObject => {
    //   // console.log(imageObject.images)
    //   return imageObject.images.original.url
    // })
    // console.log(gifUrls)
    const gifUrls = await GiphyClient.getGiphs(query)

    return res.status(200).json(gifUrls)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default gifsRouter