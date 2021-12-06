import React, { useContext } from "react";

export const MutationContext = React.createContext({});
export const useMutationContext = (): any => useContext(MutationContext);
