export const awsRules = [
    {
        category: "Backup",
        resource: "Backup Vault",
        option: "Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Cloudfront",
        resource: "Cloudfront Distribution",
        option: "Logging > Logging Enabled",
        type: "ロギングモニタリング",
        description: "ロギング無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Cloudfront",
        resource: "Cloudfront Distribution",
        option: "Linked Waf Web Acl Name",
        type: "ネットワークセキュリティ",
        description: "ウェブファイアウォールの欠如",
        risk: "high",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "Cloudfront",
        resource: "Cloudfront Distribution",
        option: "Viewer Certificate > Default Certificate Enabled, Viewer Certificate > Minimum Protocol Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Cloudfront",
        resource: "Cloudfront Distribution",
        option: "Cache Behavior > Viewer Protocol Policy",
        type: "暗号化",
        description: "すべてのプロトコルを許可",
        risk: "critical",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Cloudtrail",
        resource: "Cloudtrail",
        option: "Multi Region Enabled",
        type: "ロギングモニタリング",
        description: "マルチリージョン設定の無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Cloudwatch",
        resource: "Cloudwatch",
        option: "Retention In Days",
        type: "ロギングモニタリング",
        description: "ログ保管期間1年未満",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Cloudwatch",
        resource: "Cloudwatch",
        option: "Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Dynamodb",
        resource: "Dynamodb",
        option: "Point In Time Recovery Enabled",
        type: "データ保護",
        description: "特定時点復元設定無効化",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Dynamodb",
        resource: "Dynamodb",
        option: "Server Side Encryption > Encryption Enabled",
        type: "暗号化",
        description: "暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Ec2",
        resource: "Instance",
        option: "Http Tokens",
        type: "アクセス制御",
        description: "セッショントークン無効化",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Ecr",
        resource: "Ecr Repository",
        option: "Policy > Effect, Policy > Enabled Not Action, Policy > Actions",
        type: "アクセス制御",
        description: "全体の権限付与",
        risk: "high",
        iso: "8.1",
        csap: "10.2.1.",
        isms: "2.5",
        evaluation: "7.2.2",
    },
    {
        category: "Ecr",
        resource: "Ecr Repository",
        option: "Scan On Push",
        type: "データ保護",
        description: "イメージスキャン無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Ecr",
        resource: "Ecr Repository",
        option: "Image Tag Mutability",
        type: "データ保護",
        description: "タグ変更可能",
        risk: "high",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Ecr",
        resource: "Ecr Repository",
        option: "Encryption Type",
        type: "暗号化",
        description:
            "KMS未適用 >> AES256 暗号化を使用してイメージデータが強力に保護される。",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Ecs",
        resource: "Ecs Cluster",
        option: "Set Container Insights",
        type: "ロギングモニタリング",
        description: "cloudwatch container insights 無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Ecs",
        resource: "Ecs Cluster",
        option: "Logging",
        type: "ロギングモニタリング",
        description: "ログ無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Ecs",
        resource: "Ecs Cluster",
        option: "Logging, Cloud Watch Encryption Enabled",
        type: "暗号化",
        description: "ログ暗号化無効化",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Ecs",
        resource: "Ecs Cluster",
        option: "Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Efs",
        resource: "Efs",
        option: "Access Point > Root Directory Path",
        type: "アクセス制御",
        description: "全体ファイルシステム露出",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Efs",
        resource: "Efs",
        option: "Enable Encrypted",
        type: "暗号化",
        description: "暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Eks",
        resource: "Eks Cluster",
        option: "Enabled Cluster Log Types",
        type: "ロギングモニタリング",
        description: "ロギング設定の一部を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Eks",
        resource: "Eks Cluster",
        option: "Endpoint Access Type, Public Access Cidrs",
        type: "アクセス制御",
        description: "publicネットワークにcidr全体を露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Eks",
        resource: "Eks Cluster",
        option: "Endpoint Access Type",
        type: "アクセス制御",
        description: "eks public 露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Eks",
        resource: "Eks Cluster",
        option: "Enabled Encryption",
        type: "暗号化",
        description: "secret 暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Elasticache",
        resource: "Elasticache Cluster",
        option: "Snapshot Retention Limit",
        type: "データ保護",
        description: "スナップショット保持期間設定の不在",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Elasticsearch",
        resource: "Elasticsearch",
        option: "Tls Security Policy",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Elasticsearch",
        resource: "Elasticsearch",
        option: "Encryption > Data At Rest Encryption Enabled",
        type: "暗号化",
        description: "保存されたデータ暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Elasticsearch",
        resource: "Elasticsearch",
        option: "Encryption > Node To Node Encryption Enabled",
        type: "暗号化",
        description: "ノード間トラフィック暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Elasticsearch",
        resource: "Elasticsearch",
        option: "Encryption > Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Elasticsearch",
        resource: "Elasticsearch",
        option: "Encryption > Enforce Https",
        type: "暗号化",
        description: "暗号化されていないプロトコルが使用可能",
        risk: "critical",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Kms",
        resource: "Kms Key",
        option: "Enable Key Rotation",
        type: "暗号化",
        description: "キーの自動回転を無効化",
        risk: "medium",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Lambda Function",
        resource: "Lambda Function",
        option: "Tracing Enabled",
        type: "ロギングモニタリング",
        description: "ラムダX-Ray追跡を無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Lambda Function",
        resource: "Lambda Function",
        option: "Environment Variable",
        type: "データ保護",
        description: "環境変数にシークレット情報が含まれる",
        risk: "critical",
        iso: "-",
        csap: "9.1.1.",
        isms: "2.10",
        evaluation: "8.1.1",
    },
    {
        category: "Lambda Function",
        resource: "Lambda Function",
        option: "Included Subnet Names, Linked Security Group Names",
        type: "ネットワークセキュリティ",
        description: "security group 未設定",
        risk: "high",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "Lb",
        resource: "Lb",
        option: "Internal",
        type: "アクセス制御",
        description: "ロードバランサー外部露出",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Lb",
        resource: "Lb",
        option: "Drop Invalid Header",
        type: "ネットワークセキュリティ",
        description: "不適切なヘッダーのブロック設定の無効化",
        risk: "high",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "Lb",
        resource: "Lb",
        option: "Listener > Ssl Policy",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Lb",
        resource: "Lb",
        option: "Listener > Protocol",
        type: "暗号化",
        description: "暗号化されていないプロトコルを使用",
        risk: "critical",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Rds",
        resource: "Aurora",
        option: "Monitoring > Performance Insights Enabled",
        type: "ロギングモニタリング",
        description: "性能インサイトを無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Rds",
        resource: "Aurora",
        option: "Multi Az Enabled",
        type: "データ保護",
        description: "マルチAZ設定を無効化",
        risk: "high",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "Rds",
        resource: "Aurora",
        option: "Backup > Backup Retention Period",
        type: "データ保護",
        description: "データ保管期間のデフォルト値を使用",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Rds",
        resource: "Aurora",
        option: "Monitoring > Performance Insights Enabled, Monitoring > Kms Key Name",
        type: "暗号化",
        description: "性能インサイト暗号化無効化",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Rds",
        resource: "Aurora",
        option: "Encryption > Storage Encrypted",
        type: "暗号化",
        description: "rdsクラスター暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Monitoring > Performance Insights Enabled",
        type: "ロギングモニタリング",
        description: "性能インサイトを無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Multi Az Enabled",
        type: "データ保護",
        description: "マルチAZ設定を無効化",
        risk: "high",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Publicly Accessible",
        type: "アクセス制御",
        description: "データベースのパブリックアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Backup > Backup Retention Period",
        type: "データ保護",
        description: "データ保管期間のデフォルト値を使用",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Monitoring > Performance Insights Enabled, Monitoring > Kms Key Name",
        type: "暗号化",
        description: "性能インサイト暗号化無効化",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Rds",
        resource: "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        option: "Encryption > Storage Encrypted",
        type: "暗号化",
        description: "rdsデータベース暗号化無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Enabled Logging",
        type: "ロギングモニタリング",
        description: "ロギングを無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Public Access Block > Block Public Acls",
        type: "アクセス制御",
        description: "パブリックACLのブロックを無効化",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Public Access Block > Block Public Policy",
        type: "アクセス制御",
        description: "パブリックポリシーのブロックを無効化",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Public Access Block > Ignore Public Acls",
        type: "アクセス制御",
        description: "パブリックACLの無視を無効化",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Public Access Block > Restrict Public Buckets",
        type: "アクセス制御",
        description: "パブリックバケットポリシー制限を無効化",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Versioning Status",
        type: "データ保護",
        description: "バージョン管理を停止",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Sse Algorithm",
        type: "暗号化",
        description:
            "KMS未適用 >> AES256 暗号化を使用してイメージデータが強力に保護される。",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "S3",
        resource: "S3 Bucket",
        option: "Sse Algorithm, Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Sns",
        resource: "Sns Topic",
        option: "Kms Key Name",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Vpc",
        resource: "Endpoint Service",
        option: "Acceptance Required",
        type: "アクセス制御",
        description: "",
        risk: "low",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのFTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのSSHアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのHTTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのRDPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Cidr Block",
        type: "アクセス制御",
        description: "cidr全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Acl",
        option: "Ingress > Protocol",
        type: "アクセス制御",
        description: "ポート全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Network Firewall",
        option: "Enabled Delete Protection",
        type: "ネットワークセキュリティ",
        description: "削除保護設定の無効化",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Vpc",
        resource: "Network Firewall",
        option: "Encryption Configuration > Enabled Custom Configuration",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Vpc",
        resource: "Network Firewall Policy",
        option: "Encryption Configuration > Enabled Custom Configuration",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Vpc",
        resource: "Network Firewall Rule Group",
        option: "Encryption Configuration > Enabled Custom Configuration",
        type: "暗号化",
        description: "KMS未適用",
        risk: "low",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Description",
        type: "ロギングモニタリング",
        description:
            "セキュリティグループに説明がないため、管理および識別が困難",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Description",
        type: "ロギングモニタリング",
        description:
            "インバウンドルールに説明がないため、特定のルールの目的を理解するのが難しい。",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Egress > Description",
        type: "ロギングモニタリング",
        description:
            "アウトバウンドルールに説明がないため、特定のルールの目的を理解するのが難しい",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Cidr Block",
        type: "アクセス制御",
        description: "cidr 全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Cidr Block, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのFTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Cidr Block, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのSSHアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Cidr Block, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのHTTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Ingress > Cidr Block, Ingress > From Port, To Port",
        type: "アクセス制御",
        description: "インターネットからのRDPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Security Group",
        option: "Egress > Cidr Block",
        type: "アクセス制御",
        description: "cidr 全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Vpc",
        resource: "Subnet",
        option: "Pip Enable",
        type: "アクセス制御",
        description: "subnet public 露出",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
]
