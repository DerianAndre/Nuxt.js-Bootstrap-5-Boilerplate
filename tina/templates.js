export function accommodationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "string",
      name: "title_emotional",
      label: "Emotionaler Titel",
    },
    {
      type: "string",
      name: "description",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "images",
      label: "Bilder",
      list: true,
    },
  ];
}
export function anlassFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "string",
      name: "headline",
      label: "Titel (emotional)",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Bild",
    },
  ];
}
export function wohnungFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "number",
      name: "persons",
      label: "Personen",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "images",
      label: "Bilder",
      list: true,
    },
    {
      type: "string",
      name: "booking",
      label: "Buchungslink",
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      options: [],
    },
  ];
}
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "string",
      name: "title_emotional",
      label: "Emotionaler Titel",
    },
    {
      type: "image",
      name: "cover",
      label: "Cover",
    },
    ...metaFields(),
  ];
}
export function furnishingFields() {
  return [
    {
      type: "string",
      name: "label",
      label: "Label",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "icon",
      label: "Icon",
    },
  ];
}
export function gastronomieFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "menus",
      label: "Speisekarten",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
      ],
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      options: [],
    },
  ];
}
export function homeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "title_emotional",
      label: "title_emotional",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "images",
      label: "Bilder",
      list: true,
    },
    ...metaFields(),
  ];
}
export function labelFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "image",
      name: "label",
      label: "Label",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function locationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "apartments",
      label: "Ferienwohnungen",
      list: true,
    },
    {
      type: "image",
      name: "images",
      label: "Bilder",
      list: true,
    },
  ];
}
export function metaFields() {
  return [
    {
      type: "string",
      name: "meta_title",
      label: "Meta Titel",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "meta_image",
      label: "Meta Image",
    },
  ];
}
export function newsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
      required: true,
    },
    {
      type: "string",
      name: "date",
      label: "Datum",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function zimmerFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "image",
      name: "icon",
      label: "Icon",
    },
    {
      type: "string",
      name: "description",
      label: "Beschreibung",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "price",
      label: "Preis",
    },
    {
      type: "image",
      name: "images",
      label: "Bilder",
      list: true,
    },
    {
      type: "string",
      name: "booking",
      label: "Buchungslink",
    },
  ];
}
