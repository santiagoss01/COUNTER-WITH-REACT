import React from "react";




//create your first component
const Home = () => {
	const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(true);
  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch text-center">
		<h4 id="primero">This is the ultimate counter!</h4>
		<h4 id="segundo">This is the ultimate counter!</h4>
		<h4 id="tercero">This is the ultimate counter!</h4>
		<h4 id="cuarto">This is the ultimate counter!</h4>
		<h4 id="quinto">This is the ultimate counter!</h4>
		<h4 id="sexto">This is the ultimate counter!</h4>
		<h4 id="septimo">This is the ultimate counter!</h4>
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setRunning(true)}>resume</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
    </div>
  );
};

export default Home;