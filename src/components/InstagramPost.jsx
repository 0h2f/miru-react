import { FcLike } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";

function InstagramPost() {
    return (
        <>
            <div className="block">
                <h1 className="mt-32 ml-10 text-blue-800 text-3xl font-semibold">Olhe a gente!</h1>
                <div className="pt-1 block mt-4 ml-10 bg-white h-[504px]">
                    <div className="flex">
                        <div className="bg-blue-800 rounded-full h-10 w-10 mt-2 ml-2 border-2 border-red-500" />

                        <div className="inline-block ml-2 mt-2">
                            <p className="text-sm font-bold text-black">mirumanga</p>
                            <p className="text-xs font-semibold text-zinc-400">Vitoria, Espirito Santo</p>
                        </div>
                    </div>
                    <div className="bg-blue-800 w-[354px] h-80 mt-3" />
                    <div className="flex space-x-3 ml-3 mt-2 text-2xl">
                        <FcLike /> <AiOutlineComment /> <IoPaperPlaneOutline />
                    </div>
                    <div className="ml-80 -mt-6 text-2xl">
                        <GoBookmark />
                    </div>
                    <div className="flex ml-3 mt-3 text-sm">
                        <IoMdHeart />
                        <div className="text-xs -mt-0.5 ml-1">
                            <p className="font-bold"> 532 Likes</p>
                        </div>
                    </div>
                    <p className=" text-sm ml-3 mt-2">
                        <b>mirumanga</b> Curiosidade: Você sabia que o site da
                    </p>
                    <p className="ml-3 text-sm">
                        miru foi criado no powerpoint?
                    </p>
                </div>
            </div>
        </>
    )
}

export default InstagramPost;