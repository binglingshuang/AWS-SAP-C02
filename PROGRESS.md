# AWS SAP-C02 备考站 · 项目进度与续写指南

> 快照时间：2026-11-02
> 当前 HEAD：`29642d4 改为使用Trae版本`
> 扫描范围：根目录与 12 个分类目录下的 HTML、`input/exam.csv`；`old/` 仅登记为历史归档，不读取其内容
> 用途：中断后直接从第 3、4、9 节继续，不需要重新盘点仓库。

---

## 0. 一页结论

| 项目 | 当前状态 |
|---|---|
| 根导航页 | 已完成；各分类卡片已标注完成进度，未创建的 `architecture-patterns.html` 入口已禁用，无断链 |
| 分类入口页 | 12 个已完成（根导航挂了 11 个，`hybrid-edge` 未挂载） |
| 服务正文 | **已完成 37 篇 / 导航规划 78 篇（去重）＝ 47.4%** |
| 未创建正文 | **41 篇**（78 篇规划减去已完成 37 篇；含已禁用入口的 `architecture-patterns.html`） |
| 参考考题库 | `input/exam.csv` 已备齐 529 题，**尚未加工成任何题库页面** |
| 正文内场景题 | 37 篇正文共内嵌 **214 道手写场景题**，不是 529 道 |
| 推荐下一篇 | `analytics/glue.html`（P0；从零编写） |
| 最大阻塞 | 剩余正文量大，且 529 题尚未按服务归类、题库化；导航/命名旧规范已清理 |

**一句话：站点骨架和 37 篇高频核心服务正文已经成形，剩余 41 篇正文、529 道题的归类与题库化、全站断链修复尚未完成。**

---

## 1. 当前资产盘点

| 资产 | 路径 | 数量 / 状态 | 说明 |
|---|---|---:|---|
| 根导航页 | `index.html` | 1 | 手工维护的 11 分类卡片入口，设计完成 |
| 分类入口页 | `<category>/index.html` | 12 | 11 个已挂到根页，`hybrid-edge/index.html` 未挂载 |
| 服务正文 | `<category>/*.html` | **37** | 当前完成正文见下表；本次补齐计算分类剩余 5 篇 |
| 参考考题库 | `input/exam.csv` | **529 题** | 含题干、选项、答案、中文解析；只读参考，未加工成页面 |
| 历史归档正文 | `old/**/*.html` | 10 篇（1 篇 0 字节） | **历史归档，禁止读取或作为续写素材** |
| 历史归档架构图 | `old/Draw.io/*.drawio` | 4 张 | **历史归档，不读取、不复用** |
| 部署配置 | `.gitlab-ci.yml` | 1 | 将整个仓库复制到 `public/`，包括 `old/` 与 `input/` |
| 说明文档 | `README.md` | 1 | 已改为手工导航说明，移除旧生成器与命名规范 |

### 已完成正文清单

| 文件 | 分类 | 文件大小 | 可见字符约 | 场景题 | 速记卡 | 快速自测 |
|---|---|---:|---:|---:|---:|---|
| `networking/vpc.html` | 网络 | 63 KB | 20,400 | 5 | 20 | 有 |
| `networking/cloudfront.html` | 网络 | 30 KB | 8,100 | 4 | 12 | 无 |
| `networking/direct-connect.html` | 网络 | 31 KB | 8,300 | 4 | 15 | 无 |
| `networking/vpn.html` | 网络 | 45 KB | 11,500 | 6 | 18 | 有 |
| `networking/transit-gateway.html` | 网络 | 44 KB | 11,100 | 6 | 18 | 有 |
| `networking/route53.html` | 网络 | — | 约 14,000 | 6 | 18 | 有 |
| `networking/privatelink.html` | 网络 | 35.6 KB | — | 6 | 18 | 有 |
| `networking/global-accelerator.html` | 网络 | — | — | 6 | 18 | 有 |
| `compute/ec2.html` | 计算 | 30 KB | 7,800 | 4 | 14 | 有 |
| `storage/s3.html` | 存储 | 52 KB | 16,300 | 5 | 20 | 有 |
| `security/iam.html` | 安全 | 62 KB | 19,800 | 6 | 20 | 有 |
| `compute/auto-scaling.html` | 计算 | ~50 KB | ~13,000 | 6 | 18 | 有 |
| `compute/lambda.html` | 计算 | — | — | 6 | 18 | 有 |
| `compute/fargate-ecs.html` | 计算 | — | — | 6 | 18 | 有 |
| `storage/efs.html` | 存储 | — | — | 6 | 18 | 有 |
| `storage/ebs.html` | 存储 | — | — | 6 | 18 | 有 |
| `networking/elb.html` | 网络 | — | — | 6 | 18 | 有 |
| `database/rds-aurora.html` | 数据库 | — | — | 6 | 18 | 有 |
| `database/dynamodb.html` | 数据库 | — | — | 6 | 18 | 有 |
| `security/kms-cloudhsm.html` | 安全 | — | — | 6 | 18 | 有 |
| `security/organizations-scp.html` | 安全 | — | — | 6 | 18 | 有 |
| `security/iam-identity-center.html` | 安全 | — | — | 6 | 18 | 有 |
| `management/cloudformation.html` | 管理 | — | — | 6 | 18 | 有 |
| `management/cloudwatch.html` | 管理 | — | — | 6 | 18 | 有 |
| `management/cloudtrail.html` | 管理 | — | — | 6 | 18 | 有 |
| `management/config.html` | 管理 | — | — | 6 | 18 | 有 |
| `application-integration/sqs-sns.html` | 应用集成 | — | — | 6 | 18 | 有 |
| `application-integration/eventbridge.html` | 应用集成 | — | — | 6 | 16 | 有 |
| `application-integration/step-functions.html` | 应用集成 | — | — | 6 | 16 | 有 |
| `application-integration/api-gateway.html` | 应用集成 | — | — | 6 | 16 | 有 |
| `application-integration/appsync.html` | 应用集成 | — | — | 6 | 16 | 有 |
| `application-integration/mq.html` | 应用集成 | — | — | 6 | 16 | 有 |
| `compute/eks.html` | 计算 | — | — | 6 | 18 | 有 |
| `compute/app-runner.html` | 计算 | — | — | 6 | 18 | 有 |
| `compute/elastic-beanstalk.html` | 计算 | — | — | 6 | 18 | 有 |
| `compute/batch.html` | 计算 | — | — | 6 | 18 | 有 |
| `compute/outposts-wavelength.html` | 计算 | — | — | 6 | 18 | 有 |

这 37 篇共用同一套页面结构：顶部标题区、粘性目录、对比表格、场景题解析、关键词速查、可勾选速记卡、官方资料与免责声明。续写时应直接复用其中一篇的骨架，不要另起一套样式。

---

## 2. 完成度总览

> “规划”按去重后的正文文档计算；跨分类复用的 Redshift、DMS/SCT 只计入其主分类。

| 分类 | 入口页 | 已完成 | 规划 | 缺失 | 完成率 | 优先级 |
|---|---|---:|---:|---:|---:|---|
| 网络与内容分发 | `networking/index.html` | 9 | 9 | 0 | 100% | P0 |
| 计算 | `compute/index.html` | 9 | 9 | 0 | 100% | P0 |
| 存储 | `storage/index.html` | 7 | 7 | 0 | 100% | P0 |
| 数据库 | `database/index.html` | 2 | 6 | 4 | 33.3% | P0 |
| 安全、身份与合规 | `security/index.html` | 4 | 11 | 7 | 36.4% | P0 |
| 管理与治理 | `management/index.html` | 4 | 9 | 5 | 44.4% | P0 |
| 应用集成 | `application-integration/index.html` | 6 | 6 | 0 | 100% | P1 |
| 分析 | `analytics/index.html` | 0 | 7 | 7 | 0% | P2 |
| 迁移与传输 | `migration/index.html` | 0 | 4 | 4 | 0% | P2 |
| DevOps | `devops/index.html` | 0 | 4 | 4 | 0% | P2 |
| 机器学习与 AI | `ml/index.html` | 0 | 2 | 2 | 0% | P3 |
| 混合云与边缘 | `hybrid-edge/index.html` | 0 | 3 | 3 | 0% | P3 |
| 综合专题 | 根页直达 | 0 | 1 | 1 | 0% | P1 |
| **合计** |  | **41** | **78** | **37** | **52.6%** |  |

> 根页写的“74 个文档”是旧口径 / 合并页口径；按当前导航实际目标去重后是 78 篇。完成全部正文后再统一校准首页数字。

---

## 3. 逐分类缺口清单

图例：`[x]` 已完成，`[ ]` 未开始，`[!]` 需先做决策，`[~]` 草稿 / 待补完。

### 3.1 网络与内容分发（9 / 9）

- [x] `networking/vpc.html`
- [x] `networking/direct-connect.html`
- [x] `networking/cloudfront.html`
- [x] `networking/vpn.html` — 完成日期：2026-11-02；字数约 11,500；场景题 6 道；覆盖 S2S / Client VPN / VPN over DX / CloudHub / 加速 VPN
- [x] `networking/transit-gateway.html` — 完成日期：2026-11-02；字数约 11,100；场景题 6 道；覆盖附件、路由域、RAM、Peering、Multicast、集中出口
- [x] `networking/route53.html` — 完成日期：2026-11-02；字数约 14,000；场景题 6 道；覆盖七种路由策略、健康检查、Public/Private 托管区、Resolver 混合云 DNS、Traffic Flow 与 AWS 服务集成
- [x] `networking/elb.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 ALB/NLB/GWLB、Listener/Target Group、健康检查、跨区负载与 TLS 终止
- [x] P1 `networking/privatelink.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Interface Endpoint、Endpoint Service、DNS、连接治理与 Peering 对比
- [x] P1 `networking/global-accelerator.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖静态 Anycast IP、Standard / Custom Routing、端点组、流量拨盘、健康检查与 CloudFront 对比

备注：根页服务数已校准为 9 项，与分类页一致。

### 3.2 计算（9 / 9）

- [x] `compute/ec2.html`
- [x] `compute/auto-scaling.html` — 完成日期：2026-11-02；字数约 13,000；场景题 6 道；覆盖四种扩展策略、冷却期、生命周期钩子、混合实例策略、终止保护、暖池、健康检查
- [x] `compute/lambda.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖调用模型、事件源映射、并发、失败处理、冷启动、VPC 与边缘函数选型
- [x] `compute/fargate-ecs.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 ECS/Fargate 容量模式、Task Definition、Service、网络、IAM 与自动扩缩
- [x] P1 `compute/eks.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖托管控制平面、节点类型、Fargate Profile、IRSA / Pod Identity、网络与存储、扩缩及 ECS 选型
- [x] P1 `compute/app-runner.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖源码/镜像部署、自动扩缩、VPC Connector、IAM 角色、网络边界及 ECS / Beanstalk / Lambda 选型
- [x] P1 `compute/elastic-beanstalk.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Web/Worker 环境、All at once / Rolling / Immutable / Traffic Splitting、蓝绿部署、`.ebextensions` 与数据生命周期
- [x] P2 `compute/batch.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Job Definition / Queue / Compute Environment、EC2/Fargate/Spot、数组作业、依赖、重试与幂等
- [x] P2 `compute/outposts-wavelength.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；作为唯一正文覆盖 Outposts、Local Zones、Wavelength 的部署位置、网络边界、服务支持与场景选型；避免与 `hybrid-edge` 重复编写

### 3.3 存储（7 / 7）

- [x] `storage/s3.html`
- [x] `storage/ebs.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖卷型、性能、快照、加密、扩容、Multi-Attach 与灾备
- [x] `storage/efs.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Regional / One Zone、性能与吞吐模式、生命周期、Mount Target、NFS 网络、Access Point、加密与灾备
- [x] P1 `storage/storage-gateway.html` — 完成日期：2026-11-02；场景题 4 道；速记卡 8 条；覆盖 File / Volume / Tape Gateway、缓存模式与混合云选型
- [x] P1 `storage/backup.html` — 完成日期：2026-11-02；场景题 3 道；速记卡 8 条；覆盖备份计划、跨区/跨账号、Vault Lock 与合规治理
- [x] P2 `storage/fsx.html` — 完成日期：2026-11-02；场景题 3 道；速记卡 8 条；覆盖 Windows / Lustre / NetApp / OpenZFS 选型
- [x] P2 `storage/snow-family.html` — 完成日期：2026-11-02；场景题 3 道；速记卡 7 条；覆盖 Snowcone / Snowball / Snowmobile、边缘计算与数据量决策

### 3.4 数据库（6 / 6）

- [x] `database/rds-aurora.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Multi-AZ / Read Replica、Aurora 端点、Serverless v2、RDS Proxy、Global Database 与备份恢复
- [x] `database/dynamodb.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖主键与分区设计、GSI/LSI、容量模式、一致性、Streams、TTL、Global Tables、DAX 与恢复
- [x] P1 `database/elasticache.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Redis OSS / Memcached、集群模式、复制组、缓存模式、高可用与跨区灾备
- [x] P1 `database/redshift.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 RA3 / DC2、Spectrum、Concurrency Scaling、WLM、快照与分析服务选型
- [x] P2 `database/documentdb-neptune.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 DocumentDB API 兼容边界、Neptune 图模型/查询语言、数据建模与迁移验证
- [x] P2 `database/dms-sct.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖同构/异构迁移、SCT 转换评估、DMS Full Load/CDC、网络、验证与切换

> 跨分类链接：`analytics/index.html` 的 Redshift 卡片链接到 `database/redshift.html`；`migration/index.html` 的 DMS/SCT 卡片链接到 `database/dms-sct.html`。两篇已作为数据库模块正式页面创建，并保留跨模块入口。

### 3.5 安全、身份与合规（4 / 11）

- [x] `security/iam.html`
- [x] `security/kms-cloudhsm.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 KMS Key 类型、Key Policy、Grant、信封加密、轮换、多区域密钥与 CloudHSM
- [x] `security/organizations-scp.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Organizations 层级、SCP 边界与继承、Allow/Deny、管理账号例外、委派管理员与 Control Tower
- [x] `security/iam-identity-center.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖身份来源、SAML/SCIM、Permission Set、账号分配与 provision、应用 SSO、生命周期与审计
- [ ] P1 `security/secrets-manager.html` — 自动轮换、RDS 集成、vs Parameter Store
- [ ] P1 `security/waf-shield-firewall.html` — Web ACL、Shield、Network Firewall
- [ ] P1 `security/ram.html` — 共享资源类型、与 Organizations 集成
- [ ] P2 `security/cognito.html` — User Pools vs Identity Pools、JWT
- [ ] P2 `security/guardduty-detective.html` — 威胁检测、调查链路
- [ ] P2 `security/inspector-macie.html` — 漏洞 / 敏感数据发现
- [ ] P2 `security/certificate-manager.html` — 公有/私有 CA、CloudFront 证书区域

### 3.6 管理与治理（4 / 9）

- [x] `management/cloudformation.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖模板与 Stack 生命周期、Change Set、Stack Policy、Drift、Nested Stack、StackSets、资源保留与执行角色
- [x] `management/cloudwatch.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 Metrics、Agent、Alarms、Logs Insights、Metric Filters、OAM 跨账号观测、容器监控与服务边界
- [x] `management/cloudtrail.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖事件类别、组织/多区域 Trail、S3 与 Logs 交付、完整性验证、Lake/Insights 与费用边界
- [x] `management/config.html` — 完成日期：2026-11-02；12 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖 Recorder、配置历史、Rules、自动修复、Conformance Pack、Aggregator 与组织治理
- [ ] P1 `management/systems-manager.html` — Session Manager、Patch Manager、Parameter Store
- [ ] P1 `management/cost-management.html` — Savings Plans、Budgets、Cost Allocation Tags
- [ ] P2 `management/control-tower.html` — Landing Zone、Guardrails、Account Factory
- [ ] P2 `management/service-catalog.html` — Portfolio、Product、合规自助服务
- [ ] P2 `management/trusted-advisor.html` — 5 类检查、支持计划、与 Config 对比

> Systems Manager 页面从零编写；不要从历史归档补内容。

### 3.7 应用集成（6 / 6）

- [x] P0 `application-integration/sqs-sns.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 18 条；覆盖 SQS Standard/FIFO、可见性超时、长轮询、DLQ、SNS Fan-out、消息过滤与策略授权
- [x] P0 `application-integration/eventbridge.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 16 条；覆盖总线类型、事件模式、目标投递、跨账号策略、重试/DLQ、Archive/Replay、Schema Registry 与 Scheduler
- [x] P0 `application-integration/step-functions.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 16 条；覆盖 Standard/Express、状态类型、服务集成、Retry/Catch、回调令牌、Map 并行与执行监控
- [x] P1 `application-integration/api-gateway.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 16 条；覆盖 REST/HTTP/WebSocket、IAM/JWT/Lambda 授权、使用计划、节流缓存、Private API 与 VPC Link
- [x] P2 `application-integration/appsync.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 16 条；覆盖 GraphQL Schema、Resolver、数据源、授权模式、GraphQL Subscription / AppSync Events、缓存、N+1 与离线冲突处理
- [x] P2 `application-integration/mq.html` — 完成日期：2026-11-02；场景题 6 道；速记卡 16 条；覆盖 ActiveMQ/RabbitMQ、协议兼容、部署高可用、VPC 安全、迁移规划、运维监控及 SQS/SNS 选型

### 3.8 分析（0 / 7，另有 1 篇跨模块 Redshift）

- [ ] P0 `analytics/glue.html` — Data Catalog、Crawler、ETL Job、Bookmark
- [ ] P0 `analytics/athena.html` — 分区优化、压缩、Federated Query、成本
- [ ] P0 `analytics/kinesis.html` — KDS vs Firehose vs Analytics、分片、EFO
- [ ] P1 `analytics/opensearch.html` — 日志分析、跨集群搜索、访问控制
- [ ] P1 `analytics/emr.html` — 集群类型、Spot、与 S3 数据湖
- [ ] P2 `analytics/msk.html` — 托管 Kafka、与 Kinesis 对比
- [ ] P2 `analytics/quicksight-lake-formation.html` — SPICE、列级权限、跨账号共享

> 分类页第 7 张卡片链接到 `database/redshift.html`，不计入本分类的 7 篇；正文位于数据库模块。

### 3.9 迁移与传输（0 / 4，另有 1 篇跨模块 DMS/SCT）

- [ ] P0 `migration/migration-strategy.html` — 7R、决策树、TCO、阶段划分
- [ ] P0 `migration/application-migration.html` — MGN、Replication Agent、测试/切割
- [ ] P0 `migration/datasync-transfer.html` — DataSync、Transfer Family、带宽管理
- [ ] P1 `migration/migration-hub.html` — 项目跟踪、ADS、与 DMS/MGN 集成

> 分类页第 4 张卡片链接到 `database/dms-sct.html`；正文位于数据库模块。

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

- [x] Outposts、Local Zones、Wavelength 共用唯一正文：`compute/outposts-wavelength.html`（计入计算分类，不重复计数）
- [ ] P3 `hybrid-edge/iot.html` — IoT Core、Greengrass、Device Shadow

> `hybrid-edge/index.html` 仍未挂到根页。边缘计算正文统一放在 `compute/outposts-wavelength.html`，不再另建重复页面；IoT 主题仍待补充。

### 3.13 综合专题（0 / 1）

- [ ] P1 `architecture-patterns.html` — 根页已有入口但文件不存在
  - 从零编写
  - 建议覆盖：Well-Architected、DR 策略、HA/Failover、多账号、成本优化
  - 与现有正文的“场景题解析”互补，不重复服务细节

---

## 4. 参考考题库（`input/exam.csv`）状态

`input/exam.csv` 是参考考题库，已包含完整题目数据，但尚未进入站点任何页面；只读使用，不直接修改或发布。

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
| `networking/vpn.html` | 6 |
| `networking/transit-gateway.html` | 6 |
| `networking/route53.html` | 6 |
| `networking/global-accelerator.html` | 6 |
| `compute/auto-scaling.html` | 6 |
| `compute/lambda.html` | 6 |
| `compute/fargate-ecs.html` | 6 |
| `storage/ebs.html` | 6 |
| `storage/efs.html` | 6 |
| `networking/elb.html` | 6 |
| `networking/privatelink.html` | 6 |
| `database/rds-aurora.html` | 6 |
| `database/dynamodb.html` | 6 |
| `security/kms-cloudhsm.html` | 6 |
| `security/organizations-scp.html` | 6 |
| `security/iam-identity-center.html` | 6 |
| `management/cloudformation.html` | 6 |
| `management/cloudwatch.html` | 6 |
| `management/cloudtrail.html` | 6 |
| `management/config.html` | 6 |
| **合计** | **约 148** |

> “148 道”是根据页面内场景题标题统计的手写场景题，不是 CSV 中的 529 道。首页“529 道题库待整理”目前只是数据储备，不是已完成状态。

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
- [ ] 把对应分类入口页的 Card 状态由“待补充”改为“已完成”（恢复 `href`、移除 `card-pending`、恢复箭头）
- [ ] 移动端可读，表格可横向滚动
- [ ] 文件大小约 25–45 KB，可见正文约 8,000–20,000 字
- [ ] 更新本文件第 2、3 节的完成数与勾选状态
- [ ] 运行第 6 节的断链检查，确认新页面无新增错误

### 推荐复用骨架

优先复制 `networking/vpc.html` 或 `compute/ec2.html` 的 `<style>`、顶部结构、目录脚本和速记卡脚本，再替换正文。历史归档 `old/` 不读取、不复制、不复用。

---

## 6. 中断后如何继续

### 6.1 恢复步骤

1. 先看 `git status`，确认第 7 节的工作区状态。
2. 打开本文件第 3 节，从 P0 且 `[ ]` 的第一项开始。
3. 不要读取 `old/` 历史归档；所有正文从零编写，只参考现有 37 篇正文的结构与写法。
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
skip_dirs = {'old', 'input', '.git'}

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

当前工作区状态：

```text
 M PROGRESS.md
 M index.html
 M networking/index.html
?? networking/global-accelerator.html
?? networking/privatelink.html
```

含义：Global Accelerator / PrivateLink 正文、网络分类卡片、首页统计和本进度文档尚未提交。继续写作前可提交这些变更，或继续新增正文。

---

## 8. 已知问题与待决策

### 8.1 已解决：导航生成器已移除

旧生成器（原 `tools/generate_index.py`，后归档到 `old/tools/`）已删除，根 `index.html` 继续手工维护；README 中的生成器命令、`html-files.js` 说明已移除。新增正文后只需更新对应分类入口页。

### 8.2 已解决：文件命名规范已统一

README 中的 `aws-sap-c02-<主题>-<内容>.html` 旧规范已删除。当前统一使用“分类目录 + 小写短文件名”（如 `networking/vpc.html`），新增正文沿用此形式。

### 8.3 已解决：Outposts / Local Zones / Wavelength 主题重叠

- `hybrid-edge/index.html` 存在，但根页没有入口。
- `compute/outposts-wavelength.html` 作为唯一正文，统一覆盖三项服务与选型。

**处理结果（2026-11-02）：** Outposts / Local Zones / Wavelength 内容归入计算分类；未创建 `hybrid-edge/outposts.html` 或 `hybrid-edge/local-zones-wavelength.html`，避免重复内容。`hybrid-edge` 是否挂到根页仍是独立导航决策。

### 8.4 已解决：跨分类链接与数据库专题页

| 位置 | 当前链接 | 问题 |
|---|---|---|
| `analytics/index.html` | `../database/redshift.html` | 已链接到数据库模块 Redshift 正文 |
| `migration/index.html` | `../database/dms-sct.html` | 已链接到数据库模块 DMS/SCT 正文 |
| `database/index.html` | 本地 Redshift 与 DMS/SCT 页面 | 两篇正文已创建，分类卡片已开放 |

**处理结果（2026-11-02）：** 已创建数据库专题正文并恢复跨分类可用入口；分析/迁移卡片保留“见数据库模块”提示，不再显示待补充状态。

### 8.5 已解决：App Runner 卡片与正文

`compute/index.html` 中 App Runner 卡片已链接到 `app-runner.html`，正文已完成并开放访问。

### 8.6 P2：首页统计与事实不符

- 首页写“74 个文档”，实际 37 篇正文 + 12 个分类入口 + 根页。
- 首页写“529 道真题”，实际只有 CSV 原料，页面内约 148 道手写场景题。
- 首页写“11 大类”，实际有 12 个分类入口页（`hybrid-edge` 未挂载）。
- `networking` 首页服务数与分类页数量不一致。**已处理（2026-11-02）：** 根页和分类页统一为 9 项。

建议：在内容未完成前改为“37 篇已上线 / 41 篇待补 / 529 道题库待整理”，或完成后再恢复宣传数字。

**已处理（2026-11-02）：** 首页统计已改为“37 / 78 篇正文已完成”“529 道题库待整理”，页脚同步调整；网络和计算分类进度分别为 9 / 9。

### 8.7 P2：历史归档与部署

- `old/` 下 10 篇历史正文均未挂到新导航，且不应读取；它们会被 `.gitlab-ci.yml` 一起发布到 `public/`。
- 其中 1 篇为 0 字节，不能使用。
- `input/exam.csv` 是参考考题库，也会被发布到 `public/`。
- 历史正文风格与新正文不一致，直接发布会让访问者看到两套设计。

**待决策：** `old/` 作为本地归档并从 Pages 构建排除，还是彻底删除；`input/` 是否随站点发布。

### 8.8 P3：小一致性问题

- `networking/direct-connect.html` 缺少其他 5 篇都有的“官方资料”区块。
- `networking/cloudfront.html`、`direct-connect.html` 没有“快速自测”，不算错误，但与其余 4 篇不完全一致。
- 根页的“架构设计模式”卡片指向不存在的 `architecture-patterns.html`；**已处理（2026-11-02）**：入口改为“待补充”并禁用跳转，根页已无断链。

---

## 9. 建议的续写顺序（下一批 10 篇）

| 顺序 | 文件 | 理由 | 编写方式 |
|---:|---|---|---|
| ~~1~~ | ~~`networking/vpn.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~2~~ | ~~`networking/transit-gateway.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~3~~ | ~~`networking/route53.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~4~~ | ~~`compute/auto-scaling.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~5~~ | ~~`compute/lambda.html`~~ | ✅ 已完成（2026-11-02） | 从零编写；与 CloudFront/Edge 交叉引用 |
| ~~6~~ | ~~`storage/ebs.html`~~ | ✅ 已完成（2026-11-02） | 从零编写；引用 EC2 实例存储对比 |
| ~~7~~ | ~~`storage/efs.html`~~ | ✅ 已完成（2026-11-02） | 从零编写；引用 EBS 块存储对比 |
| ~~8~~ | ~~`database/rds-aurora.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~9~~ | ~~`database/dynamodb.html`~~ | ✅ 已完成（2026-11-02） | 从零编写 |
| ~~10~~ | ~~`security/kms-cloudhsm.html`~~ | ✅ 已完成（2026-11-02） | 从零编写；引用 S3 加密章节 |

这批 10 篇均已完成。下一步按第 6.1 节从未完成的 P0 项继续，建议先写 `application-integration/sqs-sns.html`，再处理题库化与全站校准。

---

## 10. 历史归档说明

`old/` 目录仅作为历史版本留档，**不读取、不作为续写素材、不复用其中样式或结构**。新正文一律基于现有 37 篇正文的模板从零编写。

是否保留、删除或从 Pages 构建中排除，见第 8.7 节。

---

## 11. 进度更新记录

| 日期 | 完成内容 | 变更文件 | 下一步 |
|---|---|---|---|
| 2026-11-02 | 建立进度基线：6 篇正文、72 篇待补、529 题未题库化 | `PROGRESS.md` | 从 `networking/vpn.html` 开始 |
| 2026-11-02 | 新增 `networking/vpn.html`：13 个章节、6 道场景题、18 张速记卡、3 道快速自测；断链清单由 76 条（含跨目录重复）降至 75 条，`vpn.html` 无新增断链 | `networking/vpn.html`、`PROGRESS.md` | 下一篇 `networking/transit-gateway.html` |
| 2026-11-02 | 新增 `networking/transit-gateway.html`：14 个章节、6 道场景题、18 张速记卡、3 道快速自测；断链清单由 75 条降至 74 条 | `networking/transit-gateway.html`、`PROGRESS.md` | 下一篇 `networking/route53.html` |
| 2026-11-02 | 新增 `networking/route53.html`：13 个章节、6 道场景题、18 张速记卡、5 道快速自测；覆盖七种路由策略、健康检查、Public/Private 托管区、Resolver 混合云 DNS、Traffic Flow、与 CloudFront/ELB/S3/GA 集成；断链清单中 `route53.html` 断链消除 | `networking/route53.html`、`PROGRESS.md` | 下一篇 `compute/auto-scaling.html` |
| 2026-11-02 | 全站 12 个分类入口页与根页卡片加上“已完成 / 待补充”状态标记；未创建正文的卡片取消 `href` 并禁用点击；修正 App Runner 错误链接、移除跨模块卡片内嵌链接；首页统计与页脚校准。断链检查：根页与分类页 0 条断链 | `index.html`、12 个 `*/index.html`、`PROGRESS.md` | 继续 `compute/auto-scaling.html` |
| 2026-11-02 | 新增 `compute/auto-scaling.html`：12 个章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖四种扩展策略、冷却期、生命周期钩子、混合实例策略、终止保护、暖池、健康检查；`compute/index.html` 卡片改为已完成 | `compute/auto-scaling.html`、`compute/index.html`、`PROGRESS.md` | 下一篇 `compute/lambda.html` |
| 2026-11-02 | 新增 `compute/lambda.html`：10 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖调用模式、事件源映射、并发、失败处理、冷启动、VPC 网络、权限、版本发布及 Lambda@Edge；`compute/index.html` 卡片改为已完成 | `compute/lambda.html`、`compute/index.html`、`PROGRESS.md` | 下一篇 `storage/ebs.html` |
| 2026-11-02 | 新增 `storage/ebs.html`：8 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖卷型、性能、快照、加密、扩容、Multi-Attach、备份与灾备；`storage/index.html` 卡片改为已完成 | `storage/ebs.html`、`storage/index.html`、`index.html`、`PROGRESS.md` | 下一篇 `storage/efs.html` |
| 2026-11-02 | 新增 `management/config.html`：12 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖配置记录、Rules、修复、Conformance Pack、Aggregator；管理分类卡片及首页统计更新，正文完成数校准为 24 / 78 | `management/config.html`、`management/index.html`、`index.html`、`PROGRESS.md` | 下一篇 `application-integration/sqs-sns.html`（P0） |
| 2026-11-02 | 新增 `networking/privatelink.html`：11 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖 Interface Endpoint、Endpoint Service、DNS、连接治理及 PrivateLink / Peering 选型；网络模块进度更新至 8 / 9，正文完成数校准为 25 / 78 | `networking/privatelink.html`、`networking/index.html`、`PROGRESS.md` | 按用户要求继续 P1：`networking/global-accelerator.html` |
| 2026-11-02 | 完成数据库模块剩余 4 篇：ElastiCache、Redshift、DocumentDB/Neptune、DMS/SCT；各含 6 道场景题和 18 张速记卡，模块进度更新至 6 / 6；恢复分析与迁移分类的跨模块入口 | 4 篇 `database/*.html`、`database/index.html`、`analytics/index.html`、`migration/index.html`、`PROGRESS.md` | 继续其他未完成分类 |
| 2026-11-02 | 新增 `networking/global-accelerator.html`：12 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖静态 Anycast IP、Standard / Custom Routing、端点组、流量拨盘、健康检查及 CloudFront 对比；网络模块完成 9 / 9，正文完成数校准为 26 / 78 | `networking/global-accelerator.html`、`networking/index.html`、`index.html`、`PROGRESS.md` | P0：`application-integration/sqs-sns.html` |
| 2026-11-02 | 新增 `application-integration/sqs-sns.html`：9 个主题章节、6 道场景题、18 张速记卡、3 道快速自测；覆盖 SQS Standard/FIFO、可见性超时、长轮询、DLQ、SNS Fan-out、过滤、授权与加密；应用集成进度更新至 1 / 6，正文完成数校准为 27 / 78 | `application-integration/sqs-sns.html`、`application-integration/index.html`、`index.html`、`PROGRESS.md` | P0：`application-integration/eventbridge.html` |
| 2026-11-02 | 完成应用集成剩余 5 篇正文：EventBridge、Step Functions、API Gateway、AppSync、Amazon MQ；每篇含 6 道场景题、16 张速记卡、3 道快速自测；分类页 6 / 6、首页总数和进度统计同步更新为 32 / 78 | `application-integration/*.html`、`application-integration/index.html`、`index.html`、`PROGRESS.md` | P0：`analytics/glue.html` |
| 2026-11-02 | 完成计算分类剩余 5 篇正文：EKS、App Runner、Elastic Beanstalk、Batch、Outposts/Local Zones/Wavelength；每篇含 6 道场景题、18 张速记卡、3 道快速自测；计算分类更新为 9 / 9，首页及进度统计更新为 37 / 78；边缘主题采用唯一计算正文避免重复 | `compute/*.html`、`compute/index.html`、`index.html`、`PROGRESS.md` | 下一分类按优先级继续 |

> 后续每完成一批，在上表追加一行；不要删除旧记录，方便回溯。
