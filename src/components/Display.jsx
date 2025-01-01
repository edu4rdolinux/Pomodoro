export default function Display({ time }) {
    const { minutes, seconds, milliseconds } = time;

    return (
        <h1>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}:
            {String(milliseconds).padStart(3, "0")}
        </h1>
    );
}
