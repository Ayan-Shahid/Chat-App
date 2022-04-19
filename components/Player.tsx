import { useBoolean } from "hooks";
import { Pause, Play } from "icons";
import React, {
	ChangeEvent,
	FunctionComponent,
	useEffect,
	useRef,
	useState,
} from "react";
import { useTheme } from "styled-components";
import * as Styled from "styles/Player.elements";

interface IPlayer {
	src?: string;
}

const Player: FunctionComponent<IPlayer> = ({ src }: IPlayer) => {
	const [trackProgress, setTrackProgress] = useState(0);
	const { value: isPlaying, setFalse, setTrue } = useBoolean();
	const audioRef = useRef(new Audio(src));
	const intervalRef = useRef<NodeJS.Timer>();

	const { duration } = audioRef.current;
	const { colors } = useTheme();

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(1000);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended && setFalse) {
				setTrackProgress(0);
				setFalse();
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, 1000);
	};
	const onScrub = (event: ChangeEvent<HTMLInputElement>) => {
		// Clear any timers already running
		clearInterval(1000);
		audioRef.current.currentTime = parseInt(event.target.value);
		setTrackProgress(audioRef.current.currentTime);
	};
	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying && setTrue) {
			setTrue();
		}
		startTimer();
	};
	useEffect(() => {
		if (isPlaying && src) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);
	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(0);
		};
	}, []);
	return (
		<Styled.Box>
			{isPlaying ? (
				<Styled.Button onClick={setFalse}>
					<Pause color={colors.white[100]} size="14" />
				</Styled.Button>
			) : (
				<Styled.Button onClick={setTrue}>
					<Play color={colors.white[100]} size="14" />
				</Styled.Button>
			)}
			<Styled.Input
				max={duration ? duration : `${duration}`}
				type="range"
				value={trackProgress}
				step={0.01}
				onChange={onScrub}
				min="0"
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
			/>
		</Styled.Box>
	);
};

export default Player;
