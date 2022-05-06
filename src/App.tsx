import "./styles.css";
import { FC } from "react";

interface LoadingTextProps {
  isLoading: boolean;
}

interface SeverityMessageProps {
  severity: "error" | "warning";
}

const LoadingText: FC<LoadingTextProps> = ({ isLoading }) => (
  <div>{isLoading ? <span>Loading...</span> : <h2>Fertig geladen</h2>}</div>
);

const WarningMessage = ({ severity, message }) => (
  <div className={severity === "warning" ? "warning" : "error"}>{message}</div>
);

const WarningMessageWithChildren: FC<SeverityMessageProps> = ({
  severity,
  children
}) => <div className={severity}>{children}</div>;

const WarningMessageWithoutDestructuring = (props) => {
  return (
    <div className={props.severity === "warning" ? "warning" : "error"}>
      {props.message}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Time now: {new Date().toISOString()}</h2>
      <LoadingText isLoading={false} />
      <br />
      <WarningMessage severity="warning" message="Achtung, Fehlermeldung!" />
      <br />
      <WarningMessageWithChildren severity="warning">
        With Children: Ich bin eine Warnung !
      </WarningMessageWithChildren>
      <br />
      <WarningMessageWithoutDestructuring
        severity="error"
        message="Achtung, Fehlermeldung über die Props !"
      />
    </div>
  );
}
