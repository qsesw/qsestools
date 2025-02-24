<template>
  <div class="tool-page">
    <n-button class="back-button" quaternary circle @click="router.back()">
      <template #icon>
        <n-icon><arrow-left /></n-icon>
      </template>
    </n-button>
    <n-card v-if="currentTool">
      <template #header>
        <div class="tool-header">
          <n-text class="tool-title">{{ currentTool.title }}</n-text>
          <n-tag :bordered="false" :color="{ color: currentTool.color + '20', textColor: currentTool.color }">
            {{ currentTool.category }}
          </n-tag>
        </div>
      </template>
      <n-text depth="3">{{ currentTool.description }}</n-text>
      <div class="tool-content" v-if="currentTool.features?.length">
        <n-grid :x-gap="24" :y-gap="24" cols="1" responsive="screen">
          <n-grid-item v-for="feature in currentTool.features" :key="feature.key">
            <n-card :title="feature.title" class="feature-card">
              <template #header-extra>
                <n-tag type="info" size="small">
                  {{ {
                    'preparing': '准备中',
                    'developing': '开发中',
                    'ready': '已就绪',
                    'official': '官方资源',
                    'third-party': '第三方工具'
                  }[feature.status] }}
                </n-tag>
              </template>
              <n-space vertical>
                <n-text>{{ feature.description }}</n-text>
                <n-space v-if="feature.buttons">
                  <n-button
                    v-for="button in feature.buttons"
                    :key="button.text"
                    type="primary"
                    :color="button.color"
                    :disabled="!feature.enabled || feature.status === 'developing'"
                    @click="() => {
                      if (button.link) {
                        window?.open(button.link, '_blank', 'noopener,noreferrer')
                      }
                    }"
                  >
                    {{ button.text }}
                  </n-button>
                </n-space>
                <n-button
                  v-else
                  type="primary"
                  :disabled="!feature.enabled || feature.status === 'developing'"
                  @click="() => feature.link && window.open(feature.link, '_blank')"
                >
                  {{ feature.actionText }}
                </n-button>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
    <n-empty v-else description="未找到工具" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NCard, NText, NTag, NEmpty, NButton, NSpace, NIcon, NGrid, NGridItem } from 'naive-ui'
import { ArrowLeft24Regular as ArrowLeft } from '@vicons/fluent'
import { getToolByKey } from '../config/tools'

const route = useRoute()
const router = useRouter()
const currentTool = computed(() => getToolByKey(route.params.type))
</script>

<style scoped>
.tool-page {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-left: 64px;
}

.back-button {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  font-size: 24px;
  z-index: 100;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #f5f5f5;
  transform: translateY(-50%) scale(1.05);
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tool-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.tool-content {
  margin-top: 24px;
}

.feature-card {
  height: 100%;
}
</style>