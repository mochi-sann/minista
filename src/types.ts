import type { ExoticComponent } from "react"
import type vite from "vite"
import type { Options as MdxOptions } from "@mdx-js/esbuild"
import type {
  HTMLBeautifyOptions,
  CSSBeautifyOptions,
  JSBeautifyOptions,
} from "js-beautify"

export type MinistaConfig = {
  outDir: string
  publicDir: string
  assetsDir: string
  autoAssetsName: string
  rootFileDir: string
  rootFileName: string
  rootFileExt: string[]
  pagesDir: string
  pagesExt: string[]
  tempDir: string
  tempConfigDir: string
  tempViteImporterDir: string
  tempAssetsDir: string
  tempRootFileDir: string
  tempPagesDir: string
}

export type MinistaUserConfig = {
  entry?: string | string[] | { [key: string]: string }
  outDir?: string
  publicDir?: string
  assetsDir?: string
  autoAssetsName?: string
  vite?: vite.UserConfig | vite.UserConfigFn
  markdown?: MdxOptions
  beautify?: MinistaBeautifyConfig
}

export type MinistaBeautifyConfig = {
  useHtml?: boolean
  useCss?: boolean
  useJs?: boolean
  htmlOptions?: HTMLBeautifyOptions
  cssOptions?: CSSBeautifyOptions
  jsOptions?: JSBeautifyOptions
}

export type RootStaticContent = {
  component: RootJsxContent
  staticData: GlobalStaticData
}
export type RootEsmContent = {
  default: RootJsxContent
  getStaticData?: GetGlobalStaticData
}
export type RootJsxContent =
  | ExoticComponent<{ children?: React.ReactNode }>
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
export type GlobalStaticData = { props?: {} } | undefined
export type GetGlobalStaticData = () => Promise<GlobalStaticData>

export type PageEsmContent = {
  default: PageJsxContent
  getStaticData?: GetStaticData
  frontmatter?: {}
}
export type PageJsxContent = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>
export type StaticData = StaticDataList | StaticDataItem | undefined
export type StaticDataList = StaticDataItem[]
export type StaticDataItem = {
  props?: {}
  paths?: {}
}
export type StaticDataCache = { key: [StaticDataList] } | {}
export type GetStaticData = () => Promise<StaticData>