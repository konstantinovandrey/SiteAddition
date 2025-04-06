// // .tina/schema.ts
// import { CustomCalendar } from "../components/calendar";

// export const quoteBlockSchema = {
//   name: "calendar", // уникальный идентификатор
//   label: "Цитата", // название в интерфейсе Tina
//   component: CustomCalendar, // ваш компонент
//   fields: [ // поля для редактирования
//     {
//       type: "string",
//       name: "text",
//       label: "Текст цитаты",
//       required: true
//     },
//     {
//       type: "string",
//       name: "author",
//       label: "Автор"
//     }
//   ]
// };

// const schema = {
//   collections: [
//       {
//           name: "post",
//           label: "Blog Posts",
//           path: "content/posts",
//           format: "mdx",
//           fields: [
//               {
//                   name: 'title',
//                   label: 'Title',
//                   type: 'string',
//                   isTitle: true,
//                   required: true, 
//               },
//               {
//                   name: 'description',
//                   label: 'Description',
//                   type: 'string',
//               },
//               {
//                   name: 'exerciseType',
//                   label: 'ExerciseType',
//                   type: 'object', 
//                   fields: [
//                       {
//                           name: 'exercises',
//                           label: 'Exercises',
//                           type: 'string',
//                           ui: {
//                               component: 'textarea',
//                           },
//                       }
//                   ],
//               }
//           ]
//       },
//   ],
//   globals: [
//       {
//           name: "siteConfig",
//           label: "Настройки сайта",
//           path: "content/settings/site.json",
//           fields: [
//               { name: "title", label: "Название сайта", type: "string" },
//               { name: "description", label: "Описание", type: "string" },
//               { name: "logo", label: "Логотип", type: "image" }
//           ]
//       },
//       {
//           name: "navigation",
//           label: "Навигационное меню",
//           path: "content/settings/menu.json",
//           fields: [
//               { name: "menuTitle", label: "Название меню", type: "string" },
//               { name: "menuItems", label: "Элементы меню", type: "string" }
//           ]
//       }
//   ],
//   templates: [
//       {
//           name: "seoFields",
//           label: "SEO Поля",
//           fields: [
//               { name: "metaTitle", label: "Meta Title", type: "string" },
//               { name: "metaDescription", label: "Meta Description", type: "string" },
//               { name: "ogImage", label: "OG Image", type: "image" }
//           ]
//       }
//   ]
// };

// export default schema;

import { defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      // Уникальное название коллекции
      name: "notes",
      // Отображаемое название в TinaCMS
      label: "Заметки",
      // Путь к папке с файлами коллекции
      path: "content/notes",
      // Формат файлов в этой коллекции
      format: "md",
      // Поля для редактирования
      fields: [
        {
          type: "string",          // Тип поля
          name: "title",           // Уникальное имя поля
          label: "Заголовок",      // Отображаемое название
          isTitle: true,           // Помечаем это поле как главное название
          required: true,          // Обязательное поле
        },
        {
          type: "rich-text",       // Тип поля с визуальным редактором
          name: "body",            // Уникальное имя поля
          label: "Содержание",     // Отображаемое название
          isBody: true,            // Это основное содержимое документа
        },
      ],
    },
  ],
});

export default schema;


// const schema = {
//     collections: [
//         {
//             name: "post",
//             label: "Blog Posts",
//             path: "content/posts",
//             format: "mdx",

//             fields: [       //Определение полей для документов
//                 {
//                     label: 'title',
//                     isTitle: true,
//                 },
//                 {
//                     name: 'description',
//                     label: 'label second collection'
//                 },
//                 {
//                     name: 'exerciseType',
//                     fields:  [ {
//                         name: 'exercises',
//                         ui: {
//                             component: 'textarea',
//                         },
//                     }
                 
//                     ],
//                     label: 'ExerciseType'
//                 }
//             ]
//         },
//     ],
//         globals: [ // Это поле определяется наряду с полем collections, рядом
//             {
//               name: "siteConfig",
//               label: "Настройки сайта",
//               path: "content/settings/site.json",
//               fields: [
//                 { name: "title", label: "Название сайта", type: "string" },
//                 { name: "description", label: "Описание", type: "string" },
//                 { name: "logo", label: "Логотип", type: "image" }
//               ]
//             },
//             {
//               name: "navigation",
//               label: "Навигационное меню",
//               path: "content/settings/menu.json",
//               fields: [...]
//             }
//           ],
//         templates: [
//             {
//               name: "seoFields",
//               label: "SEO Поля",
//               fields: [
//                 { name: "metaTitle", label: "Meta Title", type: "string" },
//                 { name: "metaDescription", label: "Meta Description", type: "string" },
//                 { name: "ogImage", label: "OG Image", type: "image" }
//               ]
//             }
//         ]
// }

// export default schema; //Есть такие структуры как именнованный и неименнованный экспорт.