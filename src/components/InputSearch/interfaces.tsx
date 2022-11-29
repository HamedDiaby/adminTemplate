export interface InputSearchProps {
    placeholder: string
    list: string[]
    disabled?: boolean
    selectedElement: (el: string)=> void
}