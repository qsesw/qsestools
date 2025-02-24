<template>
  <div class="tool-page">
    <n-card>
      <template #header>
        <div class="tool-header">
          <n-text class="tool-title">{{ currentTool?.title }}</n-text>
          <n-tag :bordered="false" :color="{ color: currentTool?.color + '20', textColor: currentTool?.color }">
            {{ currentTool?.category }}
          </n-tag>
        </div>
      </template>
      <n-text depth="3">{{ currentTool?.description }}</n-text>
      <div class="tool-content">
        <n-grid :x-gap="24" :y-gap="24" cols="1 s:2" responsive="screen">
          <n-grid-item>
            <n-card title="游戏下载" class="feature-card">
              <template #header-extra>
                <n-tag type="success" size="small">官方资源</n-tag>
              </template>
              <n-space vertical>
                <n-text>获取第五人格游戏的官方应用。</n-text>
                <n-space wrap :size="12">
                  <download-button
                    type="primary"
                    url="https://adl.netease.com/d/g/id5/c/gbpc"
                    text="官服PC端"
                    filename="identity_v_pc.exe"
                  />
                  <download-button
                    type="success"
                    url="https://adl.netease.com/d/g/id5/c/gw?type=android"
                    text="官服Android端"
                    filename="identity_v_android.apk"
                  />
                  <download-button
                    type="info"
                    url="https://adl.netease.com/d/g/id5/c/gw?type=ios"
                    text="官服iOS端"
                    filename="identity_v_ios.ipa"
                  />
                  <download-button
                    type="warning"
                    url="https://app.mi.com/details?id=com.netease.dwrg.mi"
                    text="小米服Android端"
                    filename="identity_v_mi.apk"
                  />
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
          <n-grid-item>
            <n-card title="PC端账号登录工具" class="feature-card">
              <template #header-extra>
                <n-tag type="info" size="small">开发中</n-tag>
              </template>
              <n-space vertical>
                <n-text>PC端账号登录工具，帮助您快速登录游戏账号。</n-text>
                <n-button type="primary" @click="() => {}">
                  即将上线
                </n-button>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NCard, NText, NTag, NEmpty, NButton, NSpace, NGrid, NGridItem } from 'naive-ui'
import { getToolByKey } from '../config/tools'
import DownloadButton from '../components/DownloadButton.vue'

const route = useRoute()
const currentTool = computed(() => getToolByKey(route.params.type))
</script>

<style scoped>
.tool-page {
  max-width: 1200px;
  margin: 0 auto;
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.tool-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.tool-content {
  margin-top: 24px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}
</style>