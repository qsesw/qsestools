export const tools = [
  {
    key: 'identity-v',
    title: '第五人格「国服」',
    description: '第五人格「国服」游戏相关工具和资源',
    category: '游戏工具',
    color: '#87a2b4',
    icon: null
  }
]

export const getToolByKey = (key) => {
  return tools.find(tool => tool.key === key)
}