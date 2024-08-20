import { alertIcons, alertStyles, AlertType } from "./AlertIcon";

export interface AlertProps {
  type: AlertType;
  message: string;
}

const AlertNotification: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div
      role="alert"
      className={`fixed left-0 top-0 z-20 flex w-full items-center gap-2 bg-black px-4 py-3 font-mono text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]} {message}
    </div>
  );
};

export default AlertNotification;
