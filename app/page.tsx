"use client";
// needed because NextJS is SSR by default, and we want to do client-side rendering for now.
import { useState, useEffect } from "react";
import { client } from "../tina/__generated__/client";
// this will be used to query our Tina CMS to get our awesome title
// you may need to update the relative import depending on your setup


export default function Home() {
  const [amazingTitle, setAmazingTitle] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const result = await client.queries.my_first_collection({
        relativePath: "Hello-World.md",
      });
      setAmazingTitle(result.data.my_first_collection.title);
    };

    fetchContent();
  }, []);
return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World!</h1>
      </main>
    </div>
  );
}