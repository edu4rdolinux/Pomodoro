export default function StopButton({ isRunning, onStop }) {
    return (
        <button onClick={onStop} disabled={!isRunning}>
            Parar
        </button>
    );
}
