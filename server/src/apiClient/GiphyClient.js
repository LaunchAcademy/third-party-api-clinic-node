import got from "got"
import dotenv from "dotenv"

dotenv.config()

const giphyApiKey = process.env.GIPHY_API_KEY
const baseUrl = "http://api.giphy.com/v1/gifs"

class GiphyClient {
  static async getGiphs(query) {
    try {
      const url = `${baseUrl}/search?api_key=${giphyApiKey}&q=${query}`
      const apiResponse = await got(url)
      
      const responseBody = apiResponse.body

      const gifsData = JSON.parse(responseBody)

      const imageUrls = gifsData.data.map((gif) => {
        return gif.images.original.url
      })
      return imageUrls
    } catch (error) {
      return { error: error.message }
    }
  }

  static async getTrendingGiphs(query) {
    try {
      const url = `${baseUrl}/search?api_key=${giphyApiKey}&q=${query}`;
      return apiResponse = await got(url);
    } catch (error) {
      return { error: error.message };
    }
  }

  static parseGiphsResponse(response){
    const responseBody = apiResponse.body;
    const gifsData = JSON.parse(responseBody)
  }

  static giphsByQuery(gifsData) {
    const imageUrls = gifsData.data.map((gif) => {
      return gif.images.preview_gif.url
    })
    return imageUrls
  }
}

export default GiphyClient
