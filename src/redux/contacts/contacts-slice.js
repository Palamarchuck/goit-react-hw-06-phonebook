import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        // Без ID:----
        // addContact: (store, { payload }) => {
        //     store.push(payload)
        // },
        
        addContact: {
            reducer: (store, { payload }) => {
                store.push(payload)
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    }
                }
            }
        },
        removeContact: (store, {payload}) => store.filter(item => item.id !== payload)
    }
})

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;