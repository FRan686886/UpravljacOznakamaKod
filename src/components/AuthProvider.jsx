import { createContext, createSignal, useContext, onMount } from "solid-js";
import { supabase } from "../supabase";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [session, setSession] = createSignal(null);

  onMount(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <AuthContext.Provider value={session}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}