export const color = [
  "white",
  "Black",
  "Marun",
  "Marun",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filter =[
    {
        id:"color",
        name: "Color",
        options:[
            {value:"white",label:"White"},
            {value:"black",label:"Black"},
            {value:"marun",label:"Marun"},
            {value:"beige",label:"Beige"},
            {value:"pink",label:"Pink"},
            {value:"green",label:"Green"},
        ]
    },
    {
        id:"size",
        name:"size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
            
        ],
    },
];

export const singleFilter = [

    {
        id: "price",
        name: "Price",
        options: [
          { value: "159-300", label: "Rs159 to Rs300" },
          { value: "399-999", label: "Rs399 to Rs999" },
          { value: "999-1999", label: "Rs999 to Rs1999" },
          { value: "1999-2999", label: "Rs1999 to Rs2999" },
          { value: "3999-4999", label: "Rs3999 to Rs4999" },
        ],
      },
      {
        id: "discount",
        name: "Discount",
        options: [
          { value: "10", label: "10% And Above" },
          { value: "20", label: "20% And Above" },
          { value: "30", label: "30% And Above" },
          { value: "40", label: "40% And Above" },
          { value: "50", label: "50% And Above" },
          { value: "60", label: "60% And Above" },
          { value: "70", label: "70% And Above" },
          { value: "80", label: "80% And Above" },
        ],
      },
      {
        id: "stock",
        name: "Availability",
        options: [
          { value: "in_stock", label: "In Stock" },
          { value: "out_of_stock", label: "Out Of Stock" },
        ],
      }
]