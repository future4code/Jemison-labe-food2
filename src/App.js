import React from "react";
import { GlobalStyles } from "./Styled";
import { GlobalState } from "./global/GlobalState";
import { Router } from "./routes/Router";

export default function App() {
   return (
      <GlobalState>
         <GlobalStyles />
         <Router />
      </GlobalState>
   );
}
