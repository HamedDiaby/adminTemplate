export interface TableProps {
    thead: string[]
    tbody: object[]
    showDetails?: boolean
    detailName?: string
    onDetailsPress: (element: object, index: number)=> void
    onSearch: (search: string)=> void
}
