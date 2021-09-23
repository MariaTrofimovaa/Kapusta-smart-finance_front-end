const setActive = (array, curCategory) => {
  const setAllFalse = array.map((obj) => {
    if (obj.isActive) {
      return {
        category: obj.category,
        categorySum: obj.categorySum,
        isActive: false,
        types: obj.types,
      };
    }
    return obj;
  });

  const setCategoriFalse = setAllFalse.map((obj) => {
    if (obj.category !== curCategory) {
      return {
        category: obj.category,
        categorySum: obj.categorySum,
        isActive: false,
        types: obj.types,
      };
    }
    return obj;
  });
  const setCurrentTrue = setCategoriFalse.map((obj) => {
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

  return setCurrentTrue;
};

export default setActive;
