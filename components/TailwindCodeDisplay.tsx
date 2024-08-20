import { motion } from "framer-motion";

import { CopyIcon } from "@/components/Icons";
import AlertIcon from "@/components/AlertIcon";
import type { AlertType } from "@/components/AlertIcon";

const TailwindCodeDisplay: React.FC<{
  code: string;
  alert: { type: AlertType; message: string } | null;
  onCopy: () => void;
}> = ({ code, alert, onCopy }) => (
  <motion.div
    layout
    className="m-auto max-w-sm rounded-lg border border-current"
  >
    <header className="flex w-full items-center justify-between px-4 py-3">
      <h1 className="text-sm">Tailwind CSS Code</h1>
      {alert ? (
        <AlertIcon type={alert.type} />
      ) : (
        <button
          title="Copy Tailwind CSS Code"
          onClick={onCopy}
          className="text-white hover:text-rose-500"
        >
          <CopyIcon />
        </button>
      )}
    </header>
    <div className="flex shrink-0 grow-0 basis-auto items-center gap-4 overflow-auto rounded-b-lg bg-black p-4">
      <code className="shrink-0 text-xs">{code}</code>
    </div>
  </motion.div>
);

export default TailwindCodeDisplay;
