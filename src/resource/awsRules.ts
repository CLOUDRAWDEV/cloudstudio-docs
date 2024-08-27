export const awsRules = [
    {
        "category": "Backup",
        "resource": "Backup Vault",
        "option": "Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Cloudfront",
        "resource": "Cloudfront Distribution",
        "option": "Logging > Logging Enabled",
        "type": "로깅 모니터링",
        "description": "로깅 비활성화",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Cloudfront",
        "resource": "Cloudfront Distribution",
        "option": "Linked Waf Web Acl Name",
        "type": "네트워크 보안",
        "description": "웹 방화벽 부재",
        "risk": "high",
        "iso": "8.1",
        "csap": "11.1.1",
        "isms": "2.10",
        "evaluation": "8.3.1"
    },
    {
        "category": "Cloudfront",
        "resource": "Cloudfront Distribution",
        "option": "Viewer Certificate > Default Certificate Enabled, Viewer Certificate > Minimum Protocol Version",
        "type": "암호화",
        "description": "취약한 tls 버전 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Cloudfront",
        "resource": "Cloudfront Distribution",
        "option": "Cache Behavior > Viewer Protocol Policy",
        "type": "암호화",
        "description": "모든 프로토콜 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Cloudtrail",
        "resource": "Cloudtrail",
        "option": "Multi Region Enabled",
        "type": "로깅 모니터링",
        "description": "멀티 리전 설정 비활성화",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Cloudwatch",
        "resource": "Cloudwatch",
        "option": "Retention In Days",
        "type": "로깅 모니터링",
        "description": "로그 보관 기간 1년 미만",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Cloudwatch",
        "resource": "Cloudwatch",
        "option": "Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Dynamodb",
        "resource": "Dynamodb",
        "option": "Point In Time Recovery Enabled",
        "type": "데이터 보호",
        "description": "특정 시점 복구 설정 비활성화",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Dynamodb",
        "resource": "Dynamodb",
        "option": "Server Side Encryption > Encryption Enabled",
        "type": "암호화",
        "description": "암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Ec2",
        "resource": "Instance",
        "option": "Http Tokens",
        "type": "접근 통제",
        "description": "세션 토큰 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Ecr",
        "resource": "Ecr Repository",
        "option": "Policy > Effect, Policy > Enabled Not Action, Policy > Actions",
        "type": "접근 통제",
        "description": "전체 권한 부여",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Ecr",
        "resource": "Ecr Repository",
        "option": "Scan On Push",
        "type": "데이터 보호",
        "description": "이미지 스캔 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Ecr",
        "resource": "Ecr Repository",
        "option": "Image Tag Mutability",
        "type": "데이터 보호",
        "description": "태그 변경 가능",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Ecr",
        "resource": "Ecr Repository",
        "option": "Encryption Type",
        "type": "암호화",
        "description": "kms 미적용 >> AES256 암호화를 사용하여 이미지 데이터가 매우 강력하게 보호됨",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Ecs",
        "resource": "Ecs Cluster",
        "option": "Set Container Insights",
        "type": "로깅 모니터링",
        "description": "cloudwatch container insights 비활성화",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Ecs",
        "resource": "Ecs Cluster",
        "option": "Logging",
        "type": "로깅 모니터링",
        "description": "로그 비활성화",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Ecs",
        "resource": "Ecs Cluster",
        "option": "Logging, Cloud Watch Encryption Enabled",
        "type": "암호화",
        "description": "로그 암호화 비활성화",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Ecs",
        "resource": "Ecs Cluster",
        "option": "Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Efs",
        "resource": "Efs",
        "option": "Access Point > Root Directory Path",
        "type": "접근 통제",
        "description": "전체 파일시스템 노출",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Efs",
        "resource": "Efs",
        "option": "Enable Encrypted",
        "type": "암호화",
        "description": "암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Eks",
        "resource": "Eks Cluster",
        "option": "Enabled Cluster Log Types",
        "type": "로깅 모니터링",
        "description": "로깅 설정 일부 비활성화",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Eks",
        "resource": "Eks Cluster",
        "option": "Endpoint Access Type, Public Access Cidrs",
        "type": "접근 통제",
        "description": "public 네트워크에 cidr 전체 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Eks",
        "resource": "Eks Cluster",
        "option": "Endpoint Access Type",
        "type": "접근 통제",
        "description": "eks public 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Eks",
        "resource": "Eks Cluster",
        "option": "Enabled Encryption",
        "type": "암호화",
        "description": "secret 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Elasticache",
        "resource": "Elasticache Cluster",
        "option": "Snapshot Retention Limit",
        "type": "데이터 보호",
        "description": "스냅샷 보존 시간 설정 부재",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Elasticsearch",
        "resource": "Elasticsearch",
        "option": "Tls Security Policy",
        "type": "암호화",
        "description": "취약한 tls 버전 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Elasticsearch",
        "resource": "Elasticsearch",
        "option": "Encryption > Data At Rest Encryption Enabled",
        "type": "암호화",
        "description": "저장된 데이터 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Elasticsearch",
        "resource": "Elasticsearch",
        "option": "Encryption > Node To Node Encryption Enabled",
        "type": "암호화",
        "description": "노드 간 트래픽 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Elasticsearch",
        "resource": "Elasticsearch",
        "option": "Encryption > Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Elasticsearch",
        "resource": "Elasticsearch",
        "option": "Encryption > Enforce Https",
        "type": "암호화",
        "description": "암호화 되지 않은 프로토콜 사용 가능",
        "risk": "critical",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Kms",
        "resource": "Kms Key",
        "option": "Enable Key Rotation",
        "type": "암호화",
        "description": "키 자동 회전 비활성화",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Lambda Function",
        "resource": "Lambda Function",
        "option": "Tracing Enabled",
        "type": "로깅 모니터링",
        "description": "람다 X-Ray 추적 비활성화",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Lambda Function",
        "resource": "Lambda Function",
        "option": "Environment Variable",
        "type": "데이터 보호",
        "description": "환경변수에 시크릿 정보 포함",
        "risk": "critical",
        "iso": "-",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Lambda Function",
        "resource": "Lambda Function",
        "option": "Included Subnet Names, Linked Security Group Names",
        "type": "네트워크 보안",
        "description": "security group 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "11.1.1",
        "isms": "2.10",
        "evaluation": "8.3.1"
    },
    {
        "category": "Lb",
        "resource": "Lb",
        "option": "Internal",
        "type": "접근 통제",
        "description": "로드밸런서 외부 노출",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Lb",
        "resource": "Lb",
        "option": "Drop Invalid Header",
        "type": "네트워크 보안",
        "description": "부적절한 헤더 차단 설정 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "11.1.1",
        "isms": "2.10",
        "evaluation": "8.3.1"
    },
    {
        "category": "Lb",
        "resource": "Lb",
        "option": "Listener > Ssl Policy",
        "type": "암호화",
        "description": "취약한 tls 버전 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Lb",
        "resource": "Lb",
        "option": "Listener > Protocol",
        "type": "암호화",
        "description": "암호화 되지 않은 프로토콜 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Rds",
        "resource": "Aurora",
        "option": "Monitoring > Performance Insights Enabled",
        "type": "로깅 모니터링",
        "description": "성능 인사이트 비활성화",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Rds",
        "resource": "Aurora",
        "option": "Multi Az Enabled",
        "type": "데이터 보호",
        "description": "다중 az 설정 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Rds",
        "resource": "Aurora",
        "option": "Backup > Backup Retention Period",
        "type": "데이터 보호",
        "description": "데이터 보존 기간 디폴트 값 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Rds",
        "resource": "Aurora",
        "option": "Monitoring > Performance Insights Enabled, Monitoring > Kms Key Name",
        "type": "암호화",
        "description": "성능 인사이트 암호화 비활성화",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Rds",
        "resource": "Aurora",
        "option": "Encryption > Storage Encrypted",
        "type": "암호화",
        "description": "rds 클러스터 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Monitoring > Performance Insights Enabled",
        "type": "로깅 모니터링",
        "description": "성능 인사이트 비활성화",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Multi Az Enabled",
        "type": "데이터 보호",
        "description": "다중 az 설정 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.1"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Publicly Accessible",
        "type": "접근 통제",
        "description": "데이터베이스 퍼블릭 접근 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Backup > Backup Retention Period",
        "type": "데이터 보호",
        "description": "데이터 보존 기간 디폴트 값 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Monitoring > Performance Insights Enabled, Monitoring > Kms Key Name",
        "type": "암호화",
        "description": "성능 인사이트 암호화 비활성화",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Rds",
        "resource": "Mariadb, Mssql, Mysql, Oracle, Postgresql",
        "option": "Encryption > Storage Encrypted",
        "type": "암호화",
        "description": "rds 데이터베이스 암호화 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Enabled Logging",
        "type": "로깅 모니터링",
        "description": "로깅 비활성화",
        "risk": "medium",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Public Access Block > Block Public Acls",
        "type": "접근 통제",
        "description": "퍼블릭 acl 차단 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Public Access Block > Block Public Policy",
        "type": "접근 통제",
        "description": "퍼블릭 정책 차단 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Public Access Block > Ignore Public Acls",
        "type": "접근 통제",
        "description": "퍼블릭 acl 무시 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Public Access Block > Restrict Public Buckets",
        "type": "접근 통제",
        "description": "퍼블릭 버킷 정책 제한 비활성화",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Versioning Status",
        "type": "데이터 보호",
        "description": "버전관리 중단",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Sse Algorithm",
        "type": "암호화",
        "description": "kms 미적용 >> AES256 암호화를 사용하여 이미지 데이터가 매우 강력하게 보호됨",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "S3",
        "resource": "S3 Bucket",
        "option": "Sse Algorithm, Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Sns",
        "resource": "Sns Topic",
        "option": "Kms Key Name",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Vpc",
        "resource": "Endpoint Service",
        "option": "Acceptance Required",
        "type": "접근 통제",
        "description": "연결 요청 수동 수락 비활성화",
        "risk": "low",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 FTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 SSH 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 HTTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Cidr Block, Ingress > Action, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 RDP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Cidr Block",
        "type": "접근 통제",
        "description": "cidr 전체 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Acl",
        "option": "Ingress > Protocol",
        "type": "접근 통제",
        "description": "포트 전체 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Firewall",
        "option": "Enabled Delete Protection",
        "type": "네트워크 보안",
        "description": "삭제 보호 설정 비활성화",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Vpc",
        "resource": "Network Firewall",
        "option": "Encryption Configuration > Enabled Custom Configuration",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Firewall Policy",
        "option": "Encryption Configuration > Enabled Custom Configuration",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Vpc",
        "resource": "Network Firewall Rule Group",
        "option": "Encryption Configuration > Enabled Custom Configuration",
        "type": "암호화",
        "description": "kms 미적용",
        "risk": "low",
        "iso": "8.1",
        "csap": "12.3.1.",
        "isms": "2.7",
        "evaluation": "10.2.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Description",
        "type": "로깅 모니터링",
        "description": "보안 그룹에 설명이 없어 관리 및 식별이 어려움",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Description",
        "type": "로깅 모니터링",
        "description": "인바운드 규칙에 설명이 없어 특정 규칙의 목적을 이해하기 어려움",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Egress > Description",
        "type": "로깅 모니터링",
        "description": "아웃바운드 규칙에 설명이 없어 특정 규칙의 목적을 이해하기 어려움",
        "risk": "low",
        "iso": "9.1",
        "csap": "7.2.2",
        "isms": "2.11",
        "evaluation": "1.4.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Cidr Block",
        "type": "접근 통제",
        "description": "cidr 전체 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Cidr Block, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 FTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Cidr Block, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 SSH 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Cidr Block, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 HTTP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Ingress > Cidr Block, Ingress > From Port, To Port",
        "type": "접근 통제",
        "description": "인터넷에서 RDP 액세스 허용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Security Group",
        "option": "Egress > Cidr Block",
        "type": "접근 통제",
        "description": "cidr 전체 노출",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Vpc",
        "resource": "Subnet",
        "option": "Pip Enable",
        "type": "접근 통제",
        "description": "subnet public 노출",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    }
]