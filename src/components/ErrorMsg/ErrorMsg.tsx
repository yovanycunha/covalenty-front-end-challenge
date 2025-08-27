import "./errorMsg.css";
import { IErrorMsgProps } from "./type";

export function ErrorMsg({ msg }: IErrorMsgProps) {
  return <div className="msg">{msg}</div>;
}
