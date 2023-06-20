import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export const appCategorySlice = createSlice({
  name: "appcategories",
  initialState: {
    openCategoryModal: false,
    isLoading: null,
    editItem: {},
    editModal: false,
    categories: [ ],
  },
  reducers: {
    toggleAddModal: (state, action) => {
      state.openCategoryModal = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    pushCategory: (state, action) => {
      state.categories.unshift(action.payload);

      toast.success("Add Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload
      );
      toast.warning("Remove Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    updateCategory: (state, action) => {
      // update project and  store it into editItem when click edit button

      state.editItem = action.payload;
      // toggle edit modal
      state.editModal = !state.editModal;
      // find index
      let index = state.categories.findIndex(
        (item) => item.id === action.payload.id
      );
      // update project
      state.categories.splice(index, 1, {
        id: action.payload.id,
        name: action.payload.name,
        des: action.payload.des,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        assignee: action.payload.assignee,
        progress: action.payload.progress,
        category: action.payload.category,
      });
    },
  },
});

export const {
  openModal,
  pushCategory,
  toggleAddModal,
  removeCategory,
  toggleEditModal,
  updateCategory,
} = appCategorySlice.actions;
export default appCategorySlice.reducer;
