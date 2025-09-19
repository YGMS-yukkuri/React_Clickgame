let UpgradeIndex = [
    {
        id: 1, 
        name: "クリックアップグレード",
        description: "1クリックごとに得られるカウントを増やします",
        cost: 10,
        costupper: 1.1,
        amount: 0,
        cps: 0,
        clickup: 1,
        DisplayCount: 0,
        displayed: false
    },
    {
        id: 2,
        name: "自動化1",
        description: "ポイントを自動で稼ぐアップグレードです(1秒ごとに1ポイント獲得)",
        cost: 10,
        costupper: 1.2,
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
        cost: 10,
        costupper: 1.2,
        amount: 0,
        cps: 5,
        clickup: 0,
        DisplayCount: 15,
        displayed: false
    },
    {
        id: 4,
        name: "猫の手",
        description: "猫の手が今回特別に！！借りられます(1回あたりのクリック数が増加します)",
        cost: 100,
        costupper: 1.15,
        amount: 0,
        cps: 10,
        clickup: 15,
        DisplayCount: 1000,
        displayed: false
    },
    {
        id: 5,
        name: "自動化3",
        description: "自動化するアップグレードです(1秒ごとに100ポイント獲得)",
        cost: 500,
        costupper: 1.2,
        amount: 0,
        cps: 100,
        clickup: 0,
        DisplayCount: 10000,
        displayed: false
    },
    {
        id: 6,
        name: "千手観音",
        description: "千手観音が裏で頑張ってくれます(1秒ごとに1000ポイント獲得)",
        cost: 1000,
        costupper: 1.2,
        amount: 0,
        cps: 1000,
        clickup: 100,
        DisplayCount: 100000,
        displayed: false
    }
]
export default UpgradeIndex;