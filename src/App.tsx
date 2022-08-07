import { useState } from "react";

export default function App() {
    const [money, setMoney] = useState(5000);
    const [rate, setRate] = useState({ 日幣: 0.2256, 美金: 30.225, 澳幣: 21.09, 韓元: 0.02514, 印尼幣: 0.00238 });

    return (
        <div>
            <h3>新增幣種</h3>
            <input type="text" placeholder="幣種名稱" />
            <input type="text" placeholder="匯率" />
            <input type="button" value="新增幣種" />
            <hr />
            <h3>您錢包還有 {money} 元</h3>
            請輸入您要換的台幣
            <input type="text" placeholder="台幣" />
            <input type="button" value="計算" />
            <p>可以換算</p>
            <ul>
                <li>
                    日幣： <input type="button" value="兌換" onClick={() => {}} />
                </li>
            </ul>
            <hr />
            <h3>您的兌換記錄</h3>
            <ul>
                <li>您用100元台幣，兌換了454日幣</li>
                <li>您用100元台幣，兌換了3.3美金</li>
            </ul>
        </div>
    );
}
