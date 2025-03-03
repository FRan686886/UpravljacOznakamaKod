import { createSignal, createResource, Show, For } from "solid-js";
import { supabase } from "../supabase";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = createSignal([]);

  async function fetchBookmarks() {
    const { data, error } = await supabase.from("bookmarks").select("*");
    if (error) console.error(error);
    return data || [];
  }

  const [bookmarksResource] = createResource(fetchBookmarks);

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold">Your Bookmarks</h1>
      <Show when={bookmarksResource.loading}>Loading...</Show>
      <ul>
        <For each={bookmarksResource()}>{(bookmark) => (
          <li class="border p-2 mt-2">{bookmark.title}</li>
        )}</For>
      </ul>
    </div>
  );
}