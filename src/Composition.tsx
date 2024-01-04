import {WordsProvider} from "./contexts/WordsProvider";
import {BreaklinesProvider} from "./contexts/BreaklinesProvider";
// import Menu from "./components/menu-components/Menu/Menu";
import Stage from "./components/stage-components/Stage/Stage";
import "./compositionStyle.css"
export const MyComposition = () => {
    return (
        <div className="app">
            <WordsProvider>
                <BreaklinesProvider>
                    <Stage/>
                    {/*<Menu/>*/}
                </BreaklinesProvider>
            </WordsProvider>
        </div>
    )
};