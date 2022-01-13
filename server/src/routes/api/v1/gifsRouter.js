import express from "express"
import got from "got"

import GiphyClient from "../../../apiClient/GiphyClient.js"

const gifsRouter = new express.Router()

const baseUrl = "http://api.giphy.com/v1/gifs"
const giphyApiKey = "samprs7x2dZeRpIQQ8C0ARQta1nffdFC"

gifsRouter.get("/", async (req, res) => {
  try {
    const query = "cats"

    const url = `${baseUrl}/search?api_key=${giphyApiKey}&q=${query}`
    const apiResponse = await got(url)

    const responseBody = apiResponse.body

    const gifsData = JSON.parse(responseBody)

    const imageUrls = gifsData.data.map((gif) => {
      return gif.images.preview_gif.url
    })

    // debugger
    console.log(imageUrls)

    // const gifsResponse = await GiphyClient.getGiphs("steven-universe")

    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(imageUrls)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default gifsRouter
