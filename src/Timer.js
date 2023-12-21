import React from "react";

function Timer({time,start,stop}){

    const{ms,s,m,h}=time;

    return(
        <div>
            <section className="timer-sec">
            <div className="container">
                <div className="col">
                    <h2>Stop Timer</h2>
                    <div className="time-h">
                        <span>
                            {h>=10 ? h:"0" + h}
                        </span>
                        <span>
                            {m>=10 ? m:"0" + m}
                        </span>
                        <span>
                            {s>=10 ? s:"0" + s}
                        </span>
                        <span>
                            {ms>=10 ? ms:"0" + ms}
                        </span>
                    </div>
                    <div className="buttons">
                        <button className="start-but" onClick={start}>Start</button>
                        <button className="stop-but" onClick={stop}>Stop</button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Timer