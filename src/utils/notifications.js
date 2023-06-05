import LordIcon from "components/LordIcon";
import { toast } from "react-toastify";

class Notifications {
    success = (content) => {
        const colorSuccess = getComputedStyle(document.documentElement).getPropertyValue('--color-success');
        toast.success(content, {
            icon: <LordIcon
                icon='success'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorSuccess}`} />
        });
    };
    warning = (content) => {
        const colorWarning = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');
        toast.warning(content, {
            icon: <LordIcon
                icon='warning'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorWarning}`} />
        });
    };
    error = (content) => {
        const colorError = getComputedStyle(document.documentElement).getPropertyValue('--color-error');
        toast.error(content, {
            icon: <LordIcon
                icon='error'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorError}`} />
        });
    };
    info = (content) => {
        const colorInfo = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
        toast.info(content, {
            icon: <LordIcon
                icon='info'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorInfo}`} />
        });
    };
}

export const notifications = new Notifications();