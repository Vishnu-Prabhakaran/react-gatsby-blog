import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thirdpage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Hi from the Third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Thirdpage
