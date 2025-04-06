// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   // Get this from tina.io
//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
//   // Get this from tina.io
//   token: process.import { defineConfig } from "tinacms";

//   export default defineConfig({
//     branch: "v4", // Используйте вашу основную ветку
//     clientId: process.env.TINA_CLIENT_ID, // Добавьте в GitHub Secrets
//     token: process.env.TINA_TOKEN, // Добавьте в GitHub Secrets
    
//     build: {
//       outputFolder: "admin", // Папка для админ-панели
//       publicFolder: "../quartz/public", // Путь к публичной папке Quartz
//     },
    
//     media: {
//       tina: {
//         mediaRoot: "images",
//         publicFolder: "../quartz/public",
//       },
//     },
    
//     schema: {
//       collections: [
//         {
//           name: "notes",
//           label: "Заметки",
//           path: "../quartz/content",
//           format: "md",
//           fields: [
//             {
//               type: "string",
//               name: "title",
//               label: "Заголовок",
//               isTitle: true,
//               required: true,
//             },
//             {
//               type: "rich-text",
//               name: "body",
//               label: "Содержание",
//               isBody: true,
//             },
//           ],
//         },
//       ],
//     },
//   });
//   env.TINA_TOKEN,

//   build: {
//     outputFolder: "admin",
//     publicFolder: "public",
//   },
//   media: {
//     tina: {
//       mediaRoot: "",
//       publicFolder: "public",
//     },
//   },
//   // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
//   schema: {
//     collections: [
//       {
//         name: "post",
//         label: "Posts",
//         path: "content/posts",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Body",
//             isBody: true,
//           },
//         ],
//         ui: {
//           // This is an DEMO router. You can remove this to fit your site
//           router: ({ document }) => `/demo/blog/${document._sys.filename}`,
//         },
//       },
//     ],
//   },
// });


  //   // tina/config.ts
      // {
      //   name: "notes",
      //   label: "Заметки",
      //   path: "content/notes",
      //   fields: [
      //     {
      //       type: "string",
      //       name: "layout",
      //       label: "Макет",
      //       options: ["work", "personal", "project"], // Типы макетов
      //       required: true
      //     },
      //     {
      //       type: "object",
      //       name: "work_fields",
      //       label: "Поля для работы",
      //       fields: [
      //         { type: "image", name: "scheme", label: "Схема" }
      //       ],
      //       ui: {
      //         condition: (values) => values?.layout === "work"
      //       }
      //     },
      //     {
      //       type: "object",
      //       name: "personal_fields",
      //       label: "Личные данные",
      //       fields: [
      //         { type: "datetime", name: "event_date", label: "Дата события" }
      //       ],
      //       ui: {
      //         condition: (values) => values?.layout === "personal"
      //       }
      //     }
      //   ]
      // }
//         name: "notes",
//         label: "Заметки",
//         path: "public",
//         format: "md",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Заголовок",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Содержание",
//             isBody: true,
//           },
//         ],
//       },
//     ],
//   },


import { defineConfig } from "tinacms";
import schema from "./schema";

// Возникают проблемы с действиями ключей. Ошибка ли это с 
// ключами, или конфиг плохо читается.
export default defineConfig({
  branch: "v4", // Используйте вашу основную ветку
  token: process.env.TINA_TOKEN, // Значение должно совпадать с .env
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Значение должно совпадать с .env

  build: {
    outputFolder: "admin", // Папка для админ-панели
    publicFolder: "../quartz/public", // Путь к публичной папке Quartz
    basePath: "/", // Префикс для всех путей
  },

  media: {
    tina: {
      mediaRoot: "images", // Папка, где хранятся медиафайлы
      publicFolder: "../quartz/public", // Путь к публичной папке Quartz
    },
  },

  schema: schema,
});
