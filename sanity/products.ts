import { title } from "process";

export const Products = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    { name: "pName", type: "string", title: "Product Name" },
    { name: "pImage", type: "image", title: "Image" },
    { name: "pDescription", type: "string", title: "Descrition" },
    { name: "pPrice", type: "number", title: "Price" },
    { name: "pColor", type: "string", title: "Colors" },
    {
      name: "pCategories",
      title: "Categories",
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
        ],
        layout: 'dropdown', // Set layout to 'dropdown' for a select list
      }
    },
  ],
};
