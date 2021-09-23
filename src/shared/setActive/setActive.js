const setActive = (array, curCategory) => {
  return array.map((obj) => {
    // console.log(obj.isActive)
    if (obj.isActive) {
      return {
        category: obj.category,
        categorySum: obj.categorySum,
        isActive: false,
        types: obj.types,
      };
    }
    console.log(curCategory);
    if (obj.category === curCategory) {
      return {
        category: obj.category,
        categorySum: obj.categorySum,
        isActive: true,
        types: obj.types,
      };
    }
    return obj;
  });
};

// const setActive = (array, curCategory) => {
//   return array.reduce((acc, obj) => {
//     // console.log(obj.isActive)
//     if (obj.isActive) {
//       acc.push({
//         category: obj.category,
//         categorySum: obj.amount,
//         isActive: false,
//         types: [
//           {
//             description: obj.description,
//             amount: obj.amount,
//           },
//         ],
//       });
//       return acc;
//     }
//     // console.log(curCategory)
//     if (obj.category === curCategory) {
//       acc.push({
//         category: obj.category,
//         categorySum: obj.amount,
//         isActive: true,
//         types: [
//           {
//             description: obj.description,
//             amount: obj.amount,
//           },
//         ],
//       })
//       return acc;
//     }
//     acc.push({
//       category: obj.category,
//       categorySum: obj.amount,
//       isActive: false,
//       types: [
//         {
//           description: obj.description,
//           amount: obj.amount,
//         },
//       ],
//     })

//     return acc;
//   },[]);
// };

export default setActive;
