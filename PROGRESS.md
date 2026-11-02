# AWS SAP-C02 备考站 · 项目进度与续写指南

> 快照时间：2026-11-02
> 当前 HEAD：`718214b add gitlab-ci`（工作区存在未提交的移动操作，见第 7 节）
> 扫描范围：根目录与 12 个分类目录下的 HTML、`input/exam.csv`、`tools/`；`old/` 仅登记为历史归档，不读取其内容
> 用途：中断后直接从第 3、4、9 节继续，不需要重新盘点仓库。

---

## 0. 一页结论

| 项目 | 当前状态 |
|---|---|
| 根导航页 | 已完成，但存在 1 个断链（`architecture-patterns.html`） |
| 分类入口页 | 12 个已完成（根导航挂了 11 个，`hybrid-edge` 未挂载） |
| 服务正文 | **已完成 6 篇 / 导航规划 78 篇（去重）＝ 7.7%** |
| 未创建正文 | **72 篇**（70 个去重链接目标 + `architecture-patterns.html` + `app-runner.html`） |
| 529 道真题 | CSV 原始数据已备齐，**尚未加工成任何题库页面** |
| 正文内场景题 | 6 篇正文共内嵌约 **28 道手写场景题**，不是 529 道 |
| 推荐下一篇 | `networking/vpn.html`（从零编写；`old/` 归档不读取） |
| 最大阻塞 | 导航架构 / 文件命名规范存在两套互相冲突的方案，见第 8 节 |

**一句话：站点骨架和 6 篇高频核心服务正文已经成形，剩余约 72 篇正文、529 道题的归类与题库化、全站断链修复尚未完成。**

---

## 1. 当前资产盘点

| 资产 | 路径 | 数量 / 状态 | 说明 |
|---|---|---:|---|
| 根导航页 | `index.html` | 1 | 手工维护的 11 分类卡片入口，设计完成 |
| 分类入口页 | `<category>/index.html` | 12 | 11 个已挂到根页，`hybrid-edge/index.html` 未挂载 |
| 服务正文 | `<category>/*.html` | **6** | VPC、CloudFront、Direct Connect、EC2、S3、IAM |
| 真题原始数据 | `input/exam.csv` | **529 题** | 含题干、选项、答案、中文解析，未加工 |
| 历史归档正文 | `old/**/*.html` | 10 篇（1 篇 0 字节） | **历史归档，禁止读取或作为续写素材** |
| 历史归档架构图 | `old/Draw.io/*.drawio` | 4 张 | **历史归档，不读取、不复用** |
| 索引生成器 | `tools/generate_index.py` | 1 | 会覆盖根 `index.html`，与当前手工导航冲突 |
| 部署配置 | `.gitlab-ci.yml` | 1 | 将整个仓库复制到 `public/`，包括 `old/` 与 `input/` |
| 说明文档 | `README.md` | 1 | 导航与命名说明已落后于当前实现 |

### 已完成正文清单

| 文件 | 分类 | 文件大小 | 可见字符约 | 场景题 | 速记卡 | 快速自测 |
|---|---|---:|---:|---:|---:|---|
| `networking/vpc.html` | 网络 | 63 KB | 20,400 | 5 | 20 | 有 |
| `networking/cloudfront.html` | 网络 | 30 KB | 8,100 | 4 | 12 | 无 |
| `networking/direct-connect.html` | 网络 | 31 KB | 8,300 | 4 | 15 | 无 |
| `compute/ec2.html` | 计算 | 30 KB | 7,800 | 4 | 14 | 有 |
| `storage/s3.html` | 存储 | 52 KB | 16,300 | 5 | 20 | 有 |
| `security/iam.html` | 安全 | 62 KB | 19,800 | 6 | 20 | 有 |

这 6 篇共用同一套页面结构：顶部标题区、粘性目录、对比表格、场景题解析、关键词速查、可勾选速记卡、官方资料与免责声明。续写时应直接复用其中一篇的骨架，不要另起一套样式。

---

## 2. 完成度总览

> “规划”按去重后的正文文档计算；跨分类复用的 Redshift、DMS/SCT 只计入其主分类。

| 分类 | 入口页 | 已完成 | 规划 | 缺失 | 完成率 | 优先级 |
|---|---|---:|---:|---:|---:|---|
| 网络与内容分发 | `networking/index.html` | 3 | 9 | 6 | 33.3% | P0 |
| 计算 | `compute/index.html` | 1 | 9 | 8 | 11.1% | P0 |
| 存储 | `storage/index.html` | 1 | 7 | 6 | 14.3% | P0 |
| 数据库 | `database/index.html` | 0 | 6 | 6 | 0% | P0 |
| 安全、身份与合规 | `security/index.html` | 1 | 11 | 10 | 9.1% | P1 |
| 管理与治理 | `management/index.html` | 0 | 9 | 9 | 0% | P1 |
| 应用集成 | `application-integration/index.html` | 0 | 6 | 6 | 0% | P1 |
| 分析 | `analytics/index.html` | 0 | 7 | 7 | 0% | P2 |
| 迁移与传输 | `migration/index.html` | 0 | 4 | 4 | 0% | P2 |
| DevOps | `devops/index.html` | 0 | 4 | 4 | 0% | P2 |
| 机器学习与 AI | `ml/index.html` | 0 | 2 | 2 | 0% | P3 |
| 混合云与边缘 | `hybrid-edge/index.html` | 0 | 3 | 3 | 0% | P3 |
| 综合专题 | 根页直达 | 0 | 1 | 1 | 0% | P1 |
| **合计** |  | **6** | **78** | **72** | **7.7%** |  |

> 根页写的“74 个文档”是旧口径 / 合并页口径；按当前导航实际目标去重后是 78 篇。完成全部正文后再统一校准首页数字。

---

## 3. 逐分类缺口清单

图例：`[x]` 已完成，`[ ]` 未开始，`[!]` 需先做决策，`[~]` 草稿 / 待补完。

### 3.1 网络与内容分发（3 / 9）

- [x] `networking/vpc.html`
- [x] `networking/direct-connect.html`
- [x] `networking/cloudfront.html`
- [ ] P0 `networking/vpn.html` — 从零编写：Site-to-Site / Client VPN、VPN over DX、加速 VPN
- [ ] P0 `networking/transit-gateway.html` — 从零编写：Attachments、路由域、Multicast、RAM 共享、跨 Region
- [ ] P0 `networking/route53.html` — 高频 DNS 路由、健康检查、Resolver
- [ ] P0 `networking/elb.html` — ALB / NLB / GLB、跨区、SSL 终止
- [ ] P1 `networking/privatelink.html` — Interface Endpoint、端点服务、与 Peering 对比
- [ ] P1 `networking/global-accelerator.html` — Anycast IP、端点组、与 CloudFront 对比

备注：根页写“10 个服务”，分类页实际是 9 项，需要校准文案。

### 3.2 计算（1 / 9）

- [x] `compute/ec2.html`
- [ ] P0 `compute/auto-scaling.html` — 扩展策略、生命周期钩子、混合实例、暖池
- [ ] P0 `compute/lambda.html` — 并发、触发器、冷启动、Lambda@Edge
- [ ] P1 `compute/fargate-ecs.html` — Launch Type、Task Definition、Service Auto Scaling
- [ ] P1 `compute/eks.html` — 节点类型、Fargate Profile、IRSA、与 ECS 对比
- [ ] P1 `compute/app-runner.html` — **分类页当前把 App Runner 卡片错误指向 `ec2.html`**
- [ ] P1 `compute/elastic-beanstalk.html` — 部署策略、环境类型、`.ebextensions`
- [ ] P2 `compute/batch.html` — Job Queue、Compute Environment、Spot 集成
- [ ] P2 `compute/outposts-wavelength.html` — 与 `hybrid-edge/outposts.html` 存在主题重叠，见 8.3

### 3.3 存储（1 / 7）

- [x] `storage/s3.html`
- [ ] P0 `storage/ebs.html` — 卷类型、快照、Multi-Attach、加密
- [ ] P0 `storage/efs.html` — 性能模式、存储类别、挂载目标、跨 AZ
- [ ] P1 `storage/storage-gateway.html` — File / Volume / Tape Gateway、缓存模式
- [ ] P1 `storage/backup.html` — 备份计划、跨区/跨账号、合规
- [ ] P2 `storage/fsx.html` — Windows / Lustre / NetApp / OpenZFS
- [ ] P2 `storage/snow-family.html` — Snowcone / Snowball / Snowmobile、数据量决策

### 3.4 数据库（0 / 6）

- [ ] P0 `database/rds-aurora.html` — 从零编写：Multi-AZ vs Read Replica、Aurora Serverless、Global Database
- [ ] P0 `database/dynamodb.html` — 分区键、Streams、Global Tables、DAX、容量模式
- [ ] P1 `database/elasticache.html` — Redis vs Memcached、集群模式、复制组
- [ ] P1 `database/redshift.html` — 节点类型、Spectrum、RA3、Concurrency Scaling
- [ ] P2 `database/documentdb-neptune.html` — 文档库 / 图数据库、迁移差异
- [ ] P2 `database/dms-sct.html` — 同构/异构迁移、CDC、SCT 使用时机

> 跨分类链接：`analytics/index.html` 和 `migration/index.html` 都指向 `database/redshift.html`、`database/dms-sct.html`。这两篇应作为数据库模块的正式页面创建，再保留跨模块“另见”。

### 3.5 安全、身份与合规（1 / 11）

- [x] `security/iam.html`
- [ ] P0 `security/kms-cloudhsm.html` — CMK 类型、轮换、信封加密、KMS vs CloudHSM
- [ ] P0 `security/organizations-scp.html` — OU、SCP 继承、允许/拒绝列表、Control Tower
- [ ] P0 `security/iam-identity-center.html` — Permission Sets、AD/IdP、SCIM、多账号 SSO
- [ ] P1 `security/secrets-manager.html` — 自动轮换、RDS 集成、vs Parameter Store
- [ ] P1 `security/waf-shield-firewall.html` — Web ACL、Shield、Network Firewall
- [ ] P1 `security/ram.html` — 共享资源类型、与 Organizations 集成
- [ ] P2 `security/cognito.html` — User Pools vs Identity Pools、JWT
- [ ] P2 `security/guardduty-detective.html` — 威胁检测、调查链路
- [ ] P2 `security/inspector-macie.html` — 漏洞 / 敏感数据发现
- [ ] P2 `security/certificate-manager.html` — 公有/私有 CA、CloudFront 证书区域

### 3.6 管理与治理（0 / 9）

- [ ] P0 `management/cloudformation.html` — 从零编写：Stack vs StackSets、Change Set、Nested Stack、Drift
- [ ] P0 `management/cloudwatch.html` — 指标、Log Insights、Alarms、跨账号
- [ ] P0 `management/cloudtrail.html` — Trail 类型、日志完整性、组织级 Trail
- [ ] P0 `management/config.html` — Rules、合规时间线、自动修复、Aggregator
- [ ] P1 `management/systems-manager.html` — Session Manager、Patch Manager、Parameter Store
- [ ] P1 `management/cost-management.html` — Savings Plans、Budgets、Cost Allocation Tags
- [ ] P2 `management/control-tower.html` — Landing Zone、Guardrails、Account Factory
- [ ] P2 `management/service-catalog.html` — Portfolio、Product、合规自助服务
- [ ] P2 `management/trusted-advisor.html` — 5 类检查、支持计划、与 Config 对比

> Systems Manager 页面从零编写；不要从历史归档补内容。

### 3.7 应用集成（0 / 6）

- [ ] P0 `application-integration/sqs-sns.html` — 从零编写：SQS 标准/FIFO、DLQ、SNS Fan-out、消息过滤
- [ ] P0 `application-integration/eventbridge.html` — 事件规则、跨账号事件、Schema Registry
- [ ] P0 `application-integration/step-functions.html` — 从零编写：Standard vs Express、状态类型、错误处理
- [ ] P1 `application-integration/api-gateway.html` — REST/HTTP/WebSocket、授权、VPC Link
- [ ] P2 `application-integration/appsync.html` — GraphQL、解析器、实时订阅
- [ ] P2 `application-integration/mq.html` — ActiveMQ/RabbitMQ、与 SQS 对比

### 3.8 分析（0 / 7，另有 1 篇跨模块 Redshift）

- [ ] P0 `analytics/glue.html` — Data Catalog、Crawler、ETL Job、Bookmark
- [ ] P0 `analytics/athena.html` — 分区优化、压缩、Federated Query、成本
- [ ] P0 `analytics/kinesis.html` — KDS vs Firehose vs Analytics、分片、EFO
- [ ] P1 `analytics/opensearch.html` — 日志分析、跨集群搜索、访问控制
- [ ] P1 `analytics/emr.html` — 集群类型、Spot、与 S3 数据湖
- [ ] P2 `analytics/msk.html` — 托管 Kafka、与 Kinesis 对比
- [ ] P2 `analytics/quicksight-lake-formation.html` — SPICE、列级权限、跨账号共享

> 分类页第 7 张卡片指向 `database/redshift.html`，不计入本分类的 7 篇；该页需要在数据库模块完成。

### 3.9 迁移与传输（0 / 4，另有 1 篇跨模块 DMS/SCT）

- [ ] P0 `migration/migration-strategy.html` — 7R、决策树、TCO、阶段划分
- [ ] P0 `migration/application-migration.html` — MGN、Replication Agent、测试/切割
- [ ] P0 `migration/datasync-transfer.html` — DataSync、Transfer Family、带宽管理
- [ ] P1 `migration/migration-hub.html` — 项目跟踪、ADS、与 DMS/MGN 集成

> 分类页第 4 张卡片指向 `database/dms-sct.html`；该页需要在数据库模块完成。

### 3.10 DevOps（0 / 4）

- [ ] P1 `devops/codepipeline.html` — Stage/Action、跨账号部署、手动审批
- [ ] P1 `devops/codedeploy.html` — 蓝绿/原地、AppSpec、回滚
- [ ] P1 `devops/codecommit-build.html` — buildspec、缓存、CodeArtifact
- [ ] P2 `devops/xray.html` — Trace/Segment、采样、Service Map

### 3.11 机器学习与 AI（0 / 2）

- [ ] P2 `ml/ml-ai.html` — 一篇覆盖 Rekognition、Comprehend、Textract、Translate、Polly、Kendra、Personalize、Fraud Detector、Lex
- [ ] P2 `ml/sagemaker.html` — Studio、训练/推理、Pipelines、Ground Truth、Feature Store

> 根页写“10 个服务”，但分类页按 2 篇合并页设计，这是有意的，不需要拆成 10 篇。

### 3.12 混合云与边缘（0 / 3，未挂到根页）

- [!] P3 `hybrid-edge/outposts.html` — 与 `compute/outposts-wavelength.html` 主题重叠
- [ ] P3 `hybrid-edge/local-zones-wavelength.html` — Local Zones / Wavelength / Outposts 对比
- [ ] P3 `hybrid-edge/iot.html` — IoT Core、Greengrass、Device Shadow

> `hybrid-edge/index.html` 已存在，但根页没有入口；同时 `compute` 分类也规划了 Outposts/Local Zones/Wavelength。需要先决定“合并到计算”还是“保留独立分类并从根页挂出”。

### 3.13 综合专题（0 / 1）

- [ ] P1 `architecture-patterns.html` — 根页已有入口但文件不存在
  - 从零编写
  - 建议覆盖：Well-Architected、DR 策略、HA/Failover、多账号、成本优化
  - 与现有正文的“场景题解析”互补，不重复服务细节

---

## 4. 529 道真题资产状态

`input/exam.csv` 已包含完整题目数据，但尚未进入站点任何页面。

| 字段 | 说明 |
|---|---|
| `index` | 题号，1–529 |
| `type` | `single` 421 题，`multiple` 108 题 |
| `answer` | 正确答案；无空值 |
| `option_count` | 4 选项 420 题、5 选项 61 题、6 选项 47 题、3 选项 1 题 |
| `option_A` ~ `option_J` | 选项文本 |
| `stem` | 英文题干 |
| `explanation` | 中文解析；无空值 |
| `warnings` | 全部为空，暂未标注质量/争议项 |

### 已完成正文中的题目

| 文档 | 内嵌场景题 |
|---|---:|
| `networking/vpc.html` | 5 |
| `networking/cloudfront.html` | 4 |
| `networking/direct-connect.html` | 4 |
| `compute/ec2.html` | 4 |
| `storage/s3.html` | 5 |
| `security/iam.html` | 6 |
| **合计** | **约 28** |

> “28 道”是根据页面内“场景一 / 场景 1”等标题统计的手写场景题，不是 CSV 中的 529 道。首页“529 道真题全覆盖”目前只是数据储备，不是已完成状态。

### 题库化前需要补的元数据

CSV 没有“服务 / 分类”标签。要把 529 题挂到对应服务页或独立题库页，需要先完成：

1. 按题干关键词 + 人工复核，为每题打上分类与服务标签；
2. 决定题库形态：每篇正文内嵌 N 道，还是独立 `questions/` 页面；
3. 处理多选、3–6 选项的排版差异；
4. 保留英文题干 + 中文解析，增加“关键词 → 答案”映射；
5. 抽样校验答案与解析一致性，记录争议题。

---

## 5. 续写规范（Definition of Done）

每篇新正文至少满足以下条件，才把进度表改为 `[x]`：

- [ ] 文件路径与分类入口页的 `href` 完全一致，文件名使用小写 kebab-case
- [ ] 自包含 HTML，不依赖外部 CDN、字体或脚本
- [ ] `<title>` 为 `AWS SAP-C02｜<服务名> 考试速查手册`
- [ ] 有 `<meta name="description">`，概括考点
- [ ] 顶部标题区包含：英文名、中文定位、考试频率、核心关键词
- [ ] 粘性目录与正文 `id` 一一对应
- [ ] 8–12 个主体章节：基础、关键机制、对比表、常见陷阱
- [ ] 至少 4 道场景题，包含：题干、正确答案、分析思路、错误选项排除
- [ ] “关键词 → 功能/答案”速查表
- [ ] 12–20 条可勾选速记卡，并带页面内进度条
- [ ] 有“快速自测”时，题目和答案分开呈现
- [ ] 官方文档链接与“非官方题库”免责声明
- [ ] 返回分类页链接
- [ ] 移动端可读，表格可横向滚动
- [ ] 文件大小约 25–45 KB，可见正文约 8,000–20,000 字
- [ ] 更新本文件第 2、3 节的完成数与勾选状态
- [ ] 运行第 6 节的断链检查，确认新页面无新增错误

### 推荐复用骨架

优先复制 `networking/vpc.html` 或 `compute/ec2.html` 的 `<style>`、顶部结构、目录脚本和速记卡脚本，再替换正文。历史归档 `old/` 不读取、不复制、不复用。

---

## 6. 中断后如何继续

### 6.1 恢复步骤

1. 先看 `git status`，确认第 7 节的未提交移动操作是否还在。
2. 打开本文件第 3 节，从 P0 且 `[ ]` 的第一项开始。
3. 不要读取 `old/` 历史归档；所有正文从零编写，只参考现有 6 篇正文的结构与写法。
4. 新建正文后，确认分类页已有同名链接；如果链接写错（如 App Runner），顺手修正入口页。
5. 完成后更新本文件，再继续下一篇。
6. 每完成 3–5 篇，跑一次断链检查并提交一次 Git。

### 6.2 全站断链检查脚本

在仓库根目录运行：

```python
python - <<'PY'
from pathlib import Path
import re

root = Path.cwd()
skip_dirs = {'old', 'input', 'tools', '.git'}

pages = [root / 'index.html'] + [
    p for p in root.glob('*/index.html') if p.parent.name not in skip_dirs
]

for page in pages:
    html = page.read_text(encoding='utf-8')
    for href in re.findall(r'href="([^"]+)"', html):
        if href.startswith(('http', '#', 'mailto')) or href == '../index.html':
            continue
        target = (page.parent / href).resolve()
        if not target.exists():
            print(f'{page.relative_to(root)} -> {href}')
PY
```

当前预期会输出 70+ 条待补正文；新写完一篇后，对应行应消失。若出现重复的跨目录链接，按“主分类创建、其他分类另见”的规则处理。

### 6.3 每篇完成后的记录模板

```markdown
- [x] `分类/文件.html` — 完成日期：YYYY-MM-DD；字数约 N；场景题 N 道；备注
```

同时把第 2 节对应分类的“已完成”加 1，“缺失”减 1，并重新计算完成率。

---

## 7. 当前 Git 工作区状态（重要）

快照时的 `git status`：

```text
 D Draw.io/aws-sap-c02-client-vpn-solution.drawio
 D Draw.io/aws-sap-c02-dx-transit-gateway-multiregion.drawio
 D Draw.io/aws-sap-c02-high-availability-web-architecture.drawio
 D Draw.io/aws-sap-c02-hybrid-monitoring-elasticsearch.drawio
 D html-files.js
?? old/Draw.io/
?? old/html-files.js
```

含义：4 张图与根 `html-files.js` 已从根目录删除，但 `old/` 下的对应副本尚未提交。继续写作前建议先确认这是有意迁移，然后提交一次“归档旧资源”的变更，避免后续误判文件丢失。

---

## 8. 已知问题与待决策

### 8.1 P0：导航架构有两套方案

- 当前根 `index.html` 是手工维护的分类门户。
- `README.md` 要求运行 `python tools\generate_index.py`，但该脚本会：
  - 用简单文件列表**覆盖**根 `index.html`；
  - 生成根 `html-files.js`；
  - 递归扫描 `old/` 与所有目录，把旧文件也列入导航。
- 根目录当前没有 `html-files.js`，旧的已移动到 `old/`，所以 README 描述与现状不符。

**待决策：** 保留手工分类门户（推荐，符合当前设计），还是改回生成器文件列表。若保留手工门户，应改造生成器或明确“不要运行”，并更新 README。

### 8.2 P1：文件命名规范冲突

- `README.md` 规定：`aws-sap-c02-<主题>-<内容>.html`。
- 当前新正文实际使用：`networking/vpc.html`、`compute/ec2.html` 等短名。
- 分类页、根页全部按短名链接。

**待决策：** 保持短名（推荐，避免全站改链），还是批量重命名为长名并同步所有 `href`。在决策前，新文件继续使用短 kebab-case，与现有正文一致。

### 8.3 P1：`hybrid-edge` 是孤儿分类

- `hybrid-edge/index.html` 存在，但根页没有入口。
- `compute/index.html` 又规划了 `outposts-wavelength.html`。
- 两边都缺正文。

**待决策：** 合并到计算分类并删除 `hybrid-edge`，或保留独立分类并补根页入口。决策前不要同时写两份 Outposts 内容。

### 8.4 P1：跨分类链接指向不存在的文件

| 位置 | 当前链接 | 问题 |
|---|---|---|
| `analytics/index.html` | `../database/redshift.html` | 目标未创建；卡片内还嵌套了第二个 `<a>`，属于无效 HTML |
| `migration/index.html` | `../database/dms-sct.html` | 目标未创建 |
| `database/index.html`（Redshift 卡片） | `redshift.html` | `href` 实际指向本模块待创建页，但文案写成“另见：分析模块 → analytics/redshift.html”，方向写反 |
| `database/index.html`（DMS 卡片） | `dms-sct.html` | `href` 指向本模块待创建页，但文案写成“另见：迁移模块 → migration/dms-sct.html”，方向写反 |

建议：Redshift 与 DMS/SCT 在 `database/` 创建主页面；分析、迁移入口保留“另见数据库模块”；`database/index.html` 的两条“另见”文案改为指向本模块页面，或直接删除。

### 8.5 P2：App Runner 卡片指向错误

`compute/index.html` 中 App Runner 卡片的 `href="ec2.html"`，与 EC2 重复。应改为 `app-runner.html`，并创建对应正文。

### 8.6 P2：首页统计与事实不符

- 首页写“74 个文档”，实际 6 篇正文 + 12 个分类入口 + 根页。
- 首页写“529 道真题”，实际只有 CSV 原料，页面内约 28 道场景题。
- 首页写“11 大类”，实际有 12 个分类入口页（`hybrid-edge` 未挂载）。
- `networking` 首页写“10 个服务”，分类页实际 9 项。

建议：在内容未完成前改为“6 篇已上线 / 72 篇待补 / 529 道题库待整理”，或完成后再恢复宣传数字。

### 8.7 P2：旧资料与部署

- `old/AWS_SSM_Session_Manager.html` 为 0 字节，不能使用。
- `old/` 下 10 篇旧正文均未挂到新导航，但会被 `.gitlab-ci.yml` 一起发布到 `public/`。
- `input/exam.csv` 也会被发布到 `public/`。
- 旧正文风格与新正文不一致，直接发布会让访问者看到两套设计。

**待决策：** `old/` 作为本地归档并从 Pages 构建排除，还是彻底删除；`input/` 是否随站点发布。

### 8.8 P3：小一致性问题

- `networking/direct-connect.html` 缺少其他 5 篇都有的“官方资料”区块。
- `networking/cloudfront.html`、`direct-connect.html` 没有“快速自测”，不算错误，但与其余 4 篇不完全一致。
- 根页的“架构设计模式”卡片指向不存在的 `architecture-patterns.html`，是当前根页唯一断链。

---

## 9. 建议的续写顺序（下一批 10 篇）

| 顺序 | 文件 | 理由 | 编写方式 |
|---:|---|---|---|
| 1 | `networking/vpn.html` | 网络高频，与现有 VPC / DX 正文交叉引用 | 从零编写 |
| 2 | `networking/transit-gateway.html` | 混合网络核心，与 DX / VPC 交叉引用 | 从零编写 |
| 3 | `networking/route53.html` | DNS 路由与健康检查高频 | 从零编写；引用 VPC DNS 章节 |
| 4 | `compute/auto-scaling.html` | 计算层高频，与 EC2 直接衔接 | 从零编写；引用 EC2 购买选项 |
| 5 | `compute/lambda.html` | 无服务器高频 | 从零编写；与 CloudFront/Edge 交叉引用 |
| 6 | `storage/ebs.html` | 与 S3 组成存储核心 | 从零编写；引用 EC2 实例存储对比 |
| 7 | `database/rds-aurora.html` | 数据库最高频 | 从零编写 |
| 8 | `database/dynamodb.html` | 数据库最高频 | 从零编写 |
| 9 | `security/kms-cloudhsm.html` | 安全高频，与 IAM/S3 交叉 | 从零编写；引用 S3 加密章节 |
| 10 | `security/organizations-scp.html` | 多账号治理高频 | 从零编写 |

完成这批后，再补 `architecture-patterns.html`，最后处理题库化与全站校准。

---

## 10. 历史归档说明

`old/` 目录仅作为历史版本留档，**不读取、不作为续写素材、不复用其中样式或结构**。新正文一律基于现有 6 篇正文的模板从零编写。

是否保留、删除或从 Pages 构建中排除，见第 8.7 节。

---

## 11. 进度更新记录

| 日期 | 完成内容 | 变更文件 | 下一步 |
|---|---|---|---|
| 2026-11-02 | 建立进度基线：6 篇正文、72 篇待补、529 题未题库化 | `PROGRESS.md` | 从 `networking/vpn.html` 开始 |

> 后续每完成一批，在上表追加一行；不要删除旧记录，方便回溯。
