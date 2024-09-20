import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

const App = () => {
  const { isSidebarOpen, handleSideBarOpen } = useGlobalContext();
  return <main>
    <Navbar />
    <Hero />
    <Sidebar />
    <Submenu />
  </main>;
};
export default App;
