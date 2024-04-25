export const genre = {
    title: "Genre",
    name: "genre",
    type: "document",
    fields: [
        {
            title: "Genretitle",
            name: "genretitle",
            type: "string"
        },
        {
            title: "Genrelink",
            name: "genreurl",
            type: "slug",
            options: {
                source: "genretitle",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        }
    ]
}