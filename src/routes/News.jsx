import NewsCard from "../components/NewsCard";

import battleRoyManga from "../assets/newsImg/battle_royale_manga.jpg";
import jujutsuGetoKenj from "../assets/newsImg/jujutsu_kaisen_geto_kenjaku.png";
import snkIndieGame from "../assets/newsImg/snk_indie_game.jpg";
import InstagramPost from "../components/InstagramPost";

function News() {
    return (
        <>
            <div className="flex snap-start bg-gradient-to-t from-blue-500 h-screen w-screen">
                <div className="block">
                    <h1 className="mt-32 ml-10 text-blue-800 text-3xl font-semibold">Noticias</h1>

                    <div className="block mt-4 ml-10 pt-1 pl-4 pb-2 bg-blue-800 rounded-3xl">
                        <NewsCard
                            title="Mangá de Batlle Royale será publicado no Brasil pela Pipoca & Nanquim"
                            anchorText="Saiba mais..."
                            image={battleRoyManga}
                        />
                        <NewsCard
                            title="''É uma loucura'' fã passa 2 anos desenvolvendo sozinho game 100% gratuito baseado em um dos mangás mais populares do mundo"
                            anchorText="Saiba mais..."
                            image={snkIndieGame}
                        />
                        <NewsCard
                            title="Jujutsu Kaisen pode ter selado o destino de Kenjaru"
                            anchorText="Saiba mais..."
                            image={jujutsuGetoKenj}
                        />
                    </div>
                </div>
                <InstagramPost/>
            </div>
        </>
    );
}

export default News;