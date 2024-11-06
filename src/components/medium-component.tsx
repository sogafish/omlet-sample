import { SmallComponent } from "./small-components";

export const MediumComponent = () => {
  return (
    <div>
      This Component Has SmallComponent
      <div>
        <SmallComponent />
      </div>
    </div>
  );
};
