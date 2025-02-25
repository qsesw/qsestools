import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { tools } from '@/config/tools'
import type { Tool, ToolFeature } from '@/types/tool'

export const useToolStore = defineStore('tool', () => {
  const allTools = ref<Tool[]>(tools)

  const getToolByKey = computed(() => {
    return (key: string) => allTools.value.find(tool => tool.key === key)
  })

  const getFeatureByKey = computed(() => {
    return (toolKey: string, featureKey: string) => {
      const tool = getToolByKey.value(toolKey)
      return tool?.features?.find(feature => feature.key === featureKey)
    }
  })

  const getToolsByCategory = computed(() => {
    return (category: string) => allTools.value.filter(tool => tool.category === category)
  })

  const categories = computed(() => {
    return [...new Set(allTools.value.map(tool => tool.category))]
  })

  const updateFeatureStatus = (toolKey: string, featureKey: string, enabled: boolean) => {
    const tool = getToolByKey.value(toolKey)
    if (tool?.features) {
      const feature = tool.features.find(f => f.key === featureKey)
      if (feature) {
        feature.enabled = enabled
      }
    }
  }

  return {
    allTools,
    getToolByKey,
    getFeatureByKey,
    getToolsByCategory,
    categories,
    updateFeatureStatus
  }
})