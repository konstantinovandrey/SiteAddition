
// collections/authors.ts
import type { Collection } from "tinacms";

export const AuthorsCollection: Collection = {
  label: "Авторы",
  name: "authors",
  path: "content/authors",
  format: "md",
  fields: [
    { 
      type: "string", 
      label: "Имя", 
      name: "name",
      required: true,
      isTitle: true 
    },
    { 
      type: "image", 
      label: "Фото", 
      name: "photo",
    //   uploadDir: () => 'author-photos'
    },
    { 
      type: "rich-text", 
      label: "Биография", 
      name: "bio",
      isBody: true,
    //   ui: {
    //     itemProps: (item) => ({ label: item?.platform || "Новая платформа" }),
    //     // toolbar: [
    //     //     { name: "italic", icon: "italic" }, // Иконки из TinaCMS или кастомные
    //     //     { name: "bold", icon: "bold" },
    //     //     { name: "link", icon: "link" }
    //     //   ]
    //   } 
    },
    {
      type: "object",
      label: "Соцсети",
      name: "social",
      list: true,
      fields: [
        { type: "string", name: "platform", label: "Платформа" },
        { type: "string", name: "url", label: "Ссылка" }
      ]
    }
  ]
};