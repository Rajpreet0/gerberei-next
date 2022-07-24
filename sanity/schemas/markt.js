export default {
  name: 'markt',
  title: 'Markt',
  type: 'document',
  fields: [
    {
        name: 'datum',
        title: 'Datum',
        description: 'Hier soll das Datum hin wann der nächste Markt ist z.B 24 DEZ.',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'uhrzeit',
        title: 'Uhrzeit',
        description: 'Hier soll die Uhrzeit hin wann der nächste Markt anfängt und aufhört z.B 12:00 - 12:30.',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'standort',
        title: 'Standort',
        description: 'Hier soll der Standort des Marktes hin z.B Neuer Markt 11, 48565 Steinfurt.',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'marktTitel',
        title: 'Markt Titel',
        description: 'Hier soll der Titel des Marktes hin z.B Weihnachtsmarkt.',
        type: 'string',
    },
    {
        name: 'marktBeschreibung',
        title: 'Markt Beschreibung',
        description: 'Hier soll eine kleine Beschreibung des Marktes hin.',
        type: 'string',
    },
    {
       name: 'publishedAt',
       title: 'Upload Datum',
       description: 'Hier bitte das heutige Datum auswählen, damit eine ordentliche Sortierung auf der Seite erfolgt werden kann.',
       type: 'datetime',
       validation: (Rule) => Rule.required(),
    },
    {
        name: 'hintergrundBild',
        title: 'Markt Hintergrund Bild',
        description: 'Hier soll ein Hintergrund Bild hin z.b Ein Bild vom letzten Markt o.ä',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
    },
  ]
}