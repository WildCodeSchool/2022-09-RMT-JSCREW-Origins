const validateVideo = (video) => {
  if (video.Name === null || video.Name.length < 2) {
    return {
      status: false,
      errorMessage: "2 characters minimum in Title field",
    };
  }
  if (video.id_Category.length === 0) {
    return {
      status: false,
      errorMessage: "Category field cannot be empty",
    };
  }
  if (video.Url === null || video.Url.length < 2) {
    return {
      status: false,
      errorMessage: "Url field cannot be empty",
    };
  }
  if (video.Description.length === 0 || typeof video.Description !== "string") {
    return {
      status: false,
      errorMessage: "Description field cannot be empty",
    };
  }
  return {
    status: true,
    errorMessage: "",
  };
};

export default validateVideo;
