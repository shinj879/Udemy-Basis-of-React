import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("beginning");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  /*useStateは配列の0番目（左側）に変数名、１番目（右側）に0番目の状態を変えるための関数を
  書く（set変数名、と書くのが一般的）。↑のnumの場合、 numを＋1したいので、↓の様に、新しい関数を
  定義して、setNum(numをどう変更したいかという処理の式)を書く*/

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [
    num
  ]); /** useEffectは第二引数にとった変数に変更がなければ、再レンダリングした際に、
  useEffect内の処理をスキップする。第二引数に空のリストを入れれば、useEffect内の処理を
  一度だけ読み込ませることもできる。 */

  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(＠_＠;)</p>} {/* 左がtrueの場合、右を返す */}
    </>
  );
};

export default App;
