const schema = {
    collections: [
        {
            name: "post",
            label: "Blog Posts",
            path: "content/posts",
            format: "mdx",

            fields: [       //Определение полей для документов

            ]
        }
    ],
        templates: [
            {
              name: "seoFields",
              label: "SEO Поля",
              fields: [
                { name: "metaTitle", label: "Meta Title", type: "string" },
                { name: "metaDescription", label: "Meta Description", type: "string" },
                { name: "ogImage", label: "OG Image", type: "image" }
              ]
            }
        ]
}