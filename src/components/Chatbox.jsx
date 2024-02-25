import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";

import samyPfp from "../assets/profileImage/sammy_pfp.jpg"
import vvvvvvvvPfp from "../assets/profileImage/vvvvvvv_pfp.jpg"
import laraSDPfp from "../assets/profileImage/larasd_pfp.jpg"
import nandinPfp from "../assets/profileImage/nandin_pfp.jpg"
import fabuPfp from "../assets/profileImage/fabuzada_pfp.jpg"
import NewMessage from "./NewMessage";


function Chatbox() {
    const [messages, setMessages] = useState([
        {
            user: "𝒮𝒶𝓂𝓎 ❤💕",
            userPfp: samyPfp,
            message: "Ta amarrado, só mangá porcaria. Não se fazem mais mangás como antigamente"
        },
        {
            user: "vvvvvvvv",
            userPfp: vvvvvvvvPfp,
            message: "Alá, chegou a especialista. Sabe de nada fih. Da licença."
        },
        {
            user: "LaraSD",
            userPfp: laraSDPfp,
            message: "Sem toxicidade no chat, a pagina é para postar opinião, não gostou, só sair."
        },
        {
            user: "NandinXDxdDelas",
            userPfp: nandinPfp,
            message: "Isso ain manah, arrasa. Direito das mulheres !"
        },
        {
            user: "Fabuzada",
            userPfp: fabuPfp,
            message: "0.0"
        }
    ]);

    function addMessageHandler(messageData) {
        setMessages((existingMessages) => [...existingMessages, messageData]);
    }

    useEffect(() => {
        let chatbox = document.getElementById("chatboxScroll");
        chatbox.scrollTop = chatbox.scrollHeight;
    }, [messages])

    return (
        <>
            <div className="absolute top-0 right-10 ml-5 mt-16">
                <h1 className="block text-blue-900 text-5xl font-bold">Chat</h1>
                <div id="chatboxScroll" className="
                    block h-[37rem] w-[40rem] justify-end self-end items-end pb-5 mt-8
                    m-4 bg-gradient-to-b from-blue-900 to-blue-600 rounded-3xl drop-shadow-sm-bold
                    overflow-y-scroll scroll-smooth
                ">
                    {
                        messages.map((message) => {
                            return <ChatMessage
                                user={message.user}
                                userPfp={message.userPfp}
                                message={message.message}
                                key={message.message}
                            />
                        })
                    }
                </div>
                <NewMessage onAddMessage={addMessageHandler} />
            </div>
        </>
    );
}

export default Chatbox;