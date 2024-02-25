function ComunityCard({ image, title, subtitle }) {
    return (
        <>
            <div className="">
                <div className="relative cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-sm-bold">
                    <img src={image} className="bg-blue-300 h-60 w-60  rounded-[2rem] object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 rounded-[2rem] text-center">
                        <p className="mt-[11.6rem] text-sm text-white font-bold">{title}</p>
                        <p className="text-sm text-white font-bold">{subtitle}</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ComunityCard;