<template>
  <div class="home">
    <n-grid :x-gap="24" :y-gap="24" cols="1 s:2 m:3 l:4" responsive="screen">
      <n-grid-item v-for="tool in tools" :key="tool.key">
        <n-card class="tool-card" hoverable>
          <template #cover>
            <div class="tool-icon" :style="{ background: tool.color }">
              <img v-if="tool.key === 'identity-v'" src="../assets/icons/dwrg144.webp" alt="第五人格" class="custom-icon" />
              <n-icon v-else :size="32">
                <component :is="tool.icon" />
              </n-icon>
            </div>
          </template>
          <template #header>
            <div class="tool-header">
              <n-text class="tool-title">{{ tool.title }}</n-text>
              <n-tag :bordered="false" :color="{ color: tool.color + '20', textColor: tool.color }">
                {{ tool.category }}
              </n-tag>
            </div>
          </template>
          <n-text depth="3">{{ tool.description }}</n-text>
          <template #footer>
            <n-space justify="end">
              <n-button
                secondary
                strong
                size="small"
                :color="tool.color"
                @click="navigateToTool(tool.key)"
              >
                立即使用
              </n-button>
            </n-space>
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  NGrid,
  NGridItem,
  NCard,
  NText,
  NTag,
  NButton,
  NSpace,
  NIcon
} from 'naive-ui'
import { tools } from '../config/tools'

const router = useRouter()
const navigateToTool = (key) => router.push(`/tool/${key}`)
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.tool-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  transition: all 0.4s cubic-bezier(0.3, 0, 0.2, 1);
  margin: 8px;
  padding: 0;
  border-radius: 12px;
  overflow: visible;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: -5 12px 24px rgba(0, 0, 0, 0.06);
  margin: 8px;
}

.tool-icon {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  opacity: 0.9;
}

.custom-icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.tool-title {
  font-size: 1.1rem;
  font-weight: 600;
}
</style>