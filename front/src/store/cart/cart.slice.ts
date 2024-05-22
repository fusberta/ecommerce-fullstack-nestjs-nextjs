import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddToCartPayload, ICartState, IChangeQuantityPayload } from '@/types/cart.interface';

const initialState: ICartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IAddToCartPayload>) => {
            const isExist = state.items.some(
                item => item.product.id === action.payload.product.id
            )

            if (!isExist) {
                state.items.push({
                    ...action.payload,
                    id: state.items.length,
                })
            }
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
            const { id, type } = action.payload
            const item = state.items.find(item => item.id === id)
            if (item) type === 'increment' ? item.quantity++ : item.quantity--
        },
        reset: state => {
            state.items = []
        }
    },
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
