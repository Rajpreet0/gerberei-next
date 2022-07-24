export default {
    name: 'produkte',
    title: 'Produkte',
    type: 'document',
    fields: [
        {
            name: 'titel',
            title: 'Titel',
            description: 'Hier soll der Titel des Produktes hin z.b Lederschuh für Kinder mit Blauen Label.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Bitte hier einfach auf Generate klicken.',
            type: 'slug',
            options: {
                source: 'titel',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'kategorie',
            title: 'Kategorie',
            description: 'Hier soll zu den Artikel die Kategorie hin z.B Lederschuhe.',
            type: 'string',
            options: {
                maxLength: 64,
            },
            validation: (Rule) => Rule.required(),
        },
        {
          name: 'produktBeschreibung',
          title: 'Produkt Beschreibung',
          description: 'Hier kommt eine Produkt Beschreibung hin.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
            name: 'produktBild',
            title: 'Produkt Bild',
            description: 'Hier kommt -ein- Bild des Produktes hin welches auf der Übersicht (Produkt) Seite gezeigt wird. ',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
           name: 'preis',
           title: 'Preis',
           description: 'Hier kommt der Preis des Produktes hin (optional)',
           type: 'number',
        },
       
    ]
}