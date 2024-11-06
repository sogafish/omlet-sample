import { CustomButton } from "./custom-button";
import { MediumComponent } from "./medium-component";
import { SmallComponent } from "./small-components";

export const LargeComponent = () => {
  return (
    <div>
      This is LargeComponent
      <div>
        <MediumComponent />
      </div>
      <SmallComponent />
      <CustomButton onClick={() => undefined} label="Click" />
    </div>
  );
};
