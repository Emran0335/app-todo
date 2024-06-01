"use client";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <Provider store={store}>
        <Header />
        <hr className="mt-4" />
        <TodoList />
        <hr className="mt-4" />
        <Footer />
      </Provider>
    </div>
  );
}
