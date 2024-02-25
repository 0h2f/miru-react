import Chatbox from "../components/Chatbox";
import ArtCard from "../components/ArtCard.jsx";
import ComunityCard from "../components/ComunityCard.jsx";
import sJumpCover from "../assets/gallery/shounen_jump.jpeg";
import kimetsuCover from "../assets/mangaCover/kimetsu_cover_5.jpg";
import jujutsuCover from "../assets/mangaCover/jujutsu_cover.jpg";
import mashleArt from "../assets/gallery/mash_mashle_pointing.jpg"
import yohanArt from "../assets/gallery/yohan_mosnter_coffee.jpg"
import onePArt from "../assets/gallery/oneP_cover223321.webp"

function Gallery() {
    return (
        <>
            <div className="snap-start bg-blue-dots-texture bg-contain bg-center h-screen w-screen ">
                <div className="flex w-full h-full relative">
                    <div className="inline-block">
                        <h1 className="mt-16 ml-16 text-blue-900 text-5xl font-bold">Galeria</h1>

                        <div className="flex space-x-10 mt-8 ml-16  ">
                            <ArtCard image={mashleArt} artist="@artistabrabo"/>
                            <ArtCard image={onePArt} artist="@artistabrabo"/>
                            <ArtCard image={yohanArt} artist="@artistabrabo"/>
                        </div>
                        <h1 className="mt-8 ml-16 text-blue-900 text-5xl font-bold">Comunidades</h1>

                        <div className="flex mt-8 space-x-10 ml-16 ">
                            <ComunityCard image={sJumpCover} title="O PROTAGONISTA" subtitle="SEMPRE VENCE" />
                            <ComunityCard image={kimetsuCover} title="SÓ LEIO MANGA PQ" subtitle="O TRAÇO É BOM" />
                            <ComunityCard image={jujutsuCover} title="NÃO É MODINHA, VOCÊ QUE" subtitle="NÃO SABE OQ É BOM" />
                        </div>
                    </div>
                    <Chatbox />
                </div>
            </div>
        </>
    );
}

export default Gallery;