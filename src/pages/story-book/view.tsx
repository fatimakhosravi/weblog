import { UIKit } from "../../components";
import resource from "../../resource.json";
import { Icon } from "../../components";

export const View = () => (
    <UIKit.Input icon={Icon.EyeIcon} placeholder={resource.input_label.username_placeholder} label={resource.input_label.user_name} />
    // <h1 className="bg-red-700" >fatima</h1>
);
