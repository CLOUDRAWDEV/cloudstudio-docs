export const azureRules = [
    {
        category: "App Service",
        resource: "Linux App Service",
        option: "Failed Request Tracing Enabled",
        type: "ロギングモニタリング",
        description: "失敗したリクエストの追跡設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "App Service",
        resource: "Linux App Service",
        option: "Detailed Error Messages Enabled",
        type: "ロギングモニタリング",
        description: "エラーページの保存設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "App Service",
        resource: "Linux App Service",
        option: "Auth Settings Enabled",
        type: "ユーザー確認と認証",
        description: "認証無効化",
        risk: "medium",
        iso: "8.1",
        csap: "10.3.3.",
        isms: "2.5",
        evaluation: "7.3.1",
    },
    {
        category: "App Service",
        resource: "Linux App Service\n",
        option: "Ftps State",
        type: "アクセス制御",
        description: "暗号化されていないFTPプロトコルを許可",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "App Service",
        resource: "Linux App Service ",
        option: "Http2 Enabled",
        type: "ネットワークセキュリティ",
        description: "HTTP2未適用",
        risk: "low",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "App Service",
        resource: "Service Pllaan",
        option: "Sku Tier",
        type: "ネットワークセキュリティ",
        description: "always on 無効化されたSKUの使用",
        risk: "low",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "App Service",
        resource: "Windows App Service",
        option: "Failed Request Tracing Enabled",
        type: "ロギングモニタリング",
        description: "失敗したリクエストの追跡設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "App Service",
        resource: "Windows App Service",
        option: "Detailed Error Messages Enabled",
        type: "ロギングモニタリング",
        description: "エラーページの保存設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "App Service",
        resource: "Windows App Service",
        option: "Auth Settings Enabled",
        type: "ユーザー確認と認証",
        description: "認証無効化",
        risk: "medium",
        iso: "8.1",
        csap: "10.3.3.",
        isms: "2.5",
        evaluation: "7.3.1",
    },
    {
        category: "App Service",
        resource: "Windows App Service",
        option: "Http2 Enabled",
        type: "ネットワークセキュリティ",
        description: "HTTP2未適用",
        risk: "low",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "App Service",
        resource: "Windows App Service",
        option: "Ftps State",
        type: "アクセス制御",
        description: "暗号化されていないFTPプロトコルを許可",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Compute",
        resource: "Linux Virtual Machine Sacle Set",
        option: "Enable Ssh Key Authentication",
        type: "ユーザー確認と認証",
        description: "SSHキー認証未使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Compute",
        resource: "Linux Virtual Mamchine",
        option: "Enable Ssh Key Authentication",
        type: "ユーザー確認と認証",
        description: "SSHキー認証未使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Container",
        resource: "Container Registry",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Container",
        resource: "Container Registry",
        option: "Admin Enabled",
        type: "アクセス制御",
        description: "管理者有効化",
        risk: "medium",
        iso: "8.1",
        csap: "10.2.1.",
        isms: "2.5",
        evaluation: "7.2.2",
    },
    {
        category: "Container",
        resource: "Kubernetes",
        option: "Default Node Pool > Enable Node Public Ip",
        type: "アクセス制御",
        description: "ノード public ip 有効化",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Container",
        resource: "Kubernetes Cluster",
        option: "Sku Tier",
        type: "ネットワークセキュリティ",
        description: "Free skuはUptime SLAサービス未提供",
        risk: "high",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "Container",
        resource: "Kubernetes Cluster",
        option: "Default Node Pool > Max Pods",
        type: "ネットワークセキュリティ",
        description: "作成可能な最大Pod数が不足",
        risk: "high",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "Container",
        resource: "Kubernetes Cluster",
        option: "Api Server Authorized Ip Ranges",
        type: "アクセス制御",
        description: "アクセス可能IP全範囲設定",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Container",
        resource: "Kubernetes Cluster",
        option: "Network Policy",
        type: "ネットワークセキュリティ",
        description: "network policy 未設定",
        risk: "critical",
        iso: "8.1",
        csap: "11.1.1",
        isms: "2.10",
        evaluation: "8.3.1",
    },
    {
        category: "Cosmosdb",
        resource:
            "Cosmosdb Cassandra,\nCosmosdb Gremlin,\nCosmosdb Mongo,\nCosmosdb Sql,\nCosmosdb Table",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Auditing Policy > Enable Storage Destination, Auditing Policy > Enable Log Analytics Destination",
        type: "ロギングモニタリング",
        description: "監査政策の無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Enable Storage Destination, Storage Retention Days",
        type: "ロギングモニタリング",
        description: "ログ保管期間が短い",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Security Alert Policy > Alert Policy State, Security Alert Policy > Disabled Alerts",
        type: "ロギングモニタリング",
        description: "特定の脅威通知を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Retention Days",
        type: "ロギングモニタリング",
        description: "ログ保管期間が短い",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Email Addresses",
        type: "ロギングモニタリング",
        description: "セキュリティ警告を受けるメールアドレス未設定",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Email Account Admins",
        type: "ロギングモニタリング",
        description: "購読者のセキュリティ警告を無効化",
        risk: "low",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Security Alert Policy > Alert Policy State",
        type: "ロギングモニタリング",
        description: "security alert 無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mssql Server",
        option: "Minimum Tls Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Database",
        resource: "Mysql",
        option: "Threat Detection Enabled",
        type: "ロギングモニタリング",
        description: "脅威検出を無効化",
        risk: "high",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mysql",
        option: "Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",
        type: "アクセス制御",
        description: "アクセス可能ip 全範囲設定",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Mysql",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Mysql",
        option: "Minimum Tls Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Database",
        resource: "Mysql",
        option: "Ssl Enforcement Enabled",
        type: "ネットワークセキュリティ",
        description: "暗号化接続未適用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Database",
        resource: "Mysql Database",
        option: "Enable Storage Destination, Storage Retention Days",
        type: "ロギングモニタリング",
        description: "ログ保管期間が短い",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mysql Database",
        option: "Auditing Policy > Enable Storage Destination, Auditing Policy > Enable Log Analytics\nDestination",
        type: "ロギングモニタリング",
        description: "監査政策の無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Mysql Database",
        option: "Zone Redundant",
        type: "データ保護",
        description: "zone重複性を無効化",
        risk: "high",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Database",
        resource: "Mysql Flexible",
        option: "Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",
        type: "アクセス制御",
        description: "アクセス可能ip 全範囲設定",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Mysql Server",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Configuration > Log Retention",
        type: "ロギングモニタリング",
        description: "ログ保存を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Configuration > Connection Throttling",
        type: "ロギングモニタリング",
        description: "connection throttling設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Configuration > Log Checkpoint",
        type: "ロギングモニタリング",
        description: "log checkpoint設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Configuration > Log Connections",
        type: "ロギングモニタリング",
        description: "log connections設定を無効化",
        risk: "medium",
        iso: "9.1",
        csap: "7.2.2",
        isms: "2.11",
        evaluation: "1.4.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",
        type: "アクセス制御",
        description: "アクセス可能ip 全範囲設定",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Minimum Tls Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Database",
        resource: "Postgresql",
        option: "Ssl Enforcement Enabled",
        type: "ネットワークセキュリティ",
        description: "暗号化接続未適用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Database",
        resource: "Postgresql Flexible",
        option: "Geo Redundant Backup Enabled",
        type: "データ保護",
        description: "ローカル重複バックアップを無効化",
        risk: "high",
        iso: "8.1",
        csap: "6.2.2.",
        isms: "2.9",
        evaluation: "5.2.1",
    },
    {
        category: "Database",
        resource: "Postgresql Flexible",
        option: "Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",
        type: "アクセス制御",
        description: "アクセス可能ip 全範囲設定",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Key Vault",
        resource: "Key Vault",
        option: "Network Acl Action",
        type: "アクセス制御",
        description: "設定したIPと一致しない場合は拒否",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Key Vault",
        resource: "Key Vault",
        option: "Purge Protection Enabled",
        type: "データ保護",
        description: "削除保護を無効化",
        risk: "medium",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Key Vault",
        resource: "Key Vault",
        option: "Key Vault Secret > Content Type",
        type: "暗号化",
        description: "secret内容タイプ未設定",
        risk: "low",
        iso: "8.1",
        csap: "12.3.2.",
        isms: "2.7",
        evaluation: "10.2.2",
    },
    {
        category: "Key Vault",
        resource: "Key Vault",
        option: "Key Vault Secret > Enabled Expiration Date",
        type: "暗号化",
        description: "secret満了設定を無効化",
        risk: "low",
        iso: "8.1",
        csap: "12.3.2.",
        isms: "2.7",
        evaluation: "10.2.2",
    },
    {
        category: "Key Vault",
        resource: "Key Vault",
        option: "Key Vault Key > Enabled Expiration Date",
        type: "暗号化",
        description: "key満了設定を無効化",
        risk: "medium",
        iso: "8.1",
        csap: "12.3.2.",
        isms: "2.7",
        evaluation: "10.2.2",
    },
    {
        category: "Network",
        resource: "Application Gateway",
        option: "Http Listener > Protocol",
        type: "アクセス制御",
        description: "暗号化されないhttpプロトコルを使用",
        risk: "critical",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",
        type: "アクセス制御",
        description: "インターネットからのFTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",
        type: "アクセス制御",
        description: "インターネットからのSSHアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",
        type: "アクセス制御",
        description: "インターネットからのHTTPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",
        type: "アクセス制御",
        description: "インターネットからのRDPアクセスを許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes / ",
        type: "アクセス制御",
        description: "cidr全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Network Security Group",
        option: "Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes / ",
        type: "アクセス制御",
        description: "cidr全体露出",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Network",
        resource: "Web Application Firewall Policy",
        option: "Owasp Version",
        type: "データ保護",
        description: "log4jshellを防御するためのルールがないバージョンを使用",
        risk: "critical",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Redis Cache",
        resource: "Redis Cache",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Redis Cache",
        resource: "Redis Cache",
        option: "Sku Name",
        type: " データ保護",
        description: "複製機能を提供していないSKUを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.1.4.",
        isms: "2.9",
        evaluation: "10.1.4",
    },
    {
        category: "Redis Cache",
        resource: "Redis Cache",
        option: "Minimum Tls Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Redis Cache",
        resource: "Redis Cache",
        option: "Enable Non Ssl Port",
        type: "アクセス制御",
        description: "暗号化されていない通信を許可",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Storage",
        resource: "Storage Account",
        option: "Networking > Bypass",
        type: "アクセス制御",
        description: "azure service 迂回不可能",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Storage",
        resource: "Storage Account",
        option: "Storage Container > Container Access Type",
        type: "アクセス制御",
        description: "公開アクセス項目の設定",
        risk: "high",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Storage",
        resource: "Storage Account",
        option: "Public Network Access Enabled",
        type: "アクセス制御",
        description: "public ネットワークアクセス許可",
        risk: "critical",
        iso: "8.1",
        csap: "10.1.1.",
        isms: "2.6",
        evaluation: "7.1.1",
    },
    {
        category: "Storage",
        resource: "Storage Account",
        option: "Minimum Tls Version",
        type: "暗号化",
        description: "脆弱なtlsバージョンを使用",
        risk: "high",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
    {
        category: "Storage",
        resource: "Storage Account",
        option: "Enable Https Traffic Only",
        type: "アクセス制御",
        description: "暗号化されていないhttpプロトコルを使用",
        risk: "critical",
        iso: "8.1",
        csap: "12.3.1.",
        isms: "2.7",
        evaluation: "10.2.1",
    },
]
