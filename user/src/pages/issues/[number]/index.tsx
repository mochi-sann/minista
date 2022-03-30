import { Head } from "minista"

/*import { createElement } from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeReact from "rehype-react"*/

import AppLayout from "../../../components/app-layout"

export const getStaticData = async () => {
  const apiUrl = "https://api.github.com/repos/qrac/minista/issues"
  const apiParamsQuery = "?state=all&creator=qrac&per_page=5"
  const response = await fetch(apiUrl + apiParamsQuery)
  const data = await response.json()
  return data.map((item: PageIssuesTemplateProps) => ({
    props: item,
    paths: { number: item.number },
  }))
}

/*const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeRaw)
  .use(rehypeReact, {
    createElement: createElement,
  })*/

type PageIssuesTemplateProps = {
  title: string
  body: string
  number: number
}

const PageIssuesTemplate = (props: PageIssuesTemplateProps) => {
  return (
    <AppLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <h1>{props.title}</h1>
      <div>{props.body}</div>
      {/*<div>{processor.processSync(props.body).result}</div>*/}
    </AppLayout>
  )
}

export default PageIssuesTemplate