"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWidth from "@/hooks/useWidth";
import Button from "@/components/ui/Button";
import TableLoading from "@/components/skeleton/Table";
import { toggleAddModal } from "@/components/partials/app/clients/store";
import { ToastContainer } from "react-toastify";
import ClientList from "@/components/partials/app/clients/ClientList";
import AddClient from "@/components/partials/app/clients/AddClient";
import EditClient from "@/components/partials/app/clients/EditClient";

const ProjectPostPage = () => {
  const [filler, setfiller] = useState("list");
  const { width, breakpoints } = useWidth();
  const [isLoaded, setIsLoaded] = useState(false);

  const { clients } = useSelector((state) => state.client);
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
          All Clients
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
            text="Add Client"
            className="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
            iconClass="text-lg"
            onClick={() => dispatch(toggleAddModal(true))}
          />
        </div>
      </div>

      {!isLoaded ? (
        <div>
          <ClientList clients={clients} />
        </div>
      ) : (
        <TableLoading count={clients?.length} />
      )}
      <AddClient />
      <EditClient />
    </div>
  );
};

export default ProjectPostPage;
