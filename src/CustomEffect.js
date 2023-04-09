import CustomPass from "./CustomPass.js";
import { forwardRef } from "react";

export default forwardRef(function (props, ref) {
  const effect = new CustomPass(props);

  return <primitive ref={ref} object={effect} />;
});
