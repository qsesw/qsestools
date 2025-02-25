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
        description: 'PC端账号登录工具，帮助您快速登录游戏账号，绕过账号登录限制。',
        status: 'third-party',
        enabled: true,
        buttons: [
          {
            text: '说明及使用教程',
            link: 'https://qsesvick.top/identityv-login/',
            color: '#18a058',
            enabled: true
          },
          {
            text: '工具下载',
            link: 'https://alist.20237737.xyz/Comprehensive/Windows%E8%B5%84%E6%BA%90/%E6%B8%B8%E6%88%8F/%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC/%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B4%A6%E5%8F%B7%E7%99%BB%E5%BD%95%E5%B7%A5%E5%85%B7',
            color: '#2080f0',
            enabled: true
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