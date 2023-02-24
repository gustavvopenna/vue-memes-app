import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMemes as getMemesService, searchMemes as searchMemesService } from '@/services/memeApi';

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export const useMemesStore = defineStore('memes', () => {
  const memes = ref<Meme[]>([]);

  const fetchMemes = async () => {
    const { data } = await getMemesService()
    memes.value = data.memes;
  };

  const searchMemes = async (query: string) => {
    const { data } = await searchMemesService(query);
    memes.value = data.memes;
  }

  return {
    memes,
    fetchMemes,
    searchMemes
  }
});
