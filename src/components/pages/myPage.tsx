import { CustomButton } from "../custom-button";

export function MyPage() {
  return (
    <div>
      <CustomButton
        label="Click!!!"
        onClick={() => console.info("clicked")}
        unusedProp={30}
      />
    </div>
  );
}
