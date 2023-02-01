import React from 'react'

//親コンポーネントからの値を受け取る
export const ShowApi = ({fetchData}) => {
  return (
    <div>
      {/*map関数を使って、受け取ったデータを格納する(リストのように表示してける)*/}
          {fetchData.map((data) => (
            //fetchした値をuiに出力させる
            //map関数を実行するとリスト項目には key を与えるべきだとエラーがでる。
            //そのため、配列内の項目に安定した識別性を与えるため、それぞれの項目にkeyを指定する。 
            <div  key={data.id} className="ApiResultShow" >
              現在の東京の天気：{data.main}
            </div>
          ))}
    </div>
  )
}
