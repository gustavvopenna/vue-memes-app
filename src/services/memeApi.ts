import axios from 'axios';

export const memeApi = axios.create({
  baseURL: 'https://api.imgflip.com',  
});

export const getMemes = async () => {
  const { data } = await memeApi.get('/get_memes');
  return data;
}

export const searchMemes = async (query: string) => {
  const { data } = await memeApi.post('/search_memes', { query });
  return data;
}