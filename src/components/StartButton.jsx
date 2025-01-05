export default function StartButton({ isRunning, onStart }) {
    return (
        <button onClick={onStart} disabled={isRunning}>
            Iniciar
        </button>
    );
}
