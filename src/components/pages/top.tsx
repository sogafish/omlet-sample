import { CustomButton } from "../custom-button";

export function TopPage() {
  return (
    <div>
      TOP
      <CustomButton
        label="Hi"
        onClick={() => console.info("!!!")}
        unusedProp={39}
      />
    </div>
  );
}
