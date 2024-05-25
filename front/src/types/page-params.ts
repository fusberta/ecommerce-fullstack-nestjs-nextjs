export type TypeParamSlug = {
    slug?: string
}

export type TypeParamId = {
    id?: string | number
}

export interface IPageSlugParam {
    params: TypeParamSlug
}

export interface IPageIdParam {
    params: TypeParamId
}