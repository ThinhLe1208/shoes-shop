import { createSlice } from '@reduxjs/toolkit';

const caculateTotal = (state) => {
    const totalPrice = state.cartList.reduce((total, item) => {
        return total += +item.qty * +item.price;
    }, 0);
    state.totalPrice = totalPrice.toLocaleString();
    state.totalQuantity = state.cartList.reduce((total, item) => {
        return total += +item.qty;
    }, 0);
};

const initialState = {
    cartList: [],
    totalPrice: '',
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.id);
            if (index === -1) {
                state.cartList.push({ ...payload, qty: 1 });
            } else {
                state.cartList[index].qty += 1;
            }
            caculateTotal(state);
        },
        removeCart: (state, { payload }) => {
            state.cartList = state.cartList.filter(item => item.id !== payload);
            caculateTotal(state);
        },
        clearCart: (state) => {
            state.cartList = [];
            caculateTotal(state);
        },
        increaseQuantity: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload);
            if (index !== -1) {
                state.cartList[index].qty += 1;
            }
            caculateTotal(state);
        },
        decreaseQuantity: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload);
            if (index !== -1) {
                if (state.cartList[index].qty > 1) {
                    state.cartList[index].qty -= 1;
                } else {
                    state.cartList.splice(index, 1);
                }
            }
            caculateTotal(state);
        },
        changeQuantity: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.id);
            if (index !== -1) {
                state.cartList[index].qty = payload?.qty;
            }
            caculateTotal(state);
        },
    }
});

export const {
    addCart,
    removeCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;