<template>
  <n-button :type="type" @click="handleDownload">
    <template #icon>
      <n-icon>
        <arrow-download24-regular />
      </n-icon>
    </template>
    {{ text }}
  </n-button>
  <n-modal v-model:show="showProgress" preset="card" title="下载进度" :closable="false">
    <n-progress type="line" :percentage="progress" :processing="progress < 100" />
    <n-text>{{ progressText }}</n-text>
  </n-modal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { NButton, NIcon, NModal, NProgress, NText } from 'naive-ui'
import { ArrowDownload24Regular } from '@vicons/fluent'
import { fetch, ResponseType } from '@tauri-apps/api/http'
import { writeBinaryFile } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'primary'
  },
  filename: {
    type: String,
    required: true
  }
})

const showProgress = ref(false)
const progress = ref(0)
const progressText = computed(() => `已下载 ${progress.value}%`)

const handleDownload = async () => {
  try {
    showProgress.value = true
    progress.value = 0

    // 获取下载目录路径
    const downloadPath = await downloadDir()
    const filePath = `${downloadPath}/${props.filename}`

    // 下载文件
    const response = await fetch(props.url, {
      method: 'GET',
      responseType: ResponseType.Binary
    })

    // 将文件写入本地
    await writeBinaryFile({
      path: filePath,
      contents: response.data
    })

    progress.value = 100
    setTimeout(() => {
      showProgress.value = false
    }, 1000)
  } catch (error) {
    console.error('下载失败:', error)
  }
}
</script>