import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  // console.log('Demo running')
  return <MyParagraph>{ props.show ? 'this is new' : null }</MyParagraph>;
};

export default React.memo(DemoOutput);
