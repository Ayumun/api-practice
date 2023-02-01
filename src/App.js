// import { useRef, useState } from "react";
import './App.css';
import { useState } from "react";
import { ShowApi } from "./ShowApi";


function App() {

    //取得した文字列を格納
    const [fetchData, setFetchData] = useState([]);
    //クリックされたかどうかの状態を保持する
    const [isClick, setIsClick] = useState(false);

    //クリック時に動作
    const handleclick = (e) => {
      //更新を防ぐ
      e.preventDefault();
      
      //Clickされた場合trueをセット
      setIsClick(true);
  
      //API URL(社用AWS)
      const endpointURL = ``;
  
      //APIをたたく（fetch data）
      //非同期を用いる　fetch→responseをjson形式でreturn→dataをfetchDataにセット
      //最後はエラー処理
      fetch(endpointURL)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setFetchData(data.weather);
      })
      .catch((error) => {
      console.log(error);
      });
  
    };

    //クリック時に動作（リセットボタン）
    const handleclickreset = () => {
      setIsClick(false);
    }


  return (
    <div className="container">
      <h2>API GatewayにデプロイしたAPIを叩きます</h2>
      {/*Enter時に入力された値を関数に渡す */}
      <div onClick={handleclick}>
        <input type="button" value="現在の東京の天気を見る"></input>
        {/*三項演算子を用いる。isClickがtrueの場合はprops、falseの場合はpタグがuiに出力*/}
        {/*props：親コンポーネントから子コンポーネントへ値を渡すための仕組み*/}
        {isClick ? (
          <ShowApi fetchData={fetchData} />
        ) : ( 
          <p className="ApiResultShow">天気が表示されていません</p>
        )}
      </div>
      {/* リセットボタンを押すことで、isClickにfalseがsetされるので、false時の三項演算子の出力になる */}
      <div onClick={handleclickreset}>
        <input className="ResetButton" type="button" value="リセット" ></input>
      </div>
    </div>
  );
}

export default App;
