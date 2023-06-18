import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory, toggleEditModal } from "./store";
import Icon from "@/components/ui/Icon";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import FormGroup from "@/components/ui/FormGroup";

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};

const assigneeOptions = [
  {
    value: "mahedi",
    label: "Mahedi Amin",
    image: "/assets/images/avatar/av-1.svg",
  },
  {
    value: "sovo",
    label: "Sovo Haldar",
    image: "/assets/images/avatar/av-2.svg",
  },
  {
    value: "rakibul",
    label: "Rakibul Islam",
    image: "/assets/images/avatar/av-3.svg",
  },
  {
    value: "pritom",
    label: "Pritom Miha",
    image: "/assets/images/avatar/av-4.svg",
  },
];
const options = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
  {
    value: "update",
    label: "update",
  },
];

const OptionComponent = ({ data, ...props }) => {
  //const Icon = data.icon;

  return (
    <components.Option {...props}>
      <span className="flex items-center space-x-4">
        <div className="flex-none">
          <div className="h-7 w-7 rounded-full">
            <img
              src={data.image}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <span className="flex-1">{data.label}</span>
      </span>
    </components.Option>
  );
};

const EditCategory = () => {
  const { editModal, editItem } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const FormValidationSchema = yup
    .object({
      title: yup.string().required("Name is required"),
      active: yup.string().required("Active is required"),
    })
    .required();

  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),

    mode: "all",
  });

  useEffect(() => {
    reset(editItem);
  }, [editItem]);

  const onSubmit = (data) => {
    const { title, active} = data
    dispatch(
      updateCategory(
        { id: editItem.id, title, active} 
      )
    );
    dispatch(toggleEditModal(false));
    toast.info("Edit Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Modal
      title="Edit Category"
      activeModal={editModal}
      onClose={() => dispatch(toggleEditModal(false))}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <FormGroup error={errors.name}>
          <input
            type="text"
            defaultValue={editItem.title}
            className="form-control py-2"
            {...register("title")}
          />
        </FormGroup>

        <FormGroup error={errors.active}>
          <input
            type="text"
            defaultValue={editItem.active}
            className="form-control py-2"
            {...register("active")}
          />
        </FormGroup>


        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark  text-center">Update</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditCategory;
