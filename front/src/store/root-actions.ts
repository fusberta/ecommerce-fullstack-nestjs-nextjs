import * as userActions from './user/user.actions'
import { cartActions } from './cart/cart.slice'
import { filtersActions } from './filters/filters.slice'

export const rootActions = {
    ...userActions,
    ...cartActions,
    ...filtersActions
}