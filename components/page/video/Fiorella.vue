<script setup lang="ts">
const video = ref()
const { onLoaded } = useScriptVimeoPlayer()
const isPlaying = ref(false) // Estado para saber si el video está reproduciéndose o en pausa

let player: any

// Función para manejar el click del botón
function togglePlayPause() {
  if (isPlaying.value) {
    player.pause()
  } else {
    player.play()
  }
}

onMounted(()=>{
  onLoaded(({ Vimeo }) => {
    player = new Vimeo.Player(video.value, {
      id: 1022937319,
      controls: false,
      responsive: true,
      loop: true,
    })

    // Escuchar eventos de play y pause para actualizar el estado
    player.on('play', () => {
      isPlaying.value = true
    })

    player.on('pause', () => {
      isPlaying.value = false
    })
  })

})
</script>

<template>
  <div class="relative z-20">
    <div ref="video" />
    <div class="absolute bottom-0 inset-x-0 p-2 flex justify-between items-center">
      <div>
        <!-- Botón dinámico que cambia entre Play y Pause -->
        <button @click="togglePlayPause" class="flex gap-2 text-white items-center">
          <template v-if="!isPlaying">
            <!-- Icono de Play -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>

          </template>
          <template v-else>
            <!-- Icono de Pause -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 4.5v15m10.5-15v15" />
            </svg>

          </template>
        </button>
      </div>
      <div class="float-right text-white font-parisienne">Fiorella</div>
    </div>
  </div>
</template>