import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload)
    },

    deleteContact(state, action) {
      state.value = state.value.filter((contact) => contact.mobile !== action.payload.mobile)
    },

    updateContact(state, action) {
      state.value.map(contact => {
        if (contact.name === action.payload.name && contact.mobile === action.payload.mobile) {
          contact.name = action.payload.newN
          contact.mobile = action.payload.newM
        }
      })
    }
  }
})

export const { addContact, deleteContact, updateContact } = contactSlice.actions
export default contactSlice.reducer