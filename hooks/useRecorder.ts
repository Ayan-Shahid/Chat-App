import { useEffect, useState } from "react";
const useRecorder = () => {
	const [state, setState] = useState<{
		minutes?: number;
		seconds?: number;
		init?: boolean;
		stream?: MediaStream | null;
		recorder?: MediaRecorder | null;
		audio?: string | null;
	}>({
		minutes: 0,
		seconds: 0,
		init: false,
		stream: null,
		recorder: null,
		audio: null,
	});

	const start = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

			setState((prevState) => {
				return {
					...prevState,
					init: true,
					stream,
				};
			});
		} catch (error) {
			return error;
		}
	};

	const stop = async () => {
		if (state.recorder?.state !== "inactive") {
			state.recorder?.stop();
			setState((prevState) => {
				return {
					...prevState,
					init: false,
				};
			});
		}
	};

	useEffect(() => {
		if (state.stream) {
			setState((prevState) => {
				if (prevState.stream)
					return {
						...prevState,
						recorder: new MediaRecorder(prevState.stream),
					};
				else return prevState;
			});
		}
	}, [state.stream]);

	useEffect(() => {
		const recorder = state.recorder;

		let chunks: BlobPart[] | undefined = [];
		if (recorder && recorder?.state === "inactive") {
			recorder.start();

			recorder.ondataavailable = (event) => {
				chunks?.push(event.data);
			};

			recorder.onstop = () => {
				const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
				chunks = [];

				setState((prevState) => {
					if (prevState.recorder)
						return {
							...prevState,
							audio: URL.createObjectURL(blob),
						};
					else return prevState;
				});
			};
		}
		return () => {
			if (recorder)
				recorder.stream.getAudioTracks().forEach((track) => track.stop());
		};
	}, [state.recorder]);

	return { state, start, stop };
};

export default useRecorder;
