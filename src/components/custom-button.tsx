import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
  unusedProp: number;
};

export const CustomButton: FC<Props> = (props) => {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
};
