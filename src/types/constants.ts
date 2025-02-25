/**
 * 工具状态枚举
 */
export enum ToolStatus {
  /** 准备中 */
  PREPARING = 'preparing',
  /** 开发中 */
  DEVELOPING = 'developing',
  /** 已就绪 */
  READY = 'ready',
  /** 官方资源 */
  OFFICIAL = 'official',
  /** 第三方工具 */
  THIRD_PARTY = 'third-party'
}

/**
 * 工具状态显示文本
 */
export const ToolStatusText: Record<ToolStatus, string> = {
  [ToolStatus.PREPARING]: '准备中',
  [ToolStatus.DEVELOPING]: '开发中',
  [ToolStatus.READY]: '已就绪',
  [ToolStatus.OFFICIAL]: '官方资源',
  [ToolStatus.THIRD_PARTY]: '第三方工具'
}

/**
 * 工具分类
 */
export enum ToolCategory {
  /** 游戏工具 */
  GAME = '游戏工具',
  /** 开发工具 */
  DEVELOPMENT = '开发工具',
  /** 系统工具 */
  SYSTEM = '系统工具',
  /** 其他工具 */
  OTHER = '其他工具'
}