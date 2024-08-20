import { useState } from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertState {
  type: AlertType;
  message: string;
}

const useClipboard = () => {
  const [alert, setAlert] = useState<AlertState | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setAlert({ type: "success", message: "Copied to Clipboard" });
        setTimeout(() => setAlert(null), 3000);
      },
      (err) => {
        setAlert({ type: "error", message: "Could not copy text" });
        console.error("Could not copy text: ", err);
      },
    );
  };

  return { alert, copyToClipboard };
};

export default useClipboard;
