import { useMemesStore } from "@/stores/memes";
import { computed, onMounted } from "vue";

export function useMemes () {
  const memesStore = useMemesStore();
  const memes = computed(() => memesStore.memes);

  onMounted(() => {
    if(memes.value.length === 0) {
      memesStore.fetchMemes()
    }
  });

  return {
    memes
  }
}