export interface ISelectItem<K = string> {
    label: string
    key: K
}

export interface ISelect<K = string> {
    data: ISelectItem<K>[]
    value?: ISelectItem<K>
    title?: string
    onChange: (item: ISelectItem<K>) => void
}