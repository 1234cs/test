import { useCallback, useState } from "react";

export default (initValue = null): Array<string> => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
