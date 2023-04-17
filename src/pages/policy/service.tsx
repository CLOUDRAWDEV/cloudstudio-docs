import React from 'react'
import Layout from '@theme/Layout';
import policyStyles from '../../scss/_policy.module.scss';

export default function Service() {
    return (
      <Layout title="Policy Service" description="Policy Service Page">
        <section className={policyStyles.policy}>
          <h1>서비스 이용약관</h1>
          <hr />
          <section className={policyStyles.policy__space}>
            <br />
            <h2>제 1장 총칙</h2>
            <h3>제 1조 (목적)</h3>
            <h4>본 약관은 서비스 이용자가 클라우드로 주식회사(이하 “회사”라 합니다)가 제공하는 클라우드 스튜디오 서비스(이하 “서비스”라합니다)에 사용자로 가입하고 이를 이용함에 있어 회사와 사용자(본 약관에 동의하고 사용자등록을 완료한 서비스 이용자를 말합니다. 이하 “사용자”이라고 합니다)의 권리•의무 및 책임사항을 규정함을 목적으로 합니다. (약관의 명시, 효력 및 개정)
              <br />
              <br />
              (1) 회사는 이 약관의 내용을 사용자가 쉽게 알 수 있도록 서비스 약관 페이지에 게재합니다.
              <br />
              (2) 회사는 온라인 디지털콘텐츠산업 발전법, 정보통신망 이용 촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 위치정보의 보호 및 이용에 관한 법률 등에서의 소비자보호에 관한 법률, 개인 정보 보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
              <br />
              (3) 회사가 약관을 개정할 경우에는 기존 약관과 개정 약관 및 개정 약관의 적용일자와 개정 사유를 명시하여 현행 약관과 함께 그 적용일자 15일 전부터 적용일 이후 상당한 기간 동안, 개정 내용이 사용자에게 불리한 경우에는 그 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에 공지합니다.
              <br />
              (4) 회사가 전항에 따라 사용자에게 통지하면서 공지∙고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 사용자가 개정약관에 동의하지 않을 경우 사용자는 제17조 제1항의 규정에 따라 이용계약을 해지할 수 있습니다.
            </h4>
          </section>

            <section className={policyStyles.policy__space}>
            <h2>제 2장 가입 및 관리</h2>
              <h3>제 3조 (사용자가입절차)</h3>
              <h4>
                (1) 서비스 이용자가 본 약관을 읽고 “동의” 버튼을 누르거나 “확인” 등에 체크하는 방법을 취한 경우 본 약관에 동의한 것으로 간주합니다.
                <br />
                (2) 회사의 서비스 이용을 위한 사용자 가입은 회사가 정한 사용자 가입폼에 사용자 ID를 포함한 필수사항을 입력하고, “등록하기” 내지 “확인” 단추를 누르는 방법으로 합니다.
              </h4>

              <br />
              <h3>제 4조 (사용자등록의 성립과 유보 및 거절)</h3>
              <h4>
                (1) 사용자등록은 제3조에 정한 절차에 의한 서비스 이용자의 사용자가입 신청과 회사의 사용자등록 승낙에 의하여 성립합니다. 회사는 사용자가입 신청자가 필수사항 등을 성실히 입력하여 가입신청을 완료하였을 때에는 필요한 사항을 확인한 후 지체 없이 이를 승낙을 하여야 합니다. 단 사용자가입 신청서 제출 이외에 별도의 자료 제출이 요구되는 경우에는 예외로 합니다.
                <br />
                (2) 회사는 아래 각 호의 1에 해당하는 경우에는 사용자등록을 거절할 수 있습니다.
                  <br />
                  - 가입신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하여 가입신청을 하는 경우
                  <br />
                  - 기타 회사가 관련법령 등을 기준으로 하여 명백하게 사회질서 및 미풍양속에 반할 우려가 있음을 인정하는 경우
              </h4>

              <br />
              <h3>제 5조 (사용자 ID 등의 관리책임)</h3>
              <h4>
                사용자는 서비스 이용을 위한 사용자 ID, 비밀번호의 관리에 대한 책임, 본인 ID의 제3자에 의한 부정사용 등 사용자의 고의∙과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의∙과실로 인하여 야기된 경우는 회사가 책임을 부담합니다.
              </h4>

              <br />
              <h3>제 6조 (개인정보의 수집 등)</h3>
              <h4>
                회사는 서비스를 제공하기 위하여 관련 법령의 규정에 따라 사용자로부터 필요한 개인정보를 수집합니다.
              </h4>
            </section>

            <section className={policyStyles.policy__space}>
              <h2>제 3장 서비스의 이용</h2>
                <h3>제 7조 (서비스 이용)</h3>
                <h4>
                  (1) 서비스 이용은 회사의 서비스 사용승낙 직후부터 가능합니다.
                  <br />
                  (2) 서비스 이용시간은 회사의 업무상 또는 기술상 불가능한 경우를 제외하고는 연중무휴 1일 24시간(00:00-24:00)으로 함을 원칙으로 합니다. 다만, 서비스설비의 정기점검 등의 사유로 회사가 서비스를 특정범위로 분할하여 별도로 날짜와 시간을 정할 수 있습니다.
                </h4>

                <br />
                <h3>제 8조 (서비스 내용 변경 통지 등)</h3>
                <h4>
                  (1) 회사가 서비스 내용이 변경되거나 서비스가 종료되는 경우 회사는 사용자의 등록된 전자우편 주소로 이메일을 통하여 서비스 내용의 변경 사항 또는 종료를 통지할 수 있습니다.
                  <br />
                  (2) 전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 웹사이트 기타 회사의 공지사항 페이지를 통하여 사용자들에게 통지할 수 있습니다.
                </h4>

                <br />
                <h3>제 9조 (서비스 이용의 제한 및 중지)</h3>
                <h4>
                  (1) 회사는 아래 각 호의 1에 해당하는 사유가 발생한 경우에는 사용자의 서비스 이용을 제한하거나 중지시킬 수 있습니다.
                  <br />
                  - 사용자가 회사 서비스의 운영을 고의∙과실로 방해하는 경우
                  <br />
                  - 사용자가 제11조의 의무를 위반한 경우
                  <br />
                  - 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우
                  <br />
                  - 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우
                  <br />
                  - 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때
                  <br />
                  - 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우
                  <br />
                  (2) 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간등을 사용자에게 알려야 합니다.
                </h4>

                <br />
                <h3>제 10조 (회사의 의무)</h3>
                <h4>
                  (1) 회사는 회사의 서비스 제공 및 보안과 관련된 설비를 지속적이고 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.
                  <br />
                  (2) 회사는 사용자가 수신 동의를 하지 않은 영리 목적의 광고성 전자우편, SMS 문자메시지 등을 발송하지 아니합니다.
                  <br />
                  (3) 회사는 서비스의 제공과 관련하여 알게 된 사용자의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다. 사용자의 개인정보보호에 관한 기타의 사항은 정보통신망법 및 회사가 별도로 정한 “개인정보관리지침”에 따릅니다.
                  <br />
                  (4) 회사가 제3자와의 서비스 제공계약 등을 체결하여 사용자에게 서비스를 제공하는 경우 회사는 각 개별서비스에서 서비스의 제공을 위하여 제3자에게 제공되는 사용자의 구체적인 사용자정보를 명시하고 사용자의 개별적이고 명시적인 동의를 받은 후 동의의 범위 내에서 해당 서비스의 제공 기간 동안에 한하여 사용자의 개인정보를 제3자와 공유하는 등 관련 법령을 준수합니다.
                </h4>

                <br />
                <h3>제 11조 (사용자의 의무)</h3>
                <h4>
                  사용자는 아래 각 호의 1에 해당하는 행위를 하여서는 아니됩니다.
                  <br />
                  - 사용자가입신청 또는 변경 시 허위내용을 등록하는 행위
                  <br />
                  - 회사의 서비스에 게시된 정보를 변경하거나 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 또는 비 영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위
                  <br />
                  - 회사가 제공하는 서비스를 이용하여 제3자에게 본인을 홍보할 기회를 제공 하거나 제3자의 홍보를 대행하는 등 의 방법으로 금전을 수수하거나 서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는 행위
                  <br />
                  - 회사 기타 제3자에 대한 허위의 사실을 게재하거나 지적재산권을 침해하는 등 회사나 제3자의 권리를 침해하는 행위
                  <br />
                  - 다른 사용자의 ID 및 비밀번호를 도용하여 부당하게 서비스를 이용하는 행위
                  <br />
                  - 다른 사용자의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위
                  <br />
                  - 회사가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어셈블 하는 행위
                  <br />
                  - 현행 법령, 회사가 제공하는 서비스에 정한 약관 기타 서비스 이용에 관한 규정을 위반하는 행위
                </h4>
                
                <br />
                <h3>제 12조 (양도금지)</h3>
                <h4>
                  사용자의 서비스 받을 권리는 이를 양도 내지 증여하거나 질권의 목적으로 사용할 수 없습니다.
                </h4>

                <br />
                <h3>제 13조 (이용계약의 해지)</h3>
                <h4>
                  (1) 사용자가 서비스 이용계약을 해지하고자 하는 때에는 언제든지 사용자정보관리에서 회사가 정한 절차에 따라 사용자의 ID를 삭제하고 탈퇴할 수 있습니다.
                  <br />
                  (2) 사용자가 제11조의 규정을 위반한 경우 회사는 일방적으로 본 계약을 해지할 수 있고, 이로 인하여 서비스 운영에 손해가 발생한 경우 이에 대한 민, 형사상 책임도 물을 수 있습니다.
                </h4>
            </section>

            <section className={policyStyles.policy__space}>
              <h2>제 4장 기타</h2>
              <h3>제 14조 (면책)</h3>
                <h4>
                회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 사용자에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
                  <br />
                  - 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
                  <br />
                  - 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의
                  <br />
                  - 고의적인 서비스 방해가 있는 경우
                  <br />
                  - 사용자의 귀책사유로 서비스 이용에 장애가 있는 경우
                  <br />
                  - 제1호 내지 제3호를 제외한 기타 회사의 고의∙과실이 없는 사유로 인한 경우
                </h4>

                <br />
                <h3>제 15조 (규정의 준용)</h3>
                <h4>
                  본 약관에 명시되지 않은 사항에 대해서는 관련법령에 의하고, 법에 명시되지 않은 부분에 대하여는 관습에 의합니다.
                </h4>

                <br />
                <h3>부칙</h3>
                <h4>
                  본 약관은 2023년 2월 1일부터 적용됩니다. 단, 본 약관의 공지 시점으로부터 적용일 전일까지 기간 동안에 가입한 신규사용자에 대해서는 사용자 가입시부터 본 약관이 적용됩니다.
                </h4>
            </section>
            <br />
            <br />
        </section>
      </Layout>
    );
  }