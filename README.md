# AWS SAP-C02 考试备考中心

一个面向 **AWS Certified Solutions Architect – Professional（SAP-C02）** 的中文静态备考站点。全部内容以纯静态 HTML 手工编写，按 12 个技术域组织，共 **79 篇服务正文 + 1 篇综合专题**。每篇包含考点讲解、对比表、场景题解析与关键词速查，多数页面另配可勾选速记卡与快速自测。

站点无需后端、无需构建框架，克隆后用任意静态服务器即可打开；发布时由 CI 调用 [Pagefind](https://pagefind.app/) 生成全站中文全文搜索索引。

---

## 目录

- [AWS SAP-C02 考试备考中心](#aws-sap-c02-考试备考中心)
  - [目录](#目录)
  - [核心特性](#核心特性)
  - [快速开始](#快速开始)
    - [直接浏览](#直接浏览)
    - [启用本地搜索](#启用本地搜索)
  - [目录结构](#目录结构)
  - [内容清单](#内容清单)
  - [页面结构与写作规范](#页面结构与写作规范)
    - [正文页固定骨架](#正文页固定骨架)
    - [新增一篇正文的完成标准](#新增一篇正文的完成标准)
    - [推荐复用骨架](#推荐复用骨架)
    - [搜索脚本注入](#搜索脚本注入)
  - [全站搜索实现](#全站搜索实现)
  - [部署方式](#部署方式)
    - [GitHub Pages（推荐）](#github-pages推荐)
    - [GitLab Pages](#gitlab-pages)
    - [部署注意事项](#部署注意事项)
  - [质量检查](#质量检查)
    - [断链检查](#断链检查)
    - [内容抽查建议](#内容抽查建议)
  - [数据说明](#数据说明)
    - [`input/exam.csv`](#inputexamcsv)
  - [项目文档与状态](#项目文档与状态)
  - [免责声明](#免责声明)

---

## 核心特性

| 特性 | 说明 |
|---|---|
| 纯静态站点 | 无框架、无打包、无运行时依赖，每篇正文自包含 HTML + CSS + 原生 JS |
| 12 大技术域 | 网络、计算、存储、数据库、安全、管理、应用集成、分析、迁移、DevOps、ML/AI、混合云与边缘 |
| 考试导向编排 | 每篇按“基础 → 关键机制 → 对比表 → 常见陷阱 → 场景题 → 速记卡 → 自测”组织 |
| 场景题解析 | 题干 + 分析思路 + 正确答案 + 错误选项排除，贴近 SAP-C02 题干风格 |
| 速记卡 | 7–20 条可勾选卡片（多数为 16–18 条），勾选后实时更新进度条，支持一键重置 |
| 快速自测 | 题目与答案分区呈现，便于自检 |
| 全站搜索 | Pagefind 静态索引 + 悬浮按钮 + 模态框，支持 `Ctrl/Cmd + K`、`Esc` 关闭 |
| 响应式布局 | 移动端可读，宽表格横向滚动，桌面端左右分栏 + 粘性目录 |
| 双平台部署 | GitHub Actions → GitHub Pages；GitLab CI → GitLab Pages |
| 进度可视化 | 根页与各分类入口页的卡片显示“已完成 N / N”，与正文实际数量同步 |

---

## 快速开始

### 直接浏览

1. 克隆仓库：

   ```bash
   git clone https://gitlab.com/binglingshuang1/aws-sap-exam.git
   cd aws-sap-exam
   ```

2. 用任意静态服务器启动（不要直接双击 `file://` 打开，搜索与相对路径在部分浏览器下会受限）：

   ```bash
   # Python 3
   python -m http.server 8080

   # 或 Node.js
   npx -y serve -l 8080 .
   ```

3. 浏览器打开 `http://localhost:8080/`。

### 启用本地搜索

`pagefind/` 是构建产物并在 `.gitignore` 中忽略，因此新克隆的仓库默认没有搜索索引（仓库副本中可能保留了一份历史索引）。需要在仓库根目录重新生成：

```bash
npx -y pagefind --site . --exclude-selectors "nav,.toolbar"
```

生成后刷新页面，右下角出现“搜索 / Ctrl K”悬浮按钮即可使用。

> 本地直接以仓库根目录为 site 时会连带索引 `input/`；如需与线上行为完全一致，请参考 [部署方式](#部署方式) 中“先拷贝到 `public/` 再索引”的做法。

---

## 目录结构

```text
aws-sap-exam/
├── index.html                     # 根导航页：12 个分类卡片 + 综合专题入口
├── architecture-patterns.html     # 综合专题：架构设计模式
├── search.js                      # Pagefind 搜索入口（悬浮按钮 + 模态框）
├── PROGRESS.md                    # 进度快照、续写规范、缺口清单
├── Agent.md                       # 协作约定：完成一个页面后同步更新卡片进度
│
├── networking/                    # 网络与内容分发（9 篇）
├── compute/                       # 计算（10 篇）
├── storage/                       # 存储（7 篇）
├── database/                      # 数据库（6 篇）
├── security/                      # 安全、身份与合规（11 篇）
├── management/                    # 管理与治理（10 篇）
├── application-integration/       # 应用集成（7 篇）
├── analytics/                     # 分析（7 篇）
├── migration/                     # 迁移与传输（4 篇）
├── devops/                        # DevOps 与开发者工具（4 篇）
├── ml/                            # 机器学习与 AI（2 篇）
├── hybrid-edge/                   # 混合云与边缘（1 篇）
│
├── input/exam.csv                 # 原始题库 CSV（529 道，含题干/选项/答案/解析）
├── pagefind/                      # 搜索索引与 UI 运行时（构建产物，git 忽略）
├── .github/workflows/pages.yml    # GitHub Pages 部署流水线
└── .gitlab-ci.yml                 # GitLab Pages 部署流水线
```

每个分类目录的标准结构：

```text
<category>/
├── index.html          # 分类入口页：服务卡片 + 完成状态
└── <service>.html      # 服务正文，小写 kebab-case 命名
```

---

## 内容清单

> 统计口径：去重后的唯一正文。跨分类复用的页面只计入主分类。当前完成度 **80 / 80（100%）**，无缺失正文。

| 分类 | 入口 | 篇数 | 正文 |
|---|---|---:|---|
| 网络与内容分发 | [networking/index.html](networking/index.html) | 9 | `vpc`、`cloudfront`、`direct-connect`、`vpn`、`transit-gateway`、`route53`、`elb`、`privatelink`、`global-accelerator` |
| 计算 | [compute/index.html](compute/index.html) | 10 | `ec2`、`auto-scaling`、`lambda`、`fargate-ecs`、`eks`、`app-runner`、`elastic-beanstalk`、`batch`、`outposts-wavelength`、`workspaces` |
| 存储 | [storage/index.html](storage/index.html) | 7 | `s3`、`ebs`、`efs`、`storage-gateway`、`backup`、`fsx`、`snow-family` |
| 数据库 | [database/index.html](database/index.html) | 6 | `rds-aurora`、`dynamodb`、`elasticache`、`redshift`、`documentdb-neptune`、`dms-sct` |
| 安全、身份与合规 | [security/index.html](security/index.html) | 12 | `iam`、`kms-cloudhsm`、`organizations-scp`、`iam-identity-center`、`secrets-manager`、`waf-shield-firewall`、`firewall-manager`、`ram`、`cognito`、`guardduty-detective`、`inspector-macie`、`certificate-manager` |
| 管理与治理 | [management/index.html](management/index.html) | 10 | `cloudformation`、`cloudwatch`、`cloudtrail`、`config`、`systems-manager`、`cost-management`、`control-tower`、`service-catalog`、`trusted-advisor`、`well-architected-tool` |
| 应用集成 | [application-integration/index.html](application-integration/index.html) | 7 | `sqs-sns`、`ses`、`eventbridge`、`step-functions`、`api-gateway`、`appsync`、`mq` |
| 分析 | [analytics/index.html](analytics/index.html) | 7 | `glue`、`athena`、`kinesis`、`opensearch`、`emr`、`msk`、`quicksight-lake-formation` |
| 迁移与传输 | [migration/index.html](migration/index.html) | 4 | `migration-strategy`、`application-migration`、`datasync-transfer`、`migration-hub` |
| DevOps | [devops/index.html](devops/index.html) | 4 | `codepipeline`、`codedeploy`、`codecommit-build`、`xray` |
| 机器学习与 AI | [ml/index.html](ml/index.html) | 2 | `ml-ai`、`sagemaker` |
| 混合云与边缘 | [hybrid-edge/index.html](hybrid-edge/index.html) | 1 | `iot`；Outposts / Local Zones / Wavelength 共用 `compute/outposts-wavelength.html` |
| 综合专题 | [architecture-patterns.html](architecture-patterns.html) | 1 | Well-Architected、DR、HA、多账号、成本优化 |
| **合计** |  | **80** | 79 篇服务正文 + 1 篇综合专题 |

跨模块入口：`analytics/index.html` 与 `migration/index.html` 的 Redshift、DMS/SCT 卡片指回 `database/` 下的正文，避免重复编写。

---

## 页面结构与写作规范

### 正文页固定骨架

每篇服务正文以同一套结构为主，便于跨页面跳转与维护（少量早期页面缺少“官方资料”或“快速自测”区块）：

1. `<head>`：`description`、`AWS SAP-C02｜<服务名> 考试速查手册` 标题、内联 `<style>`
2. 顶部标题区：英文名、中文定位、考试频率、核心关键词 Pill
3. 返回分类页链接
4. 左侧粘性目录（`nav#mainNav`）与正文 `section[id]` 一一对应
5. 8–14 个主题章节：核心概念、关键机制、配置要点、对比表、常见陷阱
6. 场景题解析：题干 / 分析思路 / 正确答案 / 错误选项排除
7. “关键词 → 功能/答案”速查表
8. 7–20 条可勾选速记卡 + 进度条
9. 快速自测（题目与答案分离）
10. 官方资料链接 + “非官方题库”免责声明
11. 底部注入 `search.js`

### 新增一篇正文的完成标准

以 `PROGRESS.md` 第 5 节为准，核心要求：

- 文件位于对应分类目录，文件名小写 kebab-case，并与分类入口页 `href` 完全一致
- 自包含 HTML，不依赖外部 CDN、字体或脚本
- 含 `<meta name="description">` 与规范 `<title>`
- 粘性目录与章节 `id` 完全对应
- 至少 4 道场景题（当前新页面统一为 6 道），四段式解析完整
- 12–20 张速记卡与页面内进度条（部分小型主题页实际为 7–8 张）
- 官方文档链接、免责声明、返回分类页链接
- 把分类入口页的卡片状态由“待补充”改为“已完成”（恢复 `href`、移除 `card-pending`）
- 同步更新根页与分类页的统计数字
- 运行[断链检查](#断链检查)，确认无新增错误

### 推荐复用骨架

新页面优先复制 [networking/vpc.html](networking/vpc.html) 或 [compute/ec2.html](compute/ec2.html) 的样式、目录脚本与速记卡脚本，再替换正文。

### 搜索脚本注入

根目录页面使用：

```html
<script>
window.__PF_ROOT_REL="./";
(function(){var s=document.createElement("script");s.src=window.__PF_ROOT_REL+"search.js";s.defer=!0;document.head.appendChild(s)})();
</script>
```

分类目录页面把 `__PF_ROOT_REL` 改为 `"../"`。该值由**文件静态深度**决定，而不是运行时路径，因此同时兼容根部署与子路径部署（如 GitHub Pages 项目页 `/<repo>/`）。

---

## 全站搜索实现

搜索由三部分组成：

| 组件 | 作用 |
|---|---|
| `search.js` | 运行时入口：计算 `pagefind/` 相对与绝对路径、注入悬浮按钮与模态框、绑定 `Ctrl/Cmd + K` 与 `Esc` |
| `pagefind/` | CI 生成的静态索引与 `pagefind-ui.js` / `pagefind-ui.css`；`wasm` 在浏览器内完成检索，无后端 |
| `__PF_ROOT_REL` | 每个 HTML 在注入 `search.js` 时声明的站点根相对前缀 |

关键处理逻辑：

- `PF_BASE = ROOT_REL + "pagefind/"` 用于加载资源
- `PF_ABS` 从 `location.href` 解析，供 `bundlePath` 与 `basePath` 使用
- `SITE_BASE` 从 `pagefind-ui.js` 的绝对 URL 反推站点根，用于给索引结果补子路径前缀
- `processResult` 对主结果与 `sub_results` 的 URL 统一调用 `rewriteUrl`

索引生成时通过 `--exclude-selectors "nav,.toolbar"` 排除目录与工具栏文本，避免导航词污染搜索结果。

---

## 部署方式

### GitHub Pages（推荐）

工作流：[.github/workflows/pages.yml](.github/workflows/pages.yml)

- 触发条件：推送到 `main` 分支，或手动 `workflow_dispatch`
- 构建步骤：
  1. `actions/checkout` + Node 20
  2. 复制全站到 `public/`
  3. 移除 `README.md`、`PROGRESS.md`、`Agent.md`、`.gitlab-ci.yml`、`.gitignore`、`.github/`
  4. 临时移出 `public/input`，执行 `npx -y pagefind --site public --exclude-selectors "nav,.toolbar"`，再移回（目录仍可访问，但不进入索引）
  5. 写入 `.nojekyll`，避免下划线资源被 Jekyll 忽略
  6. 上传 artifact 并部署到 Pages

启用方式：仓库 **Settings → Pages → Build and deployment → Source: GitHub Actions**。

### GitLab Pages

流水线：[.gitlab-ci.yml](.gitlab-ci.yml)

- 仅在 `main` 分支触发，`node:20-alpine` 镜像
- 同样先拷贝到 `public/`，再生成 Pagefind 索引（此时 `input/` 会被临时移出索引范围）
- 产物目录：`public`

### 部署注意事项

- `pagefind/` 是构建产物，不要手工提交；CI 每次都会重新生成
- `input/` 会被发布为可访问路径，但不进入搜索索引
- 新增页面后无需修改构建脚本，Pagefind 会自动扫描 `public/` 下所有 HTML
- README 中指向仓库文件的相对链接不会出现在线上站点（GitHub 工作流会移除 README）

---

## 质量检查

### 断链检查

在仓库根目录运行以下 PowerShell 脚本，检查根页与 12 个分类入口页的全部站内 `href`：

```powershell
$root = (Get-Location).Path
$pages = @((Join-Path $root 'index.html'))
$pages += Get-ChildItem -Path $root -Directory |
  Where-Object { $_.Name -notin @('input','node_modules','pagefind','.git','.github','.screenshots','.trae-html-share-packages') } |
  ForEach-Object { Join-Path $_.FullName 'index.html' } |
  Where-Object { Test-Path $_ }

$missing = 0
foreach ($page in $pages) {
  $html = Get-Content $page -Raw -Encoding UTF8
  $dir  = Split-Path $page
  foreach ($m in [regex]::Matches($html, 'href="([^"]+)"')) {
    $href = $m.Groups[1].Value
    if ($href -match '^(https?:|mailto:|#)' -or $href -eq '') { continue }
    $clean  = ($href -split '#')[0]
    $target = [System.IO.Path]::GetFullPath((Join-Path $dir $clean))
    if (-not (Test-Path $target)) { Write-Output "$page -> $href"; $missing++ }
  }
}
"pages=$($pages.Count) missing=$missing"
```

当前基线：`pages=13 missing=0`。

### 内容抽查建议

- 卡片统计数字与实际文件数一致（根页与分类页）
- 新页面存在返回分类页链接，且分类页卡片已恢复 `href`
- 目录锚点全部可跳转，移动端表格可横向滚动
- 速记卡勾选后进度条与“已掌握 N / N”文字同步更新，重置按钮可清空
- 搜索面板能被 `Ctrl/Cmd + K` 唤起、`Esc` 关闭

---

## 数据说明

### `input/exam.csv`

原始题库数据，共 529 道，字段如下：

| 字段 | 说明 |
|---|---|
| `index` | 题号 |
| `type` | 题型（`single` / `multiple`） |
| `answer` | 正确答案字母 |
| `option_count` | 选项数量 |
| `option_A` … `option_J` | 选项文本 |
| `stem` | 题干 |
| `explanation` | 解析 |
| `warnings` | 数据质量提示 |

该文件目前作为原始素材保留，尚未生成独立题库页面；站点正文中的场景题为手工编写，与 CSV 题目并非一一对应。

---

## 项目文档与状态

| 文档 | 用途 |
|---|---|
| [PROGRESS.md](PROGRESS.md) | 资产盘点、完成度总览、逐分类缺口、续写规范、断链检查、更新记录 |
| [Agent.md](Agent.md) | 协作约定：每完成一个页面，同步修改卡片进度标记 |

当前状态摘要（快照 2026-11-08）：

- 根导航页：12 个分类全部挂载，综合专题已启用
- 分类入口页：12 / 12 完成
- 服务正文：79 篇
- 综合专题：1 篇
- 合计：80 / 80，完成率 100%，缺失 0
- 断链：13 个导航页，缺失 0

---

## 免责声明

本项目为个人学习整理的**非官方**资料，与 Amazon Web Services 无隶属或背书关系。正文中的考点归纳、场景题与速记卡均为学习辅助内容，不构成官方题库或考试承诺；实际考试范围与题目以 AWS 官方发布为准。

AWS、Amazon Web Services 及相关服务名称是 Amazon.com, Inc. 或其关联公司的商标。页面中引用的官方文档链接归 AWS 所有。
