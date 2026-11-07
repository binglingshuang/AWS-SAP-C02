在应对 **AWS Certified Solutions Architect – Professional (SAP-C02)** 考试时，区分 **AWS Backup** 与 **AWS Elastic Disaster Recovery (AWS DRS)** 的适用场景和支持组件非常关键。这两者在灾备体系中扮演不同角色：AWS Backup 偏向**基于策略的数据保护、存档与合规备份**，而 AWS DRS 偏向**基于块级别的持续块复制（Continuous Block-level Replication）与低 RPO/RTO 的跨区/跨云灾难恢复**。

以下是两者的核心组件支持与记忆对比整理：

---

### 一、 AWS Backup（集中式备份与合规管理）

* **定位**：托管的策略性备份服务（Backup as a Service），统一管理跨 AWS 服务的备份、保留期、跨区域复制和冷存储转移。
* **支持的核心组件/服务**：
* **计算与存储**：
* **Amazon EC2** & **EBS**（卷和快照）
* **Amazon EFS**（文件系统）
* **Amazon FSx**（包括 FSx for Windows File Server, FSx for Lustre, FSx for OpenZFS, FSx for NetApp ONTAP）
* **Amazon S3**（支持 S3 桶备份）


* **数据库**：
* **Amazon RDS** & **Aurora**
* **Amazon DynamoDB**（支持高级备份特性）
* **Amazon DocumentDB**、**Amazon Neptune**


* **容器与混合架构**：
* **Amazon EKS**（支持 Kubernetes 集群状态与持久化存储挂载）
* **AWS Storage Gateway**（Volume Gateway 卷备份）


* **应用与架构**：
* **AWS CloudFormation**（通过 AWS Backup 支持对整个基础设施堆栈或关联资源的组合备份）




* **SAP-C02 考点提示**：
* 如果题目要求实现 **跨区域合规、长期归档（Cold Storage / Vault Lock）、按计划（Schedule）自动快照**，选 **AWS Backup**。



---

### 二、 AWS Elastic Disaster Recovery (AWS DRS)（灾难恢复与业务连续性）

* **定位**：主打极低的 **RPO（秒级）** 与 **RTO（分钟级）**，通过在源服务器（本地或云上）安装轻量代理（Agent），进行**块级别（Block-level）持续异步复制**的灾备服务。
* **支持的核心组件/服务**：
* **底层工作原理**：它**与具体的应用层无关（Application-agnostic）**，工作在 **操作系统层（OS-level）** 和存储卷块级别，因此几乎支持运行在兼容操作系统上的所有企业应用和数据库。
* **支持的操作系统**：
* 主流 **Linux** 发行版本（RHEL, CentOS, Ubuntu, Amazon Linux, SLES 等）
* **Windows Server** 版本


* **支持的应用与数据库（包括 SAP 架构）**：
* **SAP Workloads（SAP ERP / NetWeaver / S/4HANA 应用层）**：AWS DRS 非常常用于复制 SAP **应用服务器（Application Servers）**。
* **主流数据库**：支持运行在服务器上的 **SAP HANA、Oracle、SQL Server、MySQL、PostgreSQL** 等（针对大型或高事务率数据库，官方常结合数据库原生复制技术，如 SAP HANA System Replication (HSR)，而用 AWS DRS 负责应用层）。




* **SAP-C02 考点提示**：
* 如果题目场景是：**整个机房宕机（灾难恢复 DR）、需要实现秒级/极低 RPO、进行演练（Drill）而不中断主生产环境**，或者针对 **VMware、物理机、跨云到 AWS 的 Lift-and-Shift 级别灾备**，首选 **AWS DRS**。



---

### 三、 快速对比与记忆表（应对 SAP-C02 陷阱题）

| 维度 | AWS Backup | AWS Elastic Disaster Recovery (DRS) |
| --- | --- | --- |
| **核心目的** | 数据保护、合规审计、防勒索（Vault Lock）、长期保留 | 灾难恢复（Disaster Recovery）、快速故障转移（Failover/Failback） |
| **RPO / RTO** | 按照备份窗口（小时/天级别）计算，RPO 较大 | **极低 RPO（秒级）**，RTO 极快（分钟级） |
| **技术机制** | 基于 API 调度创建快照（Snapshot / Point-in-time backup） | **块级别（Block-level）持续实时复制** |
| **管理对象** | AWS 原生托管资源（RDS、EBS、S3、EFS、EKS 等） | 物理机、虚拟机（VMware/Hyper-V）、云上 EC2 的 **OS 及整机卷** |
| **SAP 场景典型用法** | 定期备份 SAP 关联的 EBS 卷、EFS 或 RDS 数据库 | 应对机房毁灭性灾难时，复制 SAP 应用服务器及整机环境（结合 HANA HSR） |