function ArtCard({ image, artist}) {
    return (
        <>
            <div className="relative cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                <img src={image} className="drop-shadow-sm-bold h-80 w-60 rounded-[3rem] object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 rounded-[3rem] text-center">
                    <p className="text-white font-bold text-lg mt-[17.6rem] ">{artist}</p>
                </div>
            </div>
        </>
    )
}

export default ArtCard;