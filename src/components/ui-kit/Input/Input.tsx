import classNames from "classnames";
import React from "react";

type InputProps = {
    label?: string | React.ReactNode;
    error_message?: string;
    first_icon?: React.ElementType;
    second_icon?: React.ElementType;
    className?: string;
    validator?: any;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => null;
    type?: string;
};

export const Input: React.FC<InputProps> = ({ label, className, onChange, type, placeholder, name, value, error_message, first_icon: FirstIcon = () => null, second_icon: SecondIcon = () => null, validator = undefined }) => {
    const [onFocus, set_onFocus] = React.useState<boolean>();

    return (
        <div className={classNames(className)}>
            {label && <label className={`text-lg font-bold font-iranyekan ${onFocus && "text-[#00C853]" || error_message && "text-[#FE5656]"}`}>{label}</label>}
            <div className={`w-[386px] flex flex-row items-center border rounded-[15px] mt-2 ${onFocus && "border-[#00C853]" || error_message && "border-[#FE5656]"} `}>
                <div className="pr-4">
                    <FirstIcon color={onFocus ? "#00C853" : error_message ? "#FE5656" : "#333333"} opacity={onFocus || error_message || value ? 1 : 0.2} />
                </div >
                <input
                    className={classNames(`placeholder:font-iranyekan border-none pr-7 h-14 ${onFocus && "placeholder:opacity-0 focus:outline-none outline-[#00C853] caret-[#00C853]" || error_message && "placeholder:opacity-0 outline-none caret-[#FE5656]"}`)}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    type={type}
                    onBlur={() => set_onFocus(false)}
                    onFocus={() => set_onFocus(true)}
                />
                <div className="pl-4">
                    <SecondIcon color={onFocus ? "#00C853" : error_message ? "#FE5656" : "#333333"} opacity={onFocus || error_message || value ? 1 : 0.2} />
                </div>
            </div>
            {validator && validator}
            <div className={"min-h-[32px] text-right"}>
                {error_message && <p className={"text-custom-error text-xs pl-4 leading-[1.1rem]"}>{error_message}</p>}
            </div>
        </div>
    );
};
