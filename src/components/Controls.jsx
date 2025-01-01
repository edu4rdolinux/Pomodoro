export default function Controls({ isRunning, onStart, onStop, onReset }) {
    return (
        <div className="Buttons">
            <button onClick={onStart} disabled={isRunning}>
                Iniciar
            </button>
            <button onClick={onStop} disabled={!isRunning}>
                Parar
            </button>
            <button onClick={onReset}>
                Resetar
            </button>
        </div>
    );
}
