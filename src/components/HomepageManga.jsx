function HomepageManga(props) {
    return (
        <>
            <div className="ml-16 mt-12">
                <img className="md:h-60" src={props.logo} alt="logo" />

                <div className="ml-2 text-balance w-[36rem]">
                    <h3 className="text-slate-50 font-semibold md:text-4xl sm:text-3xl mt-2">{props.title}</h3>
                    <h3 className="text-slate-50 font-semibold md:text-4xl sm:text-3xl">{props.subtitle}</h3>
                    <p className={` ${props.text.length > 300 ? "md:text-lg sm:text-base" : "md:text-xl sm:text-lg" } text-zinc-100 mt-2 mb-8`}>
                        {props.text}
                    </p>
                    <a href="#" className={`rounded-full px-14 py-2 text-white text-xl font-bold bg-${props.anchorColor} hover:text-${props.anchorColor} hover:bg-white`}>{props.anchorText}</a>
                </div>
                <img className="absolute right-0 top-0 h-[76rem] -mt-24 -mr-16 opacity-20" src={props.coverBg} alt="cat 1" />
                <img className="absolute right-28 top-28 h-[44rem] rounded-[60px]" src={props.cover} alt="cat 1" />

            </div>
        </>
    );
}

export default HomepageManga;