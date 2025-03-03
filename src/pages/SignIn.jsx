import supabase from "../supabase";

export default function SignIn() {
  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  return (
    <div class="text-center">
      <h2 class="text-2xl font-bold">Prijava</h2>
      <button onClick={signInWithGoogle} class="bg-red-500 text-white p-2">
        Prijavi se putem Google-a
      </button>
    </div>
  );
}