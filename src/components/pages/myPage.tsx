import { useMemo } from "react";
import { CustomButton } from "../custom-button";

export function MyPage() {
  const randomNumber = useMemo(() => {
    return Math.round(Math.random() * 10);
  }, []);
  return (
    <div>
      <CustomButton
        label="Click!!!"
        onClick={() => console.info("clicked")}
        unusedProp={randomNumber}
      />
    </div>
  );
}
