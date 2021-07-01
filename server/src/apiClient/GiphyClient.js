import got from "got";

const giphyApiKey = "samprs7x2dZeRpIQQ8C0ARQta1nffdFC";
const baseUrl = "http://api.giphy.com/v1/gifs"

class GiphyClient {   
  static async getGiphs(query) {

    try {
      const url = `${baseUrl}/search?api_key=${giphyApiKey}&q=${query}`;
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;

      const gifsData = JSON.parse(responseBody)

      let image_urls = []
      gifsData.data.forEach((gif) => {
        image_urls.push(gif.images.preview_gif.url)
      })
      return image_urls;
    } catch (error) {
      return { error: error.message };
    }
  }

  // static async getTrendingGiphs(query) {
  //   try {
  //     const url = `${baseUrl}/search?api_key=${giphyApiKey}&q=${query}`;
  //     return apiResponse = await got(url);
  //   } catch (error) {
  //     return { error: error.message };
  //   }
  // }

  // static parseGiphsResponse(response){
  //   const responseBody = apiResponse.body;
  //   const gifsData = JSON.parse(responseBody)
  // }

  // static giphsByQuery(gifsData){
  //   let image_urls = []
  //   gifsData.data.forEach((gif) => {
  //     image_urls.push(gif.images.preview_gif.url)
  //   })
  //   return image_urls;
  // }
}


export default GiphyClient;