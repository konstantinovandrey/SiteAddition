// Коллекция "Книги"
import type { Collection } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { iconSchema } from "../fields/icon";

const Library: Collection = {
    path: "content/global",
    format: "json",
    ui: {
      global: true,
    },
    label: "Книги",
    name: "books",
    path: "content/books",
    fields: [
      { type: "string", label: "Название", name: "title", required: true },
      { type: "image", label: "Обложка", name: "cover" },
      { type: "string", label: "Автор", name: "author", list: true }, // Связь с коллекцией авторов
      { type: "number", label: "Рейтинг", name: "rating", ui: { component: "rating" } }, // Плагин для звезд
      { type: "datetime", label: "Дата добавления", name: "date" },
      { type: "rich-text", label: "Описание", name: "body", isBody: true },
    ],
  },
  // Коллекция "Авторы"
  {
    label: "Авторы",
    name: "authors",
    path: "content/authors",
    fields: [
      { type: "string", label: "Имя", name: "name" },
      { type: "image", label: "Фото", name: "photo" },
      { type: "string", label: "Биография", name: "bio", ui: { component: "textarea" } },
    ],
  }