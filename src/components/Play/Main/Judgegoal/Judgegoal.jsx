import React, { useEffect } from 'react'

export default function Judgegoal({ goal, count }) {

    useEffect(() => {
        console.log(`Goal: ${goal}, Current Score: ${count}`);
        document.querySelector('.goalbar-fill').style.width = `${(count / goal) * 100}%`;
    }, [goal, count]);

  return (
    <div>Judgegoal: {goal} | Current Score: {count}
        <div className="goalbar">
            <div className="goalbar-fill" style={{ width: `${(count / goal) * 100}%` }}></div>
        </div>
    </div>
  )
}
