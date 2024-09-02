// import { useGlobalContext } from "./Context";
import Home from "./Home";
import Modal from "./Modal";
import SlideBar from "./SlideBar";



const App = () => {
  // const { isSlideBarOpen, isModalOpen } = useAppContext();
  // console.log(isModalOpen)
  // console.log(isSlideBarOpen)
  return <>
    <Home />
    <SlideBar />
    <Modal />
  </>;
};
export default App;
