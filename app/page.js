import Header from "../components/Header";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <Header />
      <hr className="mt-4" />
      <TodoList />
      <hr className="mt-4" />
      <Footer />
    </div>
  );
}
