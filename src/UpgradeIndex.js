let UpgradeIndex = [
    {
        id: 1, 
        name: "クリックアップグレード",
        description: "1クリックごとに得られるカウントを増やします",
        cost: 5,
        amount: 0,
        cps: 0,
        clickup: 1,
        DisplayCount: 0,
        displayed: false
    },
    {
        id: 2,
        name: "自動化1",
        description: "自動化するアップグレードです(1秒ごとに1ポイント獲得)",
        cost: 5,
        amount: 0,
        cps: 1,
        clickup: 0,
        DisplayCount: 10,
        displayed: false
    },
    {
        id: 3,
        name: "自動化2",
        description: "自動化するアップグレードです(1秒ごとに5ポイント獲得)",
        cost: 5,
        amount: 0,
        cps: 5,
        clickup: 0,
        DisplayCount: 15,
        displayed: false
    }
]
export default UpgradeIndex;