import { defineSchema } from "tinacms"
const schema = defineSchema({
  collections: [
    {
      name: "my_first_collection",
      label: "My first collection",
      path: "content/first",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        }
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename == "Hello-World") {
              return "/";
          }
      },
      }, 
    },
    {
      name: "image and text",
      label: "Заметки",
      path: "content/notes",
      // Формат файлов в этой коллекции
      format: "md",
      fields: [
      {
        type: "rich-text", 
        name: "body",
        label: "Body",
        isBody: true,
        required: true,
      },
      {
        type: "image",      // paints a thousand words
        name: "beautifulImage",
        label: "Beautiful Image",
        required: false,
      },
      ]
    },
  ],
});

export default schema;