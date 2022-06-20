import * as React from "react"
import Sidebar from "../Sidebar"
import Page from "components/Page"

const Layoult = (props) => {
  const { children } = props
  return (
    <>
      <Sidebar />
      <Page >{children}</Page>
    </>
  )
}

export default Layoult
