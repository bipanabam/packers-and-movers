import React from "react";

type TiktokIconProps = {
  size?: number;
  className?: string;
  color?: string;
};

const TiktokIcon: React.FC<TiktokIconProps> = ({
  size = 25,
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 25"
      fill="none"
      className={className}
    >
      <path
        d="M16.8952 3.82994C15.967 2.76995 15.4554 1.40893 15.4556 0H11.2589V16.8409C11.2272 17.7524 10.8427 18.6161 10.1864 19.2495C9.53016 19.883 8.65349 20.2368 7.74137 20.2362C5.81282 20.2362 4.21022 18.6608 4.21022 16.7051C4.21022 14.3691 6.46472 12.6171 8.78713 13.3369V9.04518C4.10157 8.42044 0 12.0602 0 16.7051C0 21.2276 3.74845 24.4464 7.72779 24.4464C11.9923 24.4464 15.4556 20.9832 15.4556 16.7051V8.16239C17.1573 9.38451 19.2004 10.0402 21.2956 10.0366V5.83998C21.2956 5.83998 18.7423 5.96221 16.8952 3.82994Z"
        fill={color}
      />
    </svg>
  );
};

export default TiktokIcon;