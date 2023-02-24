import { computed, onMounted } from "vue";

import { useGifsStore } from "@/stores/gifs";

export function useGifs () {
  const giphyStore = useGifsStore();
  const gifs = computed(() => giphyStore.gifs);

  onMounted(() => {
    if(gifs.value.length === 0) {
      giphyStore.fetchTranding()
    }
  });

  return {
    gifs
  }
}