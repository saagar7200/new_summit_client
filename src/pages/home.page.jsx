/* eslint-disable react-hooks/set-state-in-effect */
import NavBar from "../components/header";
import { IoMdAdd } from "react-icons/io";
import Card from "../components/tasks/card";
import AddEditTask from "../components/forms/task.form";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUserDetail } from "../api/auth.api";
import { useNavigate } from "react-router";
import { getAllTask } from "../api/task.api";
const Homepage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();
  const [isAddModalOpen, setAddModalOpen] = useState({
    type: "add",
    data: null,
    isOpen: false,
  });

  const openAddModal = () => {
    setAddModalOpen({
      type: "add",
      data: null,
      isOpen: true,
    });
  };

  const onClose = () => {
    setAddModalOpen({
      type: "add",
      data: null,
      isOpen: false,
    });
  };

  // get user detail
  const getProfile = async () => {
    try {
      const user = await getUserDetail();
      if (user.data) {
        setUserInfo(() => {
          return user.data;
        });
      }
      console.log(user);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "Something went wrong");
      if (error?.status === 401) {
        navigate("/login");
      }
    }
  };

  // get tasks
  const getTasks = async () => {
    try {
      const response = await getAllTask();
      // store tasks in state
      setTasks(response.data);
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  // fetch user when page loads
  useEffect(() => {
    getTasks();
    getProfile();
  }, []);

  return (
    <main className="h-full w-full ">
      <NavBar userInfo={userInfo} />
      {/* task list */}
      {tasks && tasks.length > 0 && (
        <div className="grid grid-cols-3 gap-6 mt-10">
          {tasks.map((task) => {
            return <Card key={task._id} task={task}/>;
          })}
        </div>
      )}

      {/* add new task button */}
      <button
        onClick={openAddModal}
        title="Add New Note"
        className="fixed bottom-30 right-50 h-13 aspect-square rounded-md bg-blue-500 text-white font-bold cursor-pointer flex items-center justify-center"
      >
        <IoMdAdd size={24} className="font-bold" />
      </button>

      {/* add edit task */}

      <Modal
        isOpen={isAddModalOpen.isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        className={"w-[40%] h-fit mx-auto mt-16 "}
      >
        <AddEditTask
          data={isAddModalOpen.data}
          type={isAddModalOpen.type}
          onClose={onClose}
        />
      </Modal>
    </main>
  );
};

export default Homepage;
