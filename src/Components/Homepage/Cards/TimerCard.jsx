import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import decrease from './Assets/decrease.png';
import increase from './Assets/increase.png';
import collen from './Assets/collen.png';
import Bgm from './Assets/Bgm.mp3';

const TimerCard = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [audio] = useState(new Audio(Bgm)); // Initialize audio element

  const startTimer = () => {
    setIsTimerRunning(true);
    audio.play(); // Start playing the audio when the timer starts
  };

  const calculateProgress = useCallback(() => {
    const totalSeconds = hours * 3600 + min * 60 + sec;
    const totalTime = 3600; // Assuming a total time of 1 hour for this example
    const progress = ((totalTime - totalSeconds) / totalTime) * 440; // 440 is the circumference of the circle

    // If the progress is below 0, set it to 0
    return Math.max(progress, 0);
  }, [hours, min, sec]);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ strokeDashoffset: calculateProgress() });
  }, [calculateProgress, controls]);

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        if (sec > 0) {
          setSec(sec - 1);
        } else {
          if (min > 0) {
            setMin(min - 1);
            setSec(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMin(59);
              setSec(59);
            } else {
              setIsTimerRunning(false);
              clearInterval(timerInterval);
              audio.pause(); // Pause the audio when the timer stops
              audio.currentTime = 0; // Reset the audio to the beginning
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isTimerRunning, sec, min, hours, audio]);

  return (
    <div className="bg-[#1E2343] w-[92.5%] h-[230px] rounded-lg mx-auto flex justify-around items-center">
      <div className="relative">
        <motion.div
          className="bg-[#191E39] rounded-full w-[182px] h-[182px] flex justify-center items-center"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
        >
          <p className="text-white font-roboto text-[35px]">{`${hours} : ${min} : ${sec}`}</p>
          <motion.svg
            className="absolute top-0 left-0"
            width="182"
            height="182"
            viewBox="0 0 182 182"
          >
            <motion.circle
              cx="91"
              cy="91"
              r="88"
              fill="none"
              stroke="#FF6A6A"
              strokeWidth="10"
              strokeDasharray="440"
              strokeDashoffset={calculateProgress()}
              animate={controls}
            />
          </motion.svg>
        </motion.div>
      </div>
      <div className="text-white w-[40%] h-[80%]">
        <div className="top flex justify-around items-center ml-8">
          <div className="flex flex-col justify-around items-center">
            <p className="mb-2">Hours</p>
            <button className=""><img src={increase} alt="" className="" onClick={() => setHours(hours + 1)} /></button>
            <p className="text-[45px]">{hours}</p>
            <button className=""><img src={decrease} alt="" className="" onClick={() => setHours(Math.max(hours - 1, 0))} /></button>
          </div>
          <img src={collen} alt=":" className="mt-6" />
          <div className="flex flex-col justify-around items-center">
            <p className="mb-2">Minutes</p>
            <button className=""><img src={increase} alt="" className="" onClick={() => setMin(min + 1)} /></button>
            <p className="text-[45px]">{min}</p>
            <button className=""><img src={decrease} alt="" className="" onClick={() => setMin(Math.max(min - 1, 0))} /></button>
          </div>
          <img src={collen} alt=":" className="mt-6" />
          <div className="flex flex-col justify-around items-center">
            <p className="mb-2">Seconds</p>
            <button className=""><img src={increase} alt="" className="" onClick={() => setSec(sec + 1)} /></button>
            <p className="text-[45px]">{sec}</p>
            <button className=""><img src={decrease} alt="" className="" onClick={() => setSec(Math.max(sec - 1, 0))} /></button>
          </div>
        </div>
        <button
          className="m-4 w-full h-10 bg-[#FF6A6A] text-white font-roboto font-[400] text-8 rounded-full"
          onClick={startTimer}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TimerCard;