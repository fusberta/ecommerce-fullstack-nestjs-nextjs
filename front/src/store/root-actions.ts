import * as userActions from './user/user.actions'
import { cartActions } from './cart/cart.slice'

export const rootActions = {
    ...userActions,
    ...cartActions
}