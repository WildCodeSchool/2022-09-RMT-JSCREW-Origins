const validateCategory = (category) => {
  if (category.Name.length < 2 || typeof category.Name !== "string") {
    return {
      status: false,
      errorMessage: "2 characters minimum in Title field and must be a string",
    };
  }
  if (category.Icon.length === 0 || typeof category.Icon !== "string") {
    return {
      status: false,
      errorMessage: "Icon field cannot be empty and must be a string",
    };
  }
  if (category.Description.length === 0 || typeof category.Icon !== "string") {
    return {
      status: false,
      errorMessage: "Description field cannot be empty and must be a string",
    };
  }
  return { status: true };
};

export default validateCategory;
