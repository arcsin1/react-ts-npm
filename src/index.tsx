import React from "react";

type IProps = {
  name: string;
};

const SayHi: React.FC<IProps> = ({ name }) => {
  return <div>sayHi,{name}</div>;
};

export default SayHi;
