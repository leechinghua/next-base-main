import { createContext } from "react";

// 1. 建立與導出它
// defaultValue是在套用context失敗時才會出現的值，可以使用有意義的預設值，或使用null(目的是為了除錯)。
export const AuthContext = createContext(null)