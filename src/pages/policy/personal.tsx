import React, { useEffect, useState } from "react"
import policyStyles from "@site/src/scss/_policy.module.scss"
import Policy20240401 from "@site/src/components/Policies/20240401"
import Policy20230201 from "@site/src/components/Policies/20230201"
import Layout from "@theme/Layout"
import Policy20250501 from "@site/src/components/Policies/20250501"

export default function Personal() {
    const [current, setCurrent] = useState("20250501")
    const [policyComponent, setPolicyComponent] = useState(null)
    useEffect(() => {
        switch (current) {
            case "20250501":
                setPolicyComponent(<Policy20250501/>)
                break
            case "20240401":
                setPolicyComponent(<Policy20240401/>)
                break
            case "20230201":
                setPolicyComponent(<Policy20230201/>)
                break
        }
    }, [current])



    return (
        <Layout title="Policy Personal" description="Policy Personal Page">
            <div className={policyStyles.version}>
                <span>다른 버전 보기</span>
                <select onChange={(e)=>{
                    setCurrent(e.target.value)
                }}>
                    <option  value={"20250501"}>2025.05.01</option>
                    <option value={"20240401"}>2024.04.01</option>
                    <option  value={"20230201"}>2023.02.01</option>
                </select>
            </div>


            {policyComponent}
        </Layout>

    )
}
