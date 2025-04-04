// collections/books.ts
import type { Collection } from "tinacms";
import { iconSchema } from "../fields/icon";
import { ColorPickerInput } from "../fields/color";

export const BooksCollection: Collection = {
  label: "Книги",
  name: "books",
  path: "content/books",
  format: "md", // или "json" если предпочитаете JSON
  ui: {
    // global: true, // Убрать, если не нужно глобальное меню
    filename: {
      slugify: (values) => 
        `${values?.title?.toLowerCase().replace(/ /g, '-')}`
    }
  },
  fields: [
    { 
      type: "string", 
      label: "Название", 
      name: "title", 
      required: true,
      isTitle: true 
    },
    { 
      type: "image", 
      label: "Обложка", 
      name: "cover",
      uploadDir: () => 'book-covers' 
    },
    {
      type: "reference",
      label: "Авторы",
      name: "authors",
      collections: ["authors"], // Связь с коллекцией авторов
      list: true
    },
    { 
      type: "number", 
      label: "Рейтинг", 
      name: "rating",
      ui: {
        component: "rating",
        validate: (value) => {
          if (value < 0 || value > 5) return "Рейтинг должен быть от 0 до 5"
        }
      } 
    },
    { 
      type: "datetime", 
      label: "Дата добавления", 
      name: "date",
      ui: {
        timeFormat: "HH:mm"
      } 
    },
    { 
      type: "rich-text", 
      label: "Описание", 
      name: "body", 
      isBody: true,
      templates: [
        {
          name: "Quote",
          label: "Цитата",
          fields: [{ type: "string", name: "text", label: "Текст" }]
        }
      ]
    },
    iconSchema,
    {
      type: "string",
      label: "Цвет акцента",
      name: "color",
      ui: {
        component: ColorPickerInput
      }
    }
  ]
};
