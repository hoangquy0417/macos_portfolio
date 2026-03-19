import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {Nav, Welcome, Dock} from "#components";
import {Terminal} from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
    return (
        <main>
            <Nav/>
            <Welcome/>
            <Dock/>
            <Terminal/>
        </main>
    )
}
export default App
