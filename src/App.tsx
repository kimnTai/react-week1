import { useState } from "react";

export default function App() {
    // 新增幣種
    const [newRate, setNewRate] = useState({ name: "", rate: 0 });
    // 錢包
    const [money, setMoney] = useState(5000);
    // 要換的台幣
    const [calculate, setCalculate] = useState(1);
    // 幣種
    const [rate] = useState(
        new Map([
            ["日幣", 0.2256],
            ["美金", 30.225],
            ["澳幣", 21.09],
            ["韓元", 0.02514],
            ["印尼幣", 0.00238],
        ])
    );
    // 兌換紀錄
    const [exchange] = useState([] as string[]);
    // 可以換算
    const rateList = [...rate].map(([k, v]) => {
        return (
            <li key={k}>
                {k}:{(calculate / v).toFixed(4)}
                <input
                    type="button"
                    value="兌換"
                    onClick={() => {
                        setMoney(money - calculate);
                        exchange.push(`您用${calculate}台幣，兌換了${(calculate / v).toFixed(4)}${k}`);
                    }}
                />
            </li>
        );
    });
    // 您的兌換紀錄
    const exchangeList = exchange.map((v, i) => <li key={i}>{v}</li>);

    return (
        <div>
            <h3>新增幣種</h3>
            <input
                type="text"
                placeholder="幣種名稱"
                value={newRate.name}
                onChange={({ target: { value } }) => setNewRate((pre) => ({ ...pre, name: value.trim() }))}
            />
            <input
                type="number"
                placeholder="匯率"
                value={newRate.rate}
                onChange={({ target: { value } }) => setNewRate((pre) => ({ ...pre, rate: +value }))}
            />
            <input
                type="button"
                value="新增幣種"
                onClick={() => {
                    rate.set(newRate.name, newRate.rate);
                    setNewRate({ name: "", rate: 0 });
                }}
            />
            <hr />
            <h3>您錢包還有 {money} 元</h3>
            請輸入您要換的台幣
            <input
                type="number"
                placeholder="台幣"
                value={calculate}
                onChange={({ target: { value } }) => setCalculate(+value)}
            />
            <p>可以換算</p>
            <ul>{rateList}</ul>
            <hr />
            <h3>您的兌換記錄</h3>
            <ul>{exchangeList}</ul>
        </div>
    );
}
