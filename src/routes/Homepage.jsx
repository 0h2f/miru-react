import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

import miruLogo from "../assets/mangaLogo/mlogo.png";
import onePLogo from "../assets/mangaLogo/onepiece_logo_letter.png";
import onePCoverBg from "../assets/mangaCover/onepiece_cover_bg.png";
import onePCover from "../assets/mangaCover/onepiece_cover.jpg";
import mashleCover from "../assets/mangaCover/mashle_cover.jpg"
import mashleCoverBg from "../assets/mangaCover/mashle_cover_bg.png"
import mashleLogo from "../assets/mangaLogo/mashle_logo_letter.png"
import HomepageManga from "../components/HomepageManga";


function Homepage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselTimer, setCarouselTimer] = useState(30);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCarouselTimer((t) => t - 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (carouselTimer === 0) {
            (currentIndex != 2 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0));
            setCarouselTimer(30);
            //clearInterval(intervalRef.current)
        }
    }, [carouselTimer])

    return (
        <>
            <div className="bg-dots-texture  bg-contain bg-center ">
                <div className={
                    `relative snap-start bg-gradient-to-b ${currentIndex == 0 && "from-blue-700 via-blue-400"} 
                    ${currentIndex == 1 && "from-teal-700 via-teal-400"} ${currentIndex == 2 && "from-red-700 via-red-400"} 
                    h-screen w-screen overflow-hidden`
                }>
                    <Navbar />

                    {currentIndex == 0 && (
                        <div className="ml-16 mt-32 ">
                            <div className="flex items-center space-x-6 -mb-2">
                                <img className="md:w-56 sm:w-44" src={miruLogo} alt="logo" />
                                <h1 className="text-blue-900 md:text-9xl sm:text-8xl font-bold">MIRU</h1>
                            </div>
                            <div className="ml-2">
                                <h3 className="text-slate-50 font-semibold md:text-5xl sm:text-4xl mt-10">Deixe sua marca na maior</h3>
                                <h3 className="text-slate-50 font-semibold md:text-5xl sm:text-4xl">comunidade de mangás do Brasil</h3>
                                <p className="md:text-xl sm:text-lg text-zinc-200 mt-8">Registre seus mangás favoritos, acompanhe as</p>
                                <p className="md:text-xl sm:text-lg text-zinc-200 mb-9">novidades e faça amigos na Miru!</p>
                                <a href="#" className="rounded-full px-10 py-2 text-white text-xl font-bold bg-blue-800 hover:text-blue-700 hover:bg-white">Inscreva-se</a>
                            </div>
                        </div>
                    )}

                    {currentIndex == 1 && (
                        <HomepageManga
                            title="O pirata que estica está na área!"
                            subtitle="Novo volume disponível!"
                            text="À medida que a batalha entre Luffy e Kaido entra na rodada final, todos em Wano colocam suas vidas em risco para proteger sua casa. Mas mesmo que Luffy consiga realmente garantir a vitória, restará alguma coisa para um novo shogun governar?"
                            logo={onePLogo}
                            cover={onePCover}
                            coverBg={onePCoverBg}
                            anchorText="Leia Agora!"
                            anchorColor="teal-500"
                        />
                    )}

                    {currentIndex == 2 && (
                        <HomepageManga
                            title="Muito treino e Trabalho duro!"
                            subtitle="Mashle está disponível para review."
                            text="Mash só quer viver em paz com seu pai na floresta. Mas a única maneira de ele ser aceito no reino mágico é frequentando a escola de magia e se tornando um Visionário Divino - um aluno excepcional reverenciado como um dos escolhidos. Mas sem um pingo de magia em seu nome, Mash terá que abrir caminho para o primeiro lugar."
                            logo={mashleLogo}
                            cover={mashleCover}
                            coverBg={mashleCoverBg}
                            anchorText="Avalie!"
                            anchorColor="red-500"
                        />
                    )}

                    <div className="ml-20 flex items-center space-x-1 absolute bottom-56 left-0">
                        <button onClick={() => setCurrentIndex(0)} className={`rounded-full px-8 py-1 ${currentIndex == 0 ? "bg-blue-800 hover:bg-white hover:opacity-80" : "bg-blue-800 opacity-20 hover:opacity-80"}`} />
                        <button onClick={() => setCurrentIndex(1)} className={`rounded-full px-8 py-1 ${currentIndex == 1 ? "bg-teal-500 hover:bg-white hover:opacity-80" : "bg-blue-800 opacity-20 hover:opacity-80"}`} />
                        <button onClick={() => setCurrentIndex(2)} className={`rounded-full px-8 py-1 ${currentIndex == 2 ? "bg-red-500 hover:bg-white hover:opacity-80" : "bg-blue-800 opacity-20 hover:opacity-80"}`} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Homepage;