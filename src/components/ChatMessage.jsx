function ChatMessage({user, userPfp, message}) {
    return (
        <>
            <div className="flex">
                <img src={userPfp} className="ml-4 mt-5 rounded-full w-24 h-24 border-[3px] border-solid border-indigo-300" />
                <article className="text-wrap ml-2 mr-5 mt-5 pr-1 rounded-3xl bg-[#8daae3] w-[40rem] h-24">
                    <p className="text-blue-900 ml-3 mt-1 text-xm font-bold">{user}</p>
                    <p className="text-gray-100 ml-3 mt-1 text-md font-semibold">{message}</p>
                </article>
            </div>
        </>
    )
}

export default ChatMessage;