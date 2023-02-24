import { computed, onMounted } from "vue";

import { useGifsStore } from "@/stores/gifs";

export function useGifs () {
  const giphyStore = useGifsStore();

  const gifs = computed(() => giphyStore.gifs);
  const favorites = computed(() => giphyStore.favorites);
  const addToFavorites = giphyStore.addToFavorites;
  const removeFromFavorites = giphyStore.removeFromFavorites;
  const isFavorite = giphyStore.isFavorite;

  const handleFavorite = (gifId: string) => {
    isFavorite(gifId)
      ? removeFromFavorites(gifId)
      : addToFavorites(gifId);
  }

  onMounted(() => {
    if(gifs.value.length === 0) {
      giphyStore.fetchTrending()
    }
  });

  return {
    gifs,
    favorites,
    addToFavorites,
    removeFromFavorites,
    handleFavorite,
    isFavorite
  }
}