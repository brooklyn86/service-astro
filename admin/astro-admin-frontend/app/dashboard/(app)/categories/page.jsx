"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWidth from "@/hooks/useWidth";
import Button from "@/components/ui/Button";
import TableLoading from "@/components/skeleton/Table";
import { toggleAddModal } from "@/components/partials/app/categories/store";
import { ToastContainer } from "react-toastify";
import CategoryList from "@/components/partials/app/categories/CategoryList";
import AddCategory from "@/components/partials/app/categories/AddCategory";
import EditCategory from "@/components/partials/app/categories/EditCategory";

const ProjectPostPage = () => {
  const [filler, setfiller] = useState("list");
  const { width, breakpoints } = useWidth();
  const [isLoaded, setIsLoaded] = useState(false);

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 1500);
  }, [filler]);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          All Categories
        </h4>
        <div
          className={`${
            width < breakpoints.md ? "space-x-rb" : ""
          } md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse`}
        >
          <Button
            icon="heroicons-outline:filter"
            text="On going"
            className="bg-white dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:text-white btn-md  h-min text-sm font-normal"
            iconClass=" text-lg"
          />
          <Button
            icon="heroicons-outline:plus"
            text="Add Category"
            className="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
            iconClass="text-lg"
            onClick={() => dispatch(toggleAddModal(true))}
          />
        </div>
      </div>

      {!isLoaded ?  (
        <div>
          <CategoryList categories={categories} />
        </div>
      ) : (
        <TableLoading count={categories?.length} />
      )}
      <AddCategory />
      <EditCategory />
    </div>
  );
};

export default ProjectPostPage;
