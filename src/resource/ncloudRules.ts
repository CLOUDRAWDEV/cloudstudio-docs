export const ncloudRules = [
    {
        "category": "Compute",
        "resource": "Launch Configuration",
        "option": "Is Encrypted Volume",
        "type": "암호화",
        "description": "block storage 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Compute",
        "resource": "Server",
        "option": "Is Encrypted Base Block Storage Volume",
        "type": "암호화",
        "description": "block storage 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Container",
        "resource": "Kubernetes Cluster",
        "option": "Enable Audit Log",
        "type": "로깅 모니터링",
        "description": "감사 로깅 비활성화",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Container",
        "resource": "Kubernetes Cluster",
        "option": "Enable Public Subnet Network",
        "type": "접근 통제",
        "description": "public 네트워크 접근 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Database",
        "resource": "Mongodb",
        "option": "Backup File Retention Period",
        "type": "데이터 보호",
        "description": "백업 보존 기간 짧음",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Database",
        "resource": "Mssql",
        "option": "Backup File Retention Period",
        "type": "데이터 보호",
        "description": "백업 보존 기간 짧음",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Database",
        "resource": "Mysql",
        "option": "Enable Backup",
        "type": "데이터 보호",
        "description": "백업 비활성화",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Database",
        "resource": "Mysql",
        "option": "Backup File Retention Period",
        "type": "데이터 보호",
        "description": "백업 보존 기간 짧음",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Database",
        "resource": "Mysql",
        "option": "Enable High Availability, Is Storage Encryption",
        "type": "암호화",
        "description": "스토리지 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Database",
        "resource": "Redis",
        "option": "Enable Backup",
        "type": "데이터 보호",
        "description": "백업 비활성화",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Database",
        "resource": "Redis",
        "option": "Backup File Retention Period",
        "type": "데이터 보호",
        "description": "백업 보존 기간 짧음",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Acg Description",
        "type": "로깅 모니터링",
        "description": "설명 부재",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Description",
        "type": "로깅 모니터링",
        "description": "설명 부재",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Outbound Rule > Description",
        "type": "로깅 모니터링",
        "description": "설명 부재",
        "risk": "critical",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Ip Block",
        "type": "접근 통제",
        "description": "cidr 전체 범위 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 FTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 SSH 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 HTTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 RDP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Access Control Group",
        "option": "Outbound Rule > Ip Block",
        "type": "접근 통제",
        "description": "cidr 전체 범위 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Load Balancer",
        "option": "Network Type",
        "type": "접근 통제",
        "description": "public 네트워크 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Load Balancer",
        "option": "Listener > Tls Min Version Type",
        "type": "암호화",
        "description": "취약한 tls 버전 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Networking",
        "resource": "Load Balancer",
        "option": "Listener > Protocol",
        "type": "접근 통제",
        "description": "암호화 되지 않은 http 프로토콜 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Nacl Description",
        "type": "로깅 모니터링",
        "description": "설명 부재",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Ip Block",
        "type": "접근 통제",
        "description": "cidr 전체 범위 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "port 전체 범위 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Action, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 FTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Action, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 SSH 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Action, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 HTTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Inbound Rule > Ip Block, Inbound Rule > Action, Inbound Rule > Port Range",
        "type": "접근 통제",
        "description": "인터넷에서 RDP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Network Acl",
        "option": "Outbound Rule > Ip Block",
        "type": "접근 통제",
        "description": "cidr 전체 범위 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Public Ip",
        "option": "Target Server Name",
        "type": "접근 통제",
        "description": "public ip가 존재",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Networking",
        "resource": "Target Group",
        "option": "Protocol",
        "type": "접근 통제",
        "description": "암호화 되지 않은 http 프로토콜 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Storage",
        "resource": "Nas Volume",
        "option": "Is Encrypted",
        "type": "암호화",
        "description": "암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    }
]
