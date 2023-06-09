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
    name: 'cart',
    initialState,
    reducers: {
        clearCartInfo: (state) => {
            state.cartList = [];
            state.totalQuantity = '0';
            state.totalQuantity = 0;
        },
        addCart: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.product?.id);
            if (index === -1) {
                state.cartList.push({ ...payload?.product, qty: payload.qty });
            } else {
                state.cartList[index].qty += payload.qty;
            }
            caculateTotal(state);
        },
        removeCart: (state, { payload: productId }) => {
            state.cartList = state.cartList.filter(item => item.id !== productId);
            caculateTotal(state);
        },
        clearCart: (state) => {
            state.cartList = [];
            caculateTotal(state);
        },
        // QuantityField component
        changeQuantityByInput: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.productId);
            if (index !== -1) {
                state.cartList[index].qty = payload?.qty;
            }
            caculateTotal(state);
        },
        changeQuantityByButton: (state, { payload }) => {
            let index = state.cartList.findIndex(item => item.id === payload?.productId);
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
        changeQuantityDetailByInput: (state, { payload: newQuantityDetail }) => {
            state.quantityDetail = newQuantityDetail;
        },
        changeQuantityDetailByButton: (state, { payload: changedQuantityDetail }) => {
            const result = state.quantityDetail + changedQuantityDetail;
            if (result > 0) {
                state.quantityDetail = result;
            }
        },
    }
});

export const {
    clearCartInfo,
    addCart,
    removeCart,
    clearCart,
    changeQuantityByInput,
    changeQuantityByButton,
    changeQuantityDetailByInput,
    changeQuantityDetailByButton
} = cartSlice.actions;

export default cartSlice.reducer;