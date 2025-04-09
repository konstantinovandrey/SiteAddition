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
        // This is a DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      },
    }
  ],
});

export default schema;