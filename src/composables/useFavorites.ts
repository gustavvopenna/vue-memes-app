import { onMounted, ref, watch } from 'vue';

import { useGifs } from '@/composables/useGifs';
import { giphyApi } from '@/services/giphyApi';
import type { GifsResult } from '@giphy/js-fetch-api';

export function useFavorites () {
  const { favorites: favoritesIds } = useGifs()
  const favorites = ref<GifsResult['data']>([])

  watch(favoritesIds.value, (newFavorites) => {
    favorites.value = favorites.value.filter((gif) => newFavorites.has(gif.id))
  })
  
  onMounted(() => {
    favoritesIds.value.forEach(async (id) => {
      if(id) {
        const response = await giphyApi.gif(id);
        favorites.value.push(response.data)
      }
    })
  })

  return {
    favorites
  }
}