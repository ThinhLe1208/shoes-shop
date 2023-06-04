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
    quantityDetail: 1
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.product?.id);
            if (index === -1) {
                state.cartList.push({ ...payload?.product, qty: payload.qty });
            } else {
                state.cartList[index].qty += payload.qty;
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
        // QuantityField component
        changeQuantityByInput: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.id);
            if (index !== -1) {
                state.cartList[index].qty = payload?.qty;
            }
            caculateTotal(state);
        },
        changeQuantityByButton: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.id);
            if (index !== -1) {
                const result = state.cartList[index].qty + payload?.qty;
                if (result > 0) {
                    state.cartList[index].qty = result;
                } else {
                    state.cartList.splice(index, 1);
                }
            }
            caculateTotal(state);
        },
        // QuantityFieldDelay component
        changeQuantityDetailByInput: (state, { payload }) => {
            state.quantityDetail = payload;
        },
        changeQuantityDetailByButton: (state, { payload }) => {
            const result = state.quantityDetail + payload;
            if (result > 0) {
                state.quantityDetail = result;
            }
        },
    }
});

export const {
    addCart,
    removeCart,
    clearCart,
    changeQuantityByInput,
    changeQuantityByButton,
    changeQuantityDetailByInput,
    changeQuantityDetailByButton
} = cartSlice.actions;

export default cartSlice.reducer;