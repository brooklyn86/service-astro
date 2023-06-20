import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";

export const appClientSlice = createSlice({
  name: "approject",
  initialState: {
    openClientModal: false,
    isLoading: null,
    editItem: {},
    editModal: false,
    clients: [
      {
        id: uuidv4(),
        assignee: [
          {
            image: "/assets/images/avatar/av-1.svg",
            label: "Mahedi Amin",
          },
          {
            image: "/assets/images/avatar/av-2.svg",
            label: "Sovo Haldar",
          },
          {
            image: "/assets/images/avatar/av-3.svg",
            label: "Rakibul Islam",
          },
        ],
        name: "Management Dashboard ",
        des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        startDate: "2022-10-03",
        endDate: "2022-10-06",
        progress: 75,
        category: [
          {
            value: "team",
            label: "team",
          },
          {
            value: "low",
            label: "low",
          },
        ],
      },
      {
        id: uuidv4(),
        assignee: [
          {
            image: "/assets/images/avatar/av-1.svg",
            label: "Mahedi Amin",
          },
          {
            image: "/assets/images/avatar/av-2.svg",
            label: "Sovo Haldar",
          },
          {
            image: "/assets/images/avatar/av-3.svg",
            label: "Rakibul Islam",
          },
        ],
        name: "Business Dashboard ",
        des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        startDate: "2022-10-03",
        endDate: "2022-10-10",
        progress: 50,

        category: [
          {
            value: "team",
            label: "team",
          },
          {
            value: "low",
            label: "low",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleAddModal: (state, action) => {
      state.openClientModal = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    pushClient: (state, action) => {
      state.clients.unshift(action.payload);

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
    removeClient: (state, action) => {
      state.clients = state.clients.filter(
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
    updateClient: (state, action) => {
      // update project and  store it into editItem when click edit button

      state.editItem = action.payload;
      // toggle edit modal
      state.editModal = !state.editModal;
      // find index
      let index = state.clients.findIndex(
        (item) => item.id === action.payload.id
      );
      // update project
      state.clients.splice(index, 1, {
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
  pushClient,
  toggleAddModal,
  removeClient,
  toggleEditModal,
  updateClient,
} = appClientSlice.actions;
export default appClientSlice.reducer;
