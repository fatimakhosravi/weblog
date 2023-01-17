
type ButtonProps = {
    text?: string;
    variant?: "fill" | "outline" | "ghost" | "status" | "icon";
    size?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
    icon?: any;
    direction?: "ltr" | "rtl";
    "data-testid"?: string;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = (props: ButtonProps) => {


    return (
        <div>
            <Button
                onClick={props.onClick}
            />
        </div>
    );
};