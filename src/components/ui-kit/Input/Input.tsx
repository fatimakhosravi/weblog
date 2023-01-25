import { EyeIcon } from "@/components/icons";
import classNames from "classnames";
import React from "react";

type InputProps = {
    label?: string | React.ReactNode;
    error_message?: string;
    icon?: React.ElementType;
    className?: string;
    validator?: any;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => null;
    type?: "password" | "text";
};

export const Input: React.FC<InputProps> = ({ label, className, onChange, type, placeholder, name, value, error_message, icon: Icon = () => null, validator = undefined }) => {
    const [onFocus, set_onFocus] = React.useState<boolean>();

    return (
        <div className={classNames(className, 'w-full h-full')}>
            {label && <label className={`text-lg font-bold font-iranyekan ${onFocus && "text-[#00C853]" || error_message && "text-[#FE5656]"}`}>{label}</label>}
            <div className={`w-[386px] relative flex flex-row items-center mt-2 ${onFocus && "border-[#00C853]" || error_message && "border-[#FE5656]"} `}>
                <Icon className="absolute right-5 z-10" color={onFocus ? "#00C853" : error_message ? "#FE5656" : "#333333"} opacity={onFocus || error_message || value ? 1 : 0.2} />

                <input
                    className={classNames(`relative placeholder:font-iranyekan border rounded-[15px] pr-14 h-14 w-full ${onFocus && "placeholder:opacity-0 focus:outline-none border-[#00C853] caret-[#00C853]" || error_message && "placeholder:opacity-0 outline-none border-[#FE5656] caret-[#FE5656]"}`)}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    type={type}
                    onBlur={() => set_onFocus(false)}
                    onFocus={() => set_onFocus(true)}
                />

                {type === "password" &&
                    <EyeIcon className="absolute left-5 z-10" color={onFocus ? "#00C853" : error_message ? "#FE5656" : "#333333"} opacity={onFocus || error_message || value ? 1 : 0.2} />
                }
            </div>
            {validator && validator}
            <div className={"min-h-[32px] text-right"}>
                {error_message && <p className={"text-custom-error text-xs pl-4 leading-[1.1rem]"}>{error_message}</p>}
            </div>
        </div>
    );
};
