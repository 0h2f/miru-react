import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PopularCard from "../components/PopularCard";

import mashleCover from "../assets/mangaCover/mashle_cover.jpg"
import onepunchanCover from "../assets/mangaCover/onepunchman_cover.jpg";
import monsterCover from "../assets/mangaCover/monster_cover.jpg";
import aynikCover from "../assets/mangaCover/aynik_cover.jpg";
import toradoraCover from "../assets/mangaCover/toradora_cover.jpg";
import onePCover from "../assets/mangaCover/onepiece_cover_100.jpg";
import jujutsuCover from "../assets/mangaCover/jujutsu_cover.jpg";
import tkrevengersCover from "../assets/mangaCover/tkrevengers_cover.jpg";

function Popular() {
    let cards = [
        { cover: `${mashleCover}`, title: "Mashle", author: "Hajime koumet", stars: 4 },
        { cover: `${onepunchanCover}`, title: "One Punch Man", author: "One", stars: 5 },
        { cover: `${aynikCover}`, title: "All You Need Is Kill", author: "Hiroshi Sakurazaka", stars: 4 },
        { cover: `${monsterCover}`, title: "Monster", author: "Naoki Urasawa", stars: 5 },
        { cover: `${toradoraCover}`, title: "Toradora", author: "Yuyuko Takemiya", stars: 1 },
        { cover: `${onePCover}`, title: "One Piece", author: "Echiro Oda", stars: 2 },
        { cover: `${jujutsuCover}`, title: "Jujutsu Kaisen", author: "Gege Akutami", stars: 3 },
        { cover: `${tkrevengersCover}`, title: "Tokyo Revengers", author: "Ken Wakui", stars: 5 },
    ];

    function previousCard() {
        let scroll = document.getElementById("popularScroll");
        scroll.scrollLeft = scroll.scrollLeft - 300;
    }

    function nextCard() {
        let scroll = document.getElementById("popularScroll");
        scroll.scrollLeft = scroll.scrollLeft + 300;
    }

    return (
        <>
            <div className="relative snap-start bg-blue-dots-texture bg-contain bg-center h-screen w-screen">
                <p className="opacity-0 text-sm/[0px]">.</p>
                <h1 className="ml-20 mt-44 text-blue-900 text-5xl font-bold">Popular</h1>
                
                <button className="absolute left-0 bottom-[50%] z-50 text-blue-900 text-5xl ml-3 hover:scale-125 ">
                    <FaAngleLeft onClick={previousCard} />
                </button>
                <button className="absolute right-0 bottom-[50%] z-50 text-blue-900 text-5xl mr-3 hover:scale-125 ">
                    <FaAngleRight onClick={nextCard} />
                </button>

                <div className="flex justify-center items-center self-center">
                    <div id="popularScroll" className="w-[92vw] z-0 flex mt-16 justify-left justify-items overflow-hidden scroll-smooth ">
                        {
                            cards.map((props) => {
                                return <PopularCard
                                    cover={props.cover} title={props.title} author={props.author} stars={props.stars}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    );
}

export default Popular;