import React from "react";

type InputProps = {
    label?: string | React.ReactNode;
    hint_message?: string;
    error_message?: string;
    icon?: React.ReactNode;
    className?: string;
    validator?: any;
    hint_className?: string;
    border_radius?: string;
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;


export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { label, className, hint_message, error_message, icon = undefined, border_radius = "tw-rounded-lg", validator = undefined, hint_className } = props;

    const containerSize = "tw-w-full";
    const staticStyle = `tw-flex tw-flex-row tw-items-center tw-justify-between tw-border-1 ${border_radius} tw-h-12 tw-border-solid tw-border-l-4 tw-border tw-border-custom-box-border tw-pr-4 tw-pl-3`;
    let inputStyle = "";

    if (label !== "" && label !== undefined) {
        inputStyle = "tw-pt-5 tw-pb-1";
    }
    return (
        <div className="">
            <div className={`tw-w-full ${staticStyle} ${error_message && "tw-border-l-custom-error"}`}>
                <div className={"input-container tw-h-full tw-w-full"}>
                    <input name={props.name} value={props.value ?? ""}
                        autoComplete={"off"}
                        onChange={props.onChange}
                        className={`tw-h-full focus:tw-outline-none tw-border-none tw-text-sm tw-text-custom-text ${inputStyle} placeholder:tw-text-sm placeholder:tw-text-custom-input-text tw-w-full`}
                        placeholder={label === undefined || label === "" ? props.placeholder : ""}
                        type={props.type}
                        onBlur={props.onBlur}
                        onKeyUp={props.onKeyUp}
                        ref={ref} />
                    {label && <label className={`${props.value && error_message ? "errorFilled" : props.value ? "filled" : ""} ${props.required && "after:tw-content-['*'] after:tw-text-custom-error after:tw-ml-0.5 tw-block tw-text-sm tw-text-slate-700"}`}>{label}</label>}
                </div>
                {icon && icon}
            </div>
            {validator && validator}

            <div >
                {(error_message === undefined || error_message === "") && hint_message && <p className={"tw-text-custom-input-text tw-text-xs tw-pl-4 tw-leading-[1.875rem]"}>{hint_message}</p>}
                {error_message && <p className={"tw-text-custom-error tw-text-xs tw-pl-4 tw-leading-[1.1rem]"}>{error_message}</p>}
            </div>
        </div>
    );
});