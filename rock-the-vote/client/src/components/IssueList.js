import React from "react"
import Issue from "./Issue.js"

export default function IssueList(props) {
    const { issues } = props
    return (
        <div>
            <ul>
                {issues.map(issue => <li key={issue._id}><Issue {...issue} /></li>)}
            </ul>
        </div>
    )
}