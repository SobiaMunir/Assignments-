//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountain_list: string[] = [`K2`, `Mount everest`,`Himalya`,`Nanga parbat`,
];
console.log("\nlist of mountains");
for (let i = 0; i < mountain_list.length; i++) {
  console.log(`${mountain_list[i]}`);
}
