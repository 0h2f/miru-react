import { MdSend } from "react-icons/md";
import { useState } from "react";
import fabuPfp from "../assets/profileImage/fabuzada_pfp.jpg"

function NewMessage({ onAddMessage }) {
    const [userInput, setUserInput] = useState('');

    function changeInputHandler(event) {
        setUserInput(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const messageData = {
            message: userInput,
            user: "Fabuzada",
            userPfp: fabuPfp
        };
        onAddMessage(messageData);
    }
    return (
        <>
            <div className="ml-4 relative flex items-center h-16 w-[40rem] drop-shadow-sm-bold bg-blue-700 rounded-xl">
                <img src={fabuPfp} className="w-12 h-12 ml-2 rounded-full border-[3px] border-solid border-indigo-300" />
                <form onSubmit={submitHandler}>
                    <input id="textMessage" required onChange={changeInputHandler} type="text" placeholder="Postar mensagem..." className="ml-2 w-[34.2rem] h-10 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md" />
                    <button type="submit" class="absolute right-2 inset-y-0inline-flex items-center justify-center rounded-md px-2 py-2 transition duration-500 ease-in-out text-white bg-[#8daae3] hover:bg-[#8da0e3] focus:outline-none">
                        <MdSend className="w-6 h-6" />
                    </button>
                </form>
            </div>
        </>
    );
}

export default NewMessage;