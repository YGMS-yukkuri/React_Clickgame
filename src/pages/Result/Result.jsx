import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {
  const location = useLocation();
  const { goal, count, fillCount } = location.state || { goal: 0, count: 0, fillCount: 0 };
  return (
    <div>
      <h1>リザルト画面</h1>
      <p>クリア条件: {goal}以上</p>
      <p>あなたが取得した累計スコア: {count}</p>
      <p>あなたが取得したフィルスコア: {fillCount}</p>
    </div>
  )
}
