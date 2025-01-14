import { useState, useRef, useEffect } from "react"
import Display from "../components/Display"
import Controls from "../components/Controls"

export default function Chronometer() {
    const [time, setTime] = useState({ minutes: 24, seconds: 59, milliseconds: 0 })
    const [isRunning, setIsRunning] = useState(false)
    const [stage, setStage] = useState("focus")
    const intervalRef = useRef(null)
    const audioRef = useRef(null)

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true)
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    let { minutes, seconds, milliseconds } = prevTime

                    milliseconds += 10
                    if (milliseconds >= 1000) {
                        milliseconds = 0
                        seconds += 1

                        if (seconds >= 60) {
                            seconds = 0
                            minutes += 1
                        }

                        if (stage === "focus" && minutes >= 25 && seconds === 0) {
                            audioRef.current.play().catch(error => {
                                console.error("Error playing audio:", error)
                            })
                            setStage("break")
                            return { minutes: 0, seconds: 0, milliseconds: 0 }
                        } else if (stage === "break" && minutes >= 5 && seconds === 0) {
                            audioRef.current.play().catch(error => {
                                console.error("Error playing audio:", error)
                            })
                            setStage("focus")
                            return { minutes: 0, seconds: 0, milliseconds: 0 }
                        }
                    }

                    return { minutes, seconds, milliseconds }
                })
            }, 10)
        }
    }

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        setIsRunning(false)
    }

    const resetTimer = () => {
        stopTimer()
        setTime({ minutes: 0, seconds: 0, milliseconds: 0 })
        setStage("focus")
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Display time={time} />
            <Controls
                isRunning={isRunning}
                onStart={startTimer}
                onStop={stopTimer}
                onReset={resetTimer}
            />
            <audio ref={audioRef} src="/sounds/notification_sound.mp3" preload="auto" />
        </div>
    )
}
