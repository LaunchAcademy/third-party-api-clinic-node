import express from "express"
import got from "got";

import GiphyClient from "../../../apiClient/GiphyClient.js"

const gifsRouter = new express.Router()

const giphyApiKey = "samprs7x2dZeRpIQQ8C0ARQta1nffdFC";

gifsRouter.get("/", async (req, res) => {

  try {
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
