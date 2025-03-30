// .tina/schema.ts
import { CustomCalendar } from "../components/calendar";

export const quoteBlockSchema = {
  name: "calendar", // уникальный идентификатор
  label: "Цитата", // название в интерфейсе Tina
  component: CustomCalendar, // ваш компонент
  fields: [ // поля для редактирования
    {
      type: "string",
      name: "text",
      label: "Текст цитаты",
      required: true
    },
    {
      type: "string",
      name: "author",
      label: "Автор"
    }
  ]
};