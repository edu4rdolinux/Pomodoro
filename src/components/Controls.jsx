import ResetButton from "./ResetButton";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

export default function Controls({ isRunning, onStop, onReset, onStart }) {
    return (
        <div className="Buttons">
            <StartButton isRunning={isRunning} onStart={onStart} />
            <StopButton isRunning={isRunning} onStop={onStop}/>
            <ResetButton onReset={onReset}/>
        </div>
    );
}
