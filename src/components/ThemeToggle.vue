<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <SwitchRoot :checked="isDark" @update:checked="toggleTheme" class="relative w-14 h-8 rounded-full transition-colors duration-300 flex items-center justify-between px-1
                 bg-zinc-300 ">
          <div class="text-yellow-500 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class=" dark:text-white" width="18" height="18"
              viewBox="0 0 512 512">
              <path
                d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
            </svg>
          </div>
          <div class="text-zinc-800 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
              <path
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          </div>


          <SwitchThumb class="absolute left-1 top-1 w-6 h-6 rounded-full border border-zinc-300 dark:border-zinc-600 shadow-lg
         transform transition-transform duration-300"
            :class="isDark ? 'translate-x-6 bg-black' : 'translate-x-0 bg-zinc-100'" />
        </SwitchRoot>
      </TooltipTrigger>
      <TooltipContent side="bottom" class="bg-black text-white px-3 py-1 rounded text-sm">
        Alternar tema
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {
  SwitchRoot,
  SwitchThumb,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent
} from 'radix-vue'

const isDark = ref(false)

onMounted(() => {
  var theme = localStorage.getItem("theme");
  if (theme != null) {
    isDark.value = theme == 'dark';
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
