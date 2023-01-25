import { Icon } from "./model";

export const UserIcon: React.FC<Icon> = ({ color, opacity = 1, className }) => (
    <svg
        width={21}
        height={21}
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        fillOpacity={opacity}
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.75a3.536 3.536 0 1 0 0 7.071 3.536 3.536 0 0 0 0-7.071ZM4.964 5.286a5.036 5.036 0 1 1 10.072 0 5.036 5.036 0 0 1-10.072 0ZM2.31 15.166c1.557-1.664 4.09-2.916 7.976-2.916s6.42 1.252 7.976 2.916c1.538 1.643 2.06 3.619 2.06 4.977a.75.75 0 0 1-.75.75H1a.75.75 0 0 1-.75-.75c0-1.358.522-3.334 2.06-4.977Zm-.496 4.227h16.944a6.19 6.19 0 0 0-1.59-3.202c-1.23-1.312-3.34-2.441-6.882-2.441s-5.652 1.129-6.88 2.441a6.19 6.19 0 0 0-1.592 3.202Z"
            fill={color}
            fillOpacity={opacity} />
    </svg>
);

