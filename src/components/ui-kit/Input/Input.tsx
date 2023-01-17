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
    type?: string;
};


export const Input: React.FC<InputProps> = ({ label, className, onChange, type, placeholder, name, value, error_message, icon: Icon = () => null, validator = undefined }) => {
    const [onFocus, set_onFocus] = React.useState<boolean>();
    const LabelStyles = `text-lg text-black font-bold `;
    const InputStyles = `h-14 rounded-lg text-sm w-full`;
    const staticStyle = `flex justify-end`;

    return (
        <div>
            <div className={classNames(className, `w-full ${error_message && "border-l-custom-error"}`)}>
                <div className="pb-2">
                    {label && <label className={classNames(className, LabelStyles, `${onFocus && "text-costume-green" || error_message && "placeholder:text-costume-red"}`)}>{label}</label>}
                </div>

                <div className={classNames(className, staticStyle)}>
                    <div className="relative w-full">
                        <input
                            className={classNames(className, InputStyles, `border pr-16 ${onFocus && "placeholder:text-costume-green outline-costume-green" || error_message && "placeholder:text-costume-red outline-costume-red"}`)}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => onChange && onChange(e.target.value)}
                            type={type}
                            onBlur={() => set_onFocus(false)}
                            onFocus={() => set_onFocus(true)}
                        />
                    </div>

                    <div className="absolute">
                        <Icon className={classNames(className, "m-5")} color={onFocus ? "#00C853" : error_message ? "#FE5656" : value ? "#000000" : "#333333"} opacity={onFocus || error_message || value ? 1 : 0.2} />
                    </div>
                </div>
            </div>
            {validator && validator}

            <div className={classNames("min-h-[32px] text-left")}>
                {error_message && <p className={"text-custom-error text-xs pl-4 leading-[1.1rem]"}>{error_message}</p>}
            </div>
        </div>
    );
};
