import { ref } from 'vue';
import { defineStore } from 'pinia'
import type { GifsResult } from '@giphy/js-fetch-api'

import { giphyApi } from '@/services/giphyApi';

export const useGifsStore = defineStore('gifs', () => {
  const gifs = ref<GifsResult['data']>([]);
  const favorites = ref<Set<string>>(new Set());

  const fetchTrending = async () => {
    const response = await giphyApi.trending({ limit: 28, rating: 'g' })
    gifs.value = response.data;
  }

  const fetchSearch = async (query: string) => {
    const response = await giphyApi.search(query, { limit: 28, rating: 'g' })
    gifs.value = response.data;
  }

  const addToFavorites = (gifId: string) => {
    favorites.value.add(gifId);
  }

  const removeFromFavorites = (gifId: string) => {
    favorites.value.delete(gifId);
  }

  const isFavorite = (gifId: string) => {
    return favorites.value.has(gifId);
  }

  return {
    gifs,
    favorites,
    fetchTrending,
    fetchSearch,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }
});
