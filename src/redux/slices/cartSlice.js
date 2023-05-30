import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartList: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCart: (state, { payload: product }) => {
            let index = state.cartList.findIndex(item => item.id === product?.id);
            if (index === -1) {
                state.cartList.push({ ...product, qty: 1 });
            } else {
                state.cartList[index].qty += 1;
            }
        },
        removeCart: (state, { payload: id }) => {
            state.cartList = state.cartList.filter(item => item.id !== id);
        },
        clearCart: (state) => {
            state.cartList = [];
        },
        increaseQuantity: (state, { payload: id }) => {
            let index = state.cartList.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartList[index].qty += 1;
            }
        },
        decreaseQuantity: (state, { payload: id }) => {
            let index = state.cartList.findIndex(item => item.id === id);
            if (index !== -1) {
                if (state.cartList[index].qty > 1) {
                    state.cartList[index].qty -= 1;
                } else {
                    state.cartList.splice(index, 1);
                }
            }
        },
        changeQuantity: (state, { payload: { id, qty } }) => {
            let index = state.cartList.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartList[index].qty = qty;
            }
        },
        caculateTotalPrice: (state) => {
            const totalPrice = state.cartList.reduce((acc, item) => {
                return acc += item.qty * item.price;
            }, 0);
            state.totalPrice = totalPrice;
        }
    }
});

export const {
    addCart,
    removeCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    changeQuantity,
    caculateTotalPrice
} = cartSlice.actions;

export default cartSlice.reducer;