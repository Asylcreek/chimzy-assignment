import { ComponentPropsWithRef, forwardRef } from "react";

import styles from "./svg-icon.styles.module.scss";

type IconName = "search" | "heart";

interface ISvgIcon extends ComponentPropsWithRef<"svg"> {
  iconName: IconName;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgIcon = forwardRef<any, ISvgIcon>(
  ({ iconName, ...otherProps }, ref) => {
    return (
      <svg ref={ref} {...otherProps} className={styles.svg}>
        <use href={"/sprite.svg" + "#icon-" + iconName} />
      </svg>
    );
  },
);

SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
