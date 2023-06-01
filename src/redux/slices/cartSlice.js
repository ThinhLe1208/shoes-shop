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
        addCart: (state, { payload: product }) => {
            let index = state.cartList.findIndex(item => item.id === product?.id);
            if (index === -1) {
                state.cartList.push({ ...product, qty: 1 });
            } else {
                state.cartList[index].qty += 1;
            }
            caculateTotal(state);
        },
        removeCart: (state, { payload: id }) => {
            state.cartList = state.cartList.filter(item => item.id !== id);
            caculateTotal(state);
        },
        clearCart: (state) => {
            state.cartList = [];
            caculateTotal(state);
        },
        increaseQuantity: (state, { payload: id }) => {
            let index = state.cartList.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartList[index].qty += 1;
            }
            caculateTotal(state);
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
            caculateTotal(state);
        },
        changeQuantity: (state, { payload: { id, qty } }) => {
            let index = state.cartList.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartList[index].qty = qty;
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
    changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;