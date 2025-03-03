import { useNavigate } from "@solidjs/router";
import supabase from "../supabase";

export default function SignOut() {
  const navigate = useNavigate();

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/");
  }

  handleSignOut();

  return <p>Odjavljujem...</p>;
}