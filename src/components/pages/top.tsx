import { CustomButton } from "../custom-button";
import { LargeComponent } from "../large-components";

export function TopPage() {
  return (
    <div>
      TOP
      <CustomButton
        label="Hi"
        onClick={() => console.info("!!!")}
        unusedProp={39}
      />
      <LargeComponent />
    </div>
  );
}
