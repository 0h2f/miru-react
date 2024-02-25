import { BsSearch } from "react-icons/bs";


function Navbar() {
    return (
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-end py-3 px-10 sm:items-baseline w-full">

                <label className="relative block w-full max-w-xs xl:max-w-sm xl:flex me-8">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 right-3 flex items-center pl-3">
                        <svg className="h-5 w-5 fill-slate-300 text-blue-600" viewBox="0 0 17 17"><BsSearch /></svg>
                    </span>
                    <input className="placeholder:text-slate-400 block bg-white
                        w-full border border-slate-300 rounded-full py-1 pl-3 pr-12 shadow-sm
                        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        sm:text-base font-semibold" placeholder="Search" type="search" name="search" />
                </label>

                <div className="font-bold inline-block text-sm space-x-4 leading-none mt-4 lg:mt-0">
                    <a href="#" className="rounded-full px-4 py-2 text-white border border-white hover:text-blue-700 hover:bg-white ">Log in</a>
                    <a href="#" className="rounded-full  px-3 py-2 text-white border border-blue-600 bg-blue-500 hover:text-blue-700 hover:bg-white">Sing up</a>
                </div>
            </nav>
    );
}
export default Navbar;