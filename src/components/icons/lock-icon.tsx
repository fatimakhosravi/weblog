import { Icon } from "./model";

export const LockIcon: React.FC<Icon> = ({ color, opacity = 1, className }) => (

    <svg
        width={18}
        height={22}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.707 13.45a3.75 3.75 0 0 1 3.75-3.75h9.2a3.75 3.75 0 0 1 3.75 3.75v2.334a6.083 6.083 0 0 1-6.083 6.083H6.79a6.083 6.083 0 0 1-6.083-6.083v-2.333Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v2.334a4.583 4.583 0 0 0 4.583 4.583h4.534a4.583 4.583 0 0 0 4.583-4.583v-2.333a2.25 2.25 0 0 0-2.25-2.25h-9.2Z"
            fill={color}
            fillOpacity={opacity}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.057 18.018a.9.9 0 0 1-.9-.9V14.45a.9.9 0 0 1 1.8 0v2.667a.9.9 0 0 1-.9.9ZM7.028 2.713c-.507.433-.871 1.091-.871 2.048v5.023a.9.9 0 0 1-1.8 0V4.761c0-1.472.586-2.635 1.504-3.418C6.759.578 7.925.217 9.057.217c1.132 0 2.298.36 3.196 1.126.918.783 1.504 1.946 1.504 3.418v5.023a.9.9 0 1 1-1.8 0V4.761c0-.957-.364-1.615-.871-2.048-.527-.449-1.26-.696-2.03-.696-.767 0-1.501.247-2.028.696Z"
            fill={color}
            fillOpacity={opacity}
        />
    </svg>
);

