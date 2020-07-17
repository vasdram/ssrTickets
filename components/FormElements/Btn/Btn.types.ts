export type TBtn = {
    type?: string,
    url?: string,
    bg: string,
    target?: string,
    children?: React.ReactNode,
    click?: (e: any) => void
    disabled?: boolean 
}