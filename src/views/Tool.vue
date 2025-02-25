<template>
  <div class="tool-page">
    <n-button class="back-button" @click="router.back()">
      <n-icon>
        <arrow-left />
      </n-icon>
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
      <n-text depth="3" class="tool-description">{{ currentTool.description }}</n-text>
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
                <n-text class="feature-description">{{ feature.description }}</n-text>
                <n-space v-if="feature.buttons">
                  <n-button
                    v-for="button in feature.buttons"
                    :key="button.text"
                    type="primary"
                    :color="button.color"
                    :disabled="!feature.enabled || !button.enabled || feature.status === 'developing'"
                    @click="() => button.link && button.enabled && open(button.link)"
                  >
                    {{ button.text }}
                  </n-button>
                </n-space>
                <n-button
                  v-else
                  type="primary"
                  :disabled="!feature.enabled || feature.status === 'developing'"
                  @click="() => feature.link && feature.enabled && open(feature.link)"
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

const open = (url) => window.open(url, '_blank')
</script>

<style scoped>
.tool-page {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-left: 48px;
}

.n-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(229, 229, 229, 0.5);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.feature-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tool-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.tool-content {
  margin-top: 24px;
}

.back-button {
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(229, 229, 229, 0.5);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.tool-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.8);
  margin: 12px 0;
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 12px;
}

:deep(.n-tag) {
  padding: 2px 12px;
  font-size: 0.9rem;
  border-radius: 8px;
}

:deep(.n-button) {
  border-radius: 10px;
}
</style>