import React from 'react'
import './Start.css'

export default function Start() {
  return (
    <>
      <main>
        <div className="start-container">
          <div className="start-box">
            <h1>ゲーム説明</h1>
            <p>水色のボタンをクリックしてポイントを稼ぎましょう！</p>
            <p>ポイントを使ってアップグレードを購入し、より多くのポイントを獲得しましょう！</p>
            <p>ゴールスコアを設定し、達成するとクリア！</p>

            <select>
              <option value="1000">ゴールスコア: 1000</option>
              <option value="5000">ゴールスコア: 5000</option>
              <option value="10000">ゴールスコア: 10000</option>
              <option value="50000">ゴールスコア: 50000</option>
              <option value="100000">ゴールスコア: 100000</option>
              <option value="500000">ゴールスコア: 500000</option>
              <option value="1000000">ゴールスコア: 1000000</option>
              <option value="5000000">ゴールスコア: 5000000</option>
              <option value="10000000">ゴールスコア: 10000000</option>
              <option value="50000000">ゴールスコア: 50000000</option>
              <option value="100000000">ゴールスコア: 100000000</option>
              <option value="500000000">ゴールスコア: 500000000</option>
              <option value="1000000000">ゴールスコア: 1000000000</option>
            </select>

            <div className="start-button">
              <button>ゲームスタート</button>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
