import React from "react";

export default function NotesPage() {
  return (
    <div>
      <h1>Notes Page</h1>
      <p>This page is now a valid module with a default export.</p>
    </div>
  );
}

// import { createClient } from "@/utils/supabase/server";

// export default async function Notes() {
//   const supabase = await createClient();
//   const { data: notes } = await supabase.from("notes").select();

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>;
// }
