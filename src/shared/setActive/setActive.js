const setActive = (array, curCategory) => {
  return array.map((obj) => {
    if (obj.isActive) {
      return {
        category: obj.category,
        categorySum: obj.amount,
        isActive: false,
        types: [
          {
            description: obj.description,
            amount: obj.amount,
          },
        ],
      };
    }
    if (obj.category === curCategory) {
      return {
        category: obj.category,
        categorySum: obj.amount,
        isActive: true,
        types: [
          {
            description: obj.description,
            amount: obj.amount,
          },
        ],
      };
    }
    return obj;
  });
};

export default setActive;
