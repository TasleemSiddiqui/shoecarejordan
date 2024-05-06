import { type } from "os";
import { title } from "process";

export const Services = {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
  ]
};
