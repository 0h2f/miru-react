import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

function PopularCard({ cover, author, title, stars }) {
    let [popStars, setPopStars] = useState([]);
    const cardStars = 5;

    useEffect(() => {
        let arr = [];
        let index = 0;

        for (; index < stars; index++) {
            arr.push(<IoIosStar />);
        }
        for (; index !== cardStars; index++) {
            arr.push(<IoIosStar className="text-blue-800" />);
        }
        setPopStars(arr);
    }, [])

    return (
        <>
            <div className="mx-6">
                <div className="relative cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                    <img className="drop-shadow-sm-bold w-[240px] h-[359px] min-w-[15rem] max-h-[22.5rem] rounded-[3rem]" src={cover} />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 rounded-[3rem]" />
                </div>


                <div className="mt-5 flex justify-center text-2xl space-x-4 text-orange-600">
                    {
                        popStars
                    }
                </div>
                <div className="block text-center text-blue-800">
                    <h3 className={
                        `mt-4 
                    ${title.length > 14 ? "font-bold text-2xl" : "font-bold text-3xl"}`
                    }>{title}</h3>
                    <p className="text-lg">{author}</p>
                </div>

            </div>
        </>
    );
}

export default PopularCard;