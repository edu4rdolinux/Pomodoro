import StartButton from "./StartButton";

export default function Controls({ isRunning, onStop, onReset, onStart }) {
    return (
        <div className="Buttons">
            <StartButton isRunning={isRunning} onStart={onStart} />
            <button onClick={onStop} disabled={!isRunning}>
                Parar
            </button>
            <button onClick={onReset}>
                Resetar
            </button>
        </div>
    );
}
