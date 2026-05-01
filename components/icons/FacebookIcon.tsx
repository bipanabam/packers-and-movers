import React from "react";

type FacebookIconProps = {
  size?: number;
  className?: string;
  color?: string;
};

const FacebookIcon: React.FC<FacebookIconProps> = ({
  size = 20,
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 22"
      fill="none"
      className={className}
    >
      <path
        d="M7.58333 12.4583H10.2917L11.375 8.125H7.58333V5.95833C7.58333 4.8425 7.58333 3.79167 9.75 3.79167H11.375V0.151667C11.0218 0.105083 9.68825 0 8.27992 0C5.33867 0 3.25 1.79508 3.25 5.09167V8.125H0V12.4583H3.25V21.6667H7.58333V12.4583Z" 
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;