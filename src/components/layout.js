import * as React from "react"
import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-base-100" data-is-root-path={isRootPath}>
      <Header/>
      <main className={"w-11/12 lg:w-1/2 mx-auto"}>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
