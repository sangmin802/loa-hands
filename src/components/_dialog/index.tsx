import React from "react";
import DialogHook from "hooks/dialogHook";
import DialogOpen from "hooks/dialogOpen";
import "./index.css";

const Index = () => {
  const { dialog, setDialog } = DialogHook();
  const closeDialog = React.useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  DialogOpen(dialog);

  return (
    <>
      {dialog && (
        <div className="dialogBack" onClick={closeDialog}>
          {dialog}
        </div>
      )}
    </>
  );
};

export default React.memo(Index, () => true);
