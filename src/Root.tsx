import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={60}
				fps={60}
				width={1024}
				height={2048}
			/>
		</>
	);
};
