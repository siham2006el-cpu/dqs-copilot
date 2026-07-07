import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/api";

// Enveloppe une page pour vérifier que l'utilisateur est connecté.
// Si non connecté -> redirection automatique vers /login.
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}