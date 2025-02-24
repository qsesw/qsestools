/**
 * 工具配置的类型定义
 */
export interface Tool {
  /** 工具的唯一标识 */
  key: string;
  /** 工具的显示标题 */
  title: string;
  /** 工具的描述信息 */
  description: string;
  /** 工具的分类 */
  category: string;
  /** 工具的主题颜色 */
  color: string;
  /** 工具的图标组件名称 */
  icon: string | null;
  /** 工具的特性列表 */
  features?: ToolFeature[];
}

/**
 * 工具特性的类型定义
 */
export interface ToolFeature {
  /** 特性的唯一标识 */
  key: string;
  /** 特性的标题 */
  title: string;
  /** 特性的描述 */
  description: string;
  /** 特性的状态：
   * - preparing: 准备中
   * - developing: 开发中
   * - ready: 已就绪
   * - official: 官方资源
   * - third-party: 第三方工具
   */
  status: 'preparing' | 'developing' | 'ready' | 'official' | 'third-party';
  /** 特性的操作按钮文本 */
  actionText: string;
  /** 特性是否启用 */
  enabled: boolean;
  /** 特性的链接地址 */
  link?: string;
  /** 特性的按钮配置列表 */
  buttons?: Array<{
    /** 按钮文本 */
    text: string;
    /** 按钮链接 */
    link: string;
  }>;
}