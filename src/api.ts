// api.ts
import axios from 'axios'
import { GIPHY_API_KEY } from './config'
import Gif from './types/Gif'

const BASE_URL = 'https://api.giphy.com/v1/gifs'

export const getIronManGifs = async (): Promise<Gif[]> => {
  try {
    const { data: gifData } = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: 'Iron Man',
        limit: 9,
      },
    })

    // Map the API response to include the imageUrl property
    const ironManGifs: Gif[] = gifData.data.map((gif: Gif) => ({
      id: gif.id,
      title: gif.title,
      images: gif.images,
      imageUrl: gif.images.fixed_height.url,
    }))

    return ironManGifs
  } catch (error) {
    console.error('Error fetching Iron Man Gifs:', error)
    return []
  }
}

export const searchGifs = async (query: string): Promise<Gif[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: query,
        limit: 9,
      },
    })

    const searchResult: Gif[] = response.data.data.map((gif: Gif) => ({
      id: gif.id,
      title: gif.title,
      images: gif.images,
      imageUrl: gif.images.fixed_height.url,
    }))

    return searchResult
  } catch (error) {
    console.error('Error searching Gifs:', error)
    return []
  }
}
