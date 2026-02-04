import React, { useState } from "react";
import { TbAsterisk } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { addNewTask, editTask } from "../../api/task.api";
const AddEditTask = ({ onClose, type, data }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    priority: "low",
  });
  const [error, setError] = useState("");

  // handle input change
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  // on submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.title.trim() === "") {
        setError("Title is required");
        return;
      }

      if (formData.text.trim() === "") {
        setError("Content is required");
        return;
      }

      setError("");

      if (type === "add") {
        const resp = await addNewTask(formData);
        if (resp.data) {
          toast.success(resp.message || "Task added");
          onClose();
        }
      } else {
        const resp = await editTask(data._id, formData);
        if (resp.data) {
          toast.success(resp.message || "Task updated");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Smething went wrong");
    }
  };

  return (
    <div className="bg-white p-5 rounded-md relative">
      {/* close modal */}
      <button
        onClick={onClose}
        className="absolute right-3 top-3 h-10 bg-slate-50 aspect-square flex justify-center items-center rounded-md cursor-pointer"
      >
        <IoClose size={22} className="text-slate-950" />
      </button>
      <div className="mt-4">
        {/* form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          {/* title */}
          <div className="flex flex-col gap-1">
            <div className="flex">
              <label htmlFor="title" className="text-xl font-bold ">
                Title
              </label>
              <TbAsterisk size={12} className="text-red-500" />
            </div>
            <input
              onChange={onChange}
              name="title"
              id="title"
              placeholder="Crypto Assignment"
              className="py-2.5 px-2 bg-slate-50 border border-blue-200 text-lg text-slate-950 rounded-md focus:outline-blue-400"
            />
          </div>
          {/* content */}
          <div className="flex flex-col gap-1">
            <div className="flex">
              <label htmlFor="context" className="text-xl font-bold ">
                Content
              </label>
              <TbAsterisk size={12} className="text-red-500" />
            </div>
            <textarea
              name="text"
              onChange={onChange}
              id="content"
              placeholder="Task description"
              className="min-h-40 py-2.5 px-2 bg-slate-50 border border-blue-200 text-lg text-slate-950 rounded-md focus:outline-blue-400"
            />
          </div>
          {/* priority */}
          <div className="flex flex-col">
            <label htmlFor="priority" className="text-xl font-bold ">
              Priority
            </label>
            <select
              value={formData.priority}
              name="priority"
              onChange={onChange}
              id="priority"
              className="py-2.5 px-2 rounded-md text-lg font-bold border border-blue-200 focus:outline-blue-400"
            >
              <option value={"high"}>High</option>
              <option value={"medium"}>Medium</option>
              <option value={"low"}>Low</option>
            </select>
          </div>
          {/* error  message */}
          {error && <p className="text-xs text-red-500">{error}</p>}
          {/* button */}
          <div className="w-full mt-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold text-xl cursor-pointer rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTask;
