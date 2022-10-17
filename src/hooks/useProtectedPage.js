import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export function useProtectedPage() {
   const navigate = useNavigate();

   return useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
         goToLoginPage(navigate);
      }
   }, [navigate]);
}
