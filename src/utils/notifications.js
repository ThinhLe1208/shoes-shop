import LordIcon from "components/LordIcon";
import { toast } from "react-toastify";
import { ERROR_ICON_CDN, INFO_ICON_CDN, SUCCESS_ICON_CDN, WARNING_ICON_CDN } from "./constants/settingSystem";

class Notifications {
    success = (content) => {
        const colorSuccess = getComputedStyle(document.documentElement).getPropertyValue('--color-success');
        toast.success(content, {
            icon: <LordIcon
                src={SUCCESS_ICON_CDN}
                trigger='loop'
                delay='500'
                state='intro'
                size='30px'
                colors={`primary:${colorSuccess}`} />
        });
    };
    warning = (content) => {
        const colorWarning = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');
        toast.warning(content, {
            icon: <LordIcon
                src={WARNING_ICON_CDN} trigger='loop'
                delay='500'
                state='intro'
                size='30px'
                colors={`primary:${colorWarning}`} />
        });
    };
    error = (content) => {
        const colorError = getComputedStyle(document.documentElement).getPropertyValue('--color-error');
        toast.error(content, {
            icon: <LordIcon
                src={ERROR_ICON_CDN}
                trigger='loop'
                delay='500'
                state='intro'
                size='30px'
                colors={`primary:${colorError}`} />
        });
    };
    info = (content) => {
        const colorInfo = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
        toast.info(content, {
            icon: <LordIcon
                src={INFO_ICON_CDN}
                trigger='loop'
                delay='500'
                state='intro'
                size='30px'
                colors={`primary:${colorInfo}`} />
        });
    };
}

export const notifications = new Notifications();