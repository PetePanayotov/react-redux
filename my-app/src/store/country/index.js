import {createSlice , createAction , createAsyncThunk, createReducer} from "@reduxjs/toolkit";

 export const FETCH_COUNTRY = "FETCH_COUNTRY";
 export const SET_COUNTRY = "SET_COUNTRY"

const initialState = {
    data: {},
    isLoading: false,
    loaded: false,
    error: false
}

// const fetchCountry = createAsyncThunk("FETCH_COUNTRY" , 
//     async (countryName) => {
//         try {

//             const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
//             const data = await response.json();

//             const {name , capital , population} = data[0];

//             return {name , capital , population}
            
//         } catch (error) {
//             throw new Error()
//         }
//     }
// );

// const reducer = createReducer(initialState , {
//     [fetchCountry.pending.type]: (state) => {

//         return {
//             ...state,
//             isLoading: true,
//             loaded: false,
//             data: {},
//             error: false
//         }
//     },
//     [fetchCountry.fulfilled.type]: (state , action) => {

//         const {name , capital , population} = action.payload
//         console.log(name , capital , population)
//         return {
//             ...state,
//             isLoading: false,
//             loaded: true,
//             data: {name , capital , population},
//             error: false
//         }
//     },

//     [fetchCountry.rejected.type]: (state) => {

//         return {
//             ...state,
//             isLoading: false,
//             loaded: true,
//             data: {},
//             error: true
//         }
//     },


// });

// const reducer = createReducer(initialState , (builder) => {

//     builder
//         .addCase(fetchCountry.pending.type , (state , action) => {

//             return {
//                 ...state,
//                 isLoading: true,
//                 loaded: false,
//                 data: {},
//                 error: false
//             };

//         })
//         .addCase(fetchCountry.fulfilled.type , (state , action) => {

//             const {name , capital , population} = action.payload
            
//             return {
//                 ...state,
//                 isLoading: false,
//                 loaded: true,
//                 data: {name , capital , population},
//                 error: false
//             };
//         })
//         .addCase(fetchCountry.rejected.type , (state , action) => {
            
//             return {
//                 ...state,
//                 isLoading: false,
//                 loaded: true,
//                 data: {},
//                 error: true
//             }
//         })
// })


const fetchCountry = (countryName) => ({type : FETCH_COUNTRY , payload: countryName})


const reducer = (state = initialState , action) => {

    switch (action.type) {
        case SET_COUNTRY:

        const {isLoading , loaded , data , error} = action.payload;

        return {
            isLoading,
            loaded,
            data,
            error
        }
            
    
        default:
            return state
    }
}

const actions = {fetchCountry};

export const countryStore = {
    reducer,
    actions
}
 
// const countrySlice = createSlice({
//     name: "country",
//     initialState,
//     reducers: {

//         fetchCountry(state , action) {

//             const {isLoading , loaded , data , error} = action.payload;

//             return {
//                 ...state,
//                 isLoading,
//                 loaded,
//                 data,
//                 error
//             }
            

//         }
//     }
// });

// export const countryStore = {
//     reducer: countrySlice.reducer,
//     actions: countrySlice.actions
// }