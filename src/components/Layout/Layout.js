import * as React from "react"
import Sidebar from "../Sidebar"
import Page from "components/Page"

const Layoult = (props) => {
  const { children } = props
  return (
    <div className="flex">
      <Sidebar />
      <Page >{children}</Page>
    </div>
  )
}

export default Layoult
