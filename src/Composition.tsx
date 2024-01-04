import {WordsProvider} from "./contexts/WordsProvider";
import {BreaklinesProvider} from "./contexts/BreaklinesProvider";
import Menu from "./components/menu-components/Menu/Menu";
import Stage from "./components/stage-components/Stage/Stage";

export const MyComposition = () => {
	return (
		<WordsProvider>
			<BreaklinesProvider>
				<Stage/>
				<Menu/>
			</BreaklinesProvider>
		</WordsProvider>
	)
};
