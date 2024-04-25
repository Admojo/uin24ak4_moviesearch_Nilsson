export const books = {
    title: "Books",
    name: "books", 
    type: "document",
    fields: [
        {
            title: "Booktitle",
            name: "productname",
            type: "string"
        },
        {
            title: "Booklink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            title: "Beskrivelse",
            name: "description",
            type: "text"
        },
        {
            title: "Produktbilde",
            name: "productimage",
            type: "image"
        },
        {
            title: "Genre",
            name: "genre",
            type: "reference",
            to: [{type: "genre"}]
        },
        {
            title: "Anmeldelser",
            name: "reviews",
            type: "array",
            of: [{type: "reviews"}]
        }
    ]
}