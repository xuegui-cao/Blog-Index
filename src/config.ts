/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我的项目",
    sites: [
      {
        title: "图片类型检测",
        description: "用于身份证、营业执照、银行卡图片分类",
        url: "https://xue-gui.cn/casp/image",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "NPS",
        description: "NPS管理台",
        url: "https://xue-gui.cn/nps",
        icon: "",
      },
    ],
  },
  {
    title: "内网访问",
  },
  {
    title: "敬请期待",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "学贵",
        description: "还没搞好",
        url: "https://",
        icon: "/favicon.ico",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "学贵大人的博客",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://xue-gui.cn",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "/favicon.ico",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/xuegui-cao",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://t.alcy.cc/moez",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "鲁ICP备2024092662号-1",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "Welcome, my friend!",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "学贵主页",
    keywords: "null",
    description: "null",
  },
};

export default GLOBAL_CONFIG;
