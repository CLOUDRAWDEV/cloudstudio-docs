import React from "react"
import Layout from "@theme/Layout"
import policyStyles from "/src/scss/_policy.module.scss"

export default function Service() {
    return (
        <Layout title="Policy Service" description="Policy Service Page">
            <section className={policyStyles.policy}>
                <h1>サービス利用規約</h1>
                <hr />
                <section className={policyStyles.policy__space}>
                    <br />
                    <h2>第1章 総則</h2>
                    <h3>第1条 (目的)</h3>
                    <h4>
                        本規約は、サービス利用者がcloudraw株式会社(以下"当社"といいます)が提供するCloudStudioサービス(以下"サービス"といいます)にユーザーとして登録し、
                        これを利用するにあたり、当社とユーザー(本規約に同意し、ユーザー登録を完了したサービス利用者をいいます。以下"ユーザー"といいます)との間の権利・義務および責任事項を定めることを目的とします。(規約の明示、効力および改定)
                        <br />
                        <br />
                        (1)
                        会社は本規約の内容をユーザーが容易に理解できるように、サービス利用規約ページに掲載します。
                        <br />
                        (2)
                        会社はオンラインデジタルコンテンツ産業発展法、情報通信網利用促進および情報保護等に関する法律、
                        個人情報保護法、位置情報の保護および利用に関する法律などの消費者保護に関する法律、個人情報保護に関する法律、
                        約款の規制に関する法律、消費者基本法など、関連法に違反しない範囲で本規約を改定することができます。
                        <br />
                        (3)
                        会社が規約を改定する場合、既存の規約と改定後の規約および改定規約の適用日および改定理由を明示し、
                        現行規約と共にその適用日の15日前から適用日後の相当な期間まで、改定内容がユーザーに不利となる場合にはその適用日の30日前から適用日後の相当な期間まで、それぞれサービスのホームページに告知します。
                        <br />
                        (4)
                        会社が前項に従いユーザーに通知し、告知・通知日から改定規約施行日までの7日以内に拒否の意思を表示しない場合には、
                        承認したものとみなす旨を明確に通知したにもかかわらず、意思表示がない場合、変更された規約を承認したものとみなします。
                        ユーザーが改定規約に同意しない場合、ユーザーは第17条第1項の規定に従い利用契約を解約することができます。
                    </h4>
                </section>

                <section className={policyStyles.policy__space}>
                    <h2>第2章 登録および管理</h2>
                    <h3>第3条 (ユーザー登録手続き)</h3>
                    <h4>
                        (1)
                        サービス利用者が本規約を読み、"同意"ボタンを押すか"確認"などにチェックを入れる方法を取った場合、本規約に同意したものとみなします。
                        <br />
                        (2)
                        会社のサービス利用のためのユーザー登録は、会社が定めたユーザー登録フォームにユーザーIDを含む必須事項を入力し、
                        "「登録する"または"確認"ボタンを押す方法で行います。
                    </h4>

                    <br />
                    <h3>第4条 (ユーザー登録の成立、保留および拒否)</h3>
                    <h4>
                        (1)
                        ユーザー登録は第3条に定めた手続きによるサービス利用者のユーザー登録申請と会社のユーザー登録承諾によって成立します。
                        会社はユーザー登録申請者が必須事項などを誠実に入力し、登録申請を完了した場合、必要な事項を確認のうえ、遅滞なくこれを承諾しなければなりません。
                        ただし、ユーザー登録申請書の提出以外に別途資料の提出が要求される場合は例外とします。
                        <br />
                        (2)
                        会社は以下の各号の1に該当する場合には、ユーザー登録を拒否することができます。
                        <br />
                        -
                        登録申請書の内容を虚偽で記載したり、虚偽書類を添付して登録申請を行う場合
                        <br />-
                        偽で記載したり、虚偽書類を添付して登録申請を行う場合
                        その他、会社が関連法令などに基づき、明らかに社会秩序や公序良俗に反するおそれがあると認める場合
                    </h4>

                    <br />
                    <h3>第5条 (ユーザーID等の管理責任)</h3>
                    <h4>
                        ユーザーはサービス利用のためのユーザーIDおよびパスワードの管理に関する責任、自己のIDの第三者による不正使用など、
                        ユーザーの故意または過失により発生するすべての不利益について責任を負います。ただし、これが会社の故意または過失により引き起こされた場合は、会社が責任を負います。
                    </h4>

                    <br />
                    <h3>第6条 (個人情報の収集等)</h3>
                    <h4>
                        会社はサービスを提供するために関連法令の規定に従い、ユーザーから必要な個人情報を収集します。
                    </h4>
                </section>

                <section className={policyStyles.policy__space}>
                    <h2>第3章 サービスの利用</h2>
                    <h3>第7条(サービス利用)</h3>
                    <h4>
                        (1)
                        サービスの利用は会社のサービス使用承諾直後から可能です。
                        <br />
                        (2)
                        サービス利用時間は、会社の業務上または技術上不可能な場合を除き、年中無休で1日24時間(00:00-24:00)とすることを原則とします。
                        ただし、サービス設備の定期点検等の理由により、会社がサービスを特定の範囲に分割して別途日付と時間を定めることができます。
                    </h4>

                    <br />
                    <h3>第8条 (サービス内容変更通知等)</h3>
                    <h4>
                        (1)
                        会社がサービス内容を変更したり、サービスが終了する場合、会社はユーザーの登録された電子メールアドレスにメールを通じてサービス内容の変更事項または終了を通知することができます。
                        <br />
                        (2)
                        前項の場合、不特定多数の人々に対する通知は、ウェブサイトまたはその他の会社の公告ページを通じてユーザーに通知することができます。
                    </h4>

                    <br />
                    <h3>第9条 (サービス利用の制限及び中止)</h3>
                    <h4>
                        (1)
                        会社は以下の各号の1に該当する事由が発生した場合、ユーザーのサービス利用を制限または中止させることができます。
                        <br />
                        -
                        ユーザーが会社のサービス運営を故意または過失により妨害した場合
                        <br />
                        - ユーザーが第11条の義務に違反した場合
                        <br />
                        -
                        サービス用設備の点検、修理または工事によりやむを得ない場合
                        <br />
                        -
                        電気通信事業法に規定された期間通信事業者が電気通信サービスを中止した場合
                        <br />
                        -
                        国家非常事態、サービス設備の障害またはサービス利用の混雑などでサービス利用に支障が生じた場合
                        <br />
                        -
                        その他重大な理由により会社がサービス提供を継続することが不適当であると認める場合
                        <br />
                        (2)
                        会社は前項の規定によりサービスの利用を制限または中止した場合、その理由および制限期間などをユーザーに知らせなければなりません。
                    </h4>

                    <br />
                    <h3>第10条 (会社の義務)</h3>
                    <h4>
                        (1)
                        会社は会社のサービス提供およびセキュリティに関連する設備を持続的かつ安定的なサービス提供に適した状態に維持、
                        点検または復旧するなどの措置を誠実に実行しなければなりません。
                        <br />
                        (2)
                        会社はユーザーが受信同意をしていない営利目的の広告電子メールやSMSメッセージなどを送信しません。
                        <br />
                        (3)
                        会社は、サービス提供に関連して知り得たユーザーの個人情報を本人の同意なしに第三者に漏洩、配布せず、これを保護するために努力します。
                        ユーザーの個人情報保護に関するその他の事項は、情報通信網法および会社が別途定めた"個人情報管理指針"に従います。
                        <br />
                        (4)
                        会社が第三者とのサービス提供契約を締結しユーザーにサービスを提供する場合、
                        会社は各個別サービスにおいてサービス提供のために第三者に提供されるユーザーの具体的なユーザー情報を明示し、
                        ユーザーの個別かつ明示的な同意を得た後、同意の範囲内で該当サービスの提供期間中に限りユーザーの個人情報を第三者と共有し、関連法令を遵守します。
                    </h4>

                    <br />
                    <h3>第11条 (ユーザーの義務)</h3>
                    <h4>
                        ユーザーは以下の各号の行為をしてはなりません。
                        <br />
                        -
                        ユーザーが加入申請または変更の際に虚偽の内容を登録する行為
                        <br />
                        -
                        会社のサービスに掲示された情報を変更したり、サービスを利用して得た情報を会社の事前承諾なしに営利または非営利の目的で複製、
                        出版、放送などに使用したり、第三者に提供する行為
                        <br />
                        -
                        会社が提供するサービスを利用して第三者に自己を宣伝する機会を提供したり、第三者の宣伝を代行するなどの方法で金銭を授受したり、サービス利用の権利を譲渡し、その対価として金銭を授受する行為
                        <br />
                        -
                        その他の第三者に対して虚偽の事実を掲載したり、知的財産権を侵害したりするなど、会社や第三者の権利を侵害する行為
                        <br />
                        -
                        他のユーザーのIDおよびパスワードを盗用して不正にサービスを利用する行為
                        <br />
                        -
                        他のユーザーの個人情報をその同意なしに収集、保存、公開する行為
                        <br />
                        -
                        会社が提供するソフトウェアなどを改作したり、リバースエンジニアリング、デコンパイル、ディスアセンブルする行為
                        <br />-
                        現行法令、会社が提供するサービスに定める約款その他サービス利用に関する規定を違反する行為
                    </h4>

                    <br />
                    <h3>第12条 (譲渡禁止)</h3>
                    <h4>
                        ユーザーのサービスを受ける権利は譲渡や贈与、質権の目的として使用することはできません。
                    </h4>

                    <br />
                    <h3>第13条 (利用契約の解除)</h3>
                    <h4>
                        (1)
                        ユーザーがサービス利用契約を解除したい場合は、いつでもユーザー情報管理から会社が定めた手続きに従ってユーザーのIDを削除し、退会することができます。
                        <br />
                        (2)
                        ユーザーが第11条の規定に違反した場合、会社は一方的に本契約を解除することができ、このためにサービス運営に損害が発生した場合には、その民事上および刑事上の責任を問うことがあります。
                    </h4>
                </section>

                <section className={policyStyles.policy__space}>
                    <h2>第14章 その他</h2>
                    <h3>第14条 (免責)</h3>
                    <h4>
                        会社は次の各号のいずれかの場合にサービスを提供できない場合、これによりユーザーに発生した損害について責任を負いません。
                        <br />
                        - 天災地変またはこれに準ずる不可抗力の状態がある場合
                        <br />
                        -
                        サービス提供のために会社とサービス提携契約を締結した第三者の意図的なサービス妨害がある場合
                        <br />
                        -
                        ユーザーの責に帰すべき事由によりサービス利用に障害がある場合
                        <br />-
                        第1号から第3号を除いたその他の会社の故意または過失がない事由による場合
                    </h4>

                    <br />
                    <h3>第15条 (規定の準用)</h3>
                    <h4>
                        本約款に明示されていない事項については、関連法令に従い、法律に明示されていない部分については慣習に従います。
                    </h4>

                    <br />
                    <h3>附則</h3>
                    <h4>
                        本約款は2023年2月1日から適用されます。ただし、本約款の公告時点から適用日までの期間中に加入した新規ユーザーに対しては、ユーザー加入時から本約款が適用されます。
                    </h4>
                </section>
                <br />
                <br />
            </section>
        </Layout>
    )
}
