# Chronometer

This project is a chronometer built with React, featuring start, pause, and reset functionalities. Additionally, it plays a notification sound after 25 minutes to signal the end of a cycle.

## Features

- **Time Display:** The chronometer shows formatted minutes, seconds, and milliseconds.
- **Chronometer Controls:** Allows starting, pausing, and resetting the timer.
- **Sound Notification:** Plays a sound when 25 minutes are completed.

## Project Structure

The project consists of the following components:

1. **Display:**
   - Responsible for displaying the formatted time.
   - Props:
     - `time`: An object containing `minutes`, `seconds`, and `milliseconds`.

2. **Controls:**
   - Responsible for control buttons (Start, Stop, Reset).
   - Props:
     - `isRunning`: Boolean indicating whether the chronometer is active.
     - `onStart`: Function to start the timer.
     - `onStop`: Function to stop the timer.
     - `onReset`: Function to reset the timer.

3. **Chronometer:**
   - Main component that manages the time state, execution control, and sound playback.

## How to Use

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the project:**
   ```bash
   npm start
   ```

3. **Interact with the chronometer:**
   - Click **Start** to start the timer.
   - Use **Stop** to pause the timer.
   - Use **Reset** to reset the timer.

## Customizations

- **Cycle Duration:**
  - Change the `minutes >= 25` check in the `startTimer` function to modify the notification time.

- **Notification Sound:**
  - Replace the `notification_sound.mp3` file with your desired sound.

## Technologies Used

- React
- Hooks (useState, useRef, useEffect)
- JavaScript
- HTML/CSS