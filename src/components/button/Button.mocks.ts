import { IButton } from "./Button";

const base: IButton = {
  color: "default",
  children: "Label",
  onClick: () => {
    console.log("click event");
  },
  type: 'button'
};

export const mockButtonProps = {
  base
};