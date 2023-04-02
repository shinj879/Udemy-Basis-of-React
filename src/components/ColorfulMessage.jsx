import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入でprops.color props.childrenを短く書けるようにした
  const contentStyle = {
    color, //元はcolor:color で書いていたが、プロパティ名とバリューが同じ名前だから省略
    fontSize: `18px`
  };

  return <p style={contentStyle}>{children}</p>;
}; //元は、props.children。chidrenはAPP.jsxファイルの方で、タグで囲った部分（お元気ですか？）を受け取る。
export default ColorfulMessage;
