import { toast } from "react-toastify";

import LordIcon from "components/LordIcon";

class Notifications {
    success = (content, options) => {
        const colorSuccess = getComputedStyle(document.documentElement).getPropertyValue('--color-success');
        toast.success(content, {
            icon: <LordIcon
                icon='success'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorSuccess}`} />,
            ...options
        });
    };
    warning = (content, options) => {
        const colorWarning = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');
        toast.warning(content, {
            icon: <LordIcon
                icon='warning'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorWarning}`} />,
            ...options
        });
    };
    error = (content, options) => {
        const colorError = getComputedStyle(document.documentElement).getPropertyValue('--color-error');
        toast.error(content, {
            icon: <LordIcon
                icon='error'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorError}`} />,
            ...options
        });
    };
    info = (content, options) => {
        const colorInfo = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
        toast.info(content, {
            icon: <LordIcon
                icon='info'
                trigger='loop'
                delay='800'
                state='intro'
                size='30px'
                colors={`primary:${colorInfo}`} />,
            ...options
        });
    };
}

export const notifications = new Notifications();