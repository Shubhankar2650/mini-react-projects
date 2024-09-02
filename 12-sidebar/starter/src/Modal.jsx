import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./Context";
const Modal = () => {
    const { isModalOpen, handleModal } = useAppContext();

    return (
        isModalOpen && <div className="modal">
            <div className="modal-container">
                <p>Modal Content</p>
                <button type="button" onClick={handleModal} className="modal-contianer-btn"><FaTimes /></button>
            </div>

        </div>


    )
}
export default Modal