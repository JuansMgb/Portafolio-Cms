import * as React from "react"

import Footer from "./footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath 

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {children} 

    <Footer/>   
    </div>
  )
}

export default Layout
