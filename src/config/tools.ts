import type { Tool } from '../types/tool.d'

export const tools: Tool[] = [
  {
    key: 'identity-v',
    title: '第五人格「国服」',
    description: '第五人格「国服」游戏相关工具和资源',
    category: '游戏工具',
    color: '#87a2b4',
    icon: null,
    features: [
      {
        key: 'idvgamed',
        title: '游戏下载',
        description: '下载游戏官方及渠道服应用安装包。',
        status: 'official',
        actionText: '立即下载',
        enabled: true,
        buttons: [
          {
            text: '官方PC端',
            link: 'https://adl.netease.com/d/g/id5/c/gbpc',
            color: '#18a058',
            enabled: true
          },
          {
            text: '官方Android端',
            link: 'https://adl.netease.com/d/g/id5/c/gw?type=android',
            color: '#18a058',
            enabled: true
          },
          {
            text: '官方IOS端',
            link: 'https://adl.netease.com/d/g/id5/c/gw?type=ios',
            color: '#18a058',
            enabled: true
          },
          {
            text: 'Xiaomi渠道服',
            link: 'https://app.mi.com/details?id=com.netease.dwrg.mi',
            color: '#2080f0',
            enabled: true
          }
        ]
      },
      {
        key: 'pc-login',
        title: 'PC端账号登录工具',
        description: 'PC端账号登录工具，帮助您快速登录游戏账号。',
        status: 'third-party',
        actionText: '资源准备中',
        enabled: false,
        buttons: [
          {
            text: '资源准备中',
            link: 'https://adl.netease.com/d/g/id5/c/gbpc',
            color: '#f0a020',
            enabled: false
          }
        ]
      }
    ]
  }
]

/**
 * 根据工具的key获取工具配置信息
 * @param key - 工具的唯一标识
 * @returns 工具配置信息
 */
export const getToolByKey = (key: string): Tool | undefined => {
  return tools.find(tool => tool.key === key)
}