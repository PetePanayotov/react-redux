import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    show: false 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart(state, action) {
            const {id , title , price} = action.payload;

            const itemIndex = state.items.findIndex(i => i.id === id);


            if(itemIndex === -1) {

                const newItem = {
                    id,
                    title,
                    price,
                    quantity: 1,
                    total: price
                }

                return {
                    ...state,
                    totalQuantity: state.totalQuantity + 1,
                    items: [...state.items , newItem]
                }
            };

            const updatedItem = {
                ...state.items[itemIndex],
                quantity: state.items[itemIndex].quantity + 1,
                total: price * (state.items[itemIndex].quantity + 1)
            }

            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                items: [
                    ...state.items.slice(0 , itemIndex),
                    updatedItem,
                    ...state.items.slice(itemIndex + 1)
                ]

            }

        },

        toggle(state) {
            return {
                ...state,
                show: !state.show
            }
        },

        addAnotherItem(state , action) {

            const {id} = action.payload
            
            const itemIndex = state.items.findIndex(i => i.id === id)
            
            const newQuantity = state.items[itemIndex].quantity + 1;

            const updatedItem = {
                ...state.items[itemIndex],
                quantity: newQuantity,
                total: state.items[itemIndex].price * newQuantity
            }
            
            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                items: [
                    ...state.items.slice(0 , itemIndex),
                    updatedItem,
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        },

        removeOneItem(state , action) {

            const {id} = action.payload
            const itemIndex = state.items.findIndex(i => i.id === id)

            const newQuantity = state.items[itemIndex].quantity - 1 < 0 
                                                    ? 0 
                                                    : state.items[itemIndex].quantity - 1;

            if(newQuantity === 0) {

                return {
                    ...state,
                    totalQuantity: state.totalQuantity -1,
                    items: [
                        ...state.items.slice(0 , itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ]
                }
            }

            const updatedItem = {
                ...state.items[itemIndex],
                quantity: newQuantity,
                total: state.items[itemIndex].price * newQuantity
            }
            
            return {
                ...state,
                totalQuantity: state.totalQuantity -1,
                items: [
                    ...state.items.slice(0 , itemIndex),
                    updatedItem,
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        },
    }
});

export const cartStore = {
    reducer: cartSlice.reducer,
    actions: cartSlice.actions
}