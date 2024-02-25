function NewsCard({ title, anchorText, url, image }) {

    return (
        <>
            <article className="flex text-wrap mt-4 pb-1">
                <img src={image} className="bg-white h-36 w-72 rounded-3xl" />
                <div className="block w-[30rem] pr-10">
                    <p className={`
                        ml-5 text-white font-semibold 
                        ${title.length < 70 ? "text-2xl" : "text-lg"}
                        ${title.length > 85 && "text-base"}
                    `}>
                        {title}
                    </p>
                    <a className="ml-5 mt-1 text-xm text-white underline" href={url}>{anchorText}</a>
                </div>
            </article>
        </>
    );
}

export default NewsCard;