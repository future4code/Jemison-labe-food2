import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

export function useUnprotectedPage() {
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
         goToFeedPage(navigate);
      }
   }, [navigate]);
}
