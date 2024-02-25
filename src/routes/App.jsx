import Gallery from "./Gallery";
import Homepage from "./Homepage";
import News from "./News";
import Popular from "./Popular";

function App() {
    return (
        <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden no-scrollbar">
            <Homepage />
            <Popular />
            <Gallery />
            <News />
        </div>
    );
}

export default App;