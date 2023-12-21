import Navbar from "./components/navbar";
import Todos from "./components/todos";
import { Toaster } from "sonner";
export default function Home() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Todos />
    </>
  );
}
