const validateCategory = (category) => {
  if (
    category.Name === null ||
    category.Name.length < 2 ||
    typeof category.Name !== "string"
  ) {
    return {
      status: false,
      errorMessage: "2 characters minimum in Title field",
    };
  }
  if (category.Icon.length === 0) {
    return {
      status: false,
      errorMessage: "Icon field cannot be empty",
    };
  }
  if (category.Description.length === 0) {
    return {
      status: false,
      errorMessage: "Description field cannot be empty",
    };
  }
  return { status: true };
};

export default validateCategory;
