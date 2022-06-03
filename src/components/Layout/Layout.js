import * as React from "react"
import Sidebar from "../Sidebar"

const Layoult = (props) => {
  const { children } = props
  return (
    <>
      <Sidebar />
      <div >{children}</div>
    </>
  )
}

export default Layoult
