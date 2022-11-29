export interface TabDivProps {
    tabsLabel: string[]
    activeTab: number
    tabsContent: any[]
    onChangeTab: (index: number)=> void
}
