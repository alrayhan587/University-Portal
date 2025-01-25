import { ReactNode } from "react"

export type TsideBarItems = {
    key: string,
    label: ReactNode,
    children?:TsideBarItems[]
}

export type TRoute = {
    path: string,
    element: ReactNode
}

export type TuserPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TuserPath[],
}