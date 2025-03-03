import { Router, Route, A } from "@solidjs/router";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import { Show } from "solid-js";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Bookmarks from "./pages/Bookmarks";

export default function App() {
  return (
    <AuthProvider>
      <Router root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/bookmarks" component={Bookmarks} />
      </Router>
    </AuthProvider>
  );
}

function Layout(props) {
  const appName = "Bookmark Manager";
  const session = useAuth();

  return (
    <div class="p-4 flex flex-col gap-4">
      <div class="flex flex-wrap align-top items-start gap-2">
        <div class="flex-1 text-3xl text-neutral-500 uppercase">
          {appName}
        </div>
        <div class="flex-none flex flex-wrap gap-2">
          <A href="/" class="bg-blue-400 p-2 rounded hover:bg-blue-300">Home</A>
          <Show when={session()}>
            <A href="/bookmarks" class="bg-blue-400 p-2 rounded hover:bg-blue-300">Bookmarks</A>
          </Show>
          <Show when={!session()}>
            <A href="/signin" class="bg-blue-400 p-2 rounded hover:bg-blue-300">Sign In</A>
          </Show>
          <Show when={session()}>
            <A href="/signout" class="bg-blue-400 p-2 rounded hover:bg-blue-300">Sign Out</A>
          </Show>
        </div>
      </div>

      <div class="min-h-[75vh] w-10/12 mx-auto">
        {props.children}
      </div>

      <div class="text-center text-xs text-neutral-500">
        All rights reserved {new Date().getFullYear()}.
      </div>
    </div>
  );
}