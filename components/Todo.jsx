"use client"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "@/public/images/cancel.png";
import Image from "next/image";
import updateStatus from "@/redux/thunk/updateStatus";
import updapteColor from "@/redux/thunk/updateColor";
import deleteTodo from "@/redux/thunk/deleteTodo";
import { useRouter } from "next/navigation";

const Todo = ({ todo }) => {
  const { text, completed, color, id } = todo;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleStatusChange = (todoId, statusChange) => {
    dispatch(updateStatus(todoId, statusChange));
    router.refresh()
  };
  const handleColorChange = (todoId, color) => {
    dispatch(updapteColor(todoId, color));
    router.refresh();
  };
  
  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
    router.reload();
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          name="checkox"
          onChange={() => handleStatusChange(id, completed)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
      <div className={`select-none flex-1 ${completed && " line-through"}`}>
        {text}
      </div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500 "
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500  ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>
      <Image
        src={cancelImage}
        alt="cancel"
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default Todo;
