export const validate = (input) => {
  const errors = {};

  //! NAME

  if (input.name === "") {
    errors.name = "The name can not be empty";
  }
  if (input.name.length > 35) {
    errors.name = "The name can not be longer than 34 characters";
  }

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  if (specialChars.test(input.name)) {
    errors.name = "The name can not contain special characters";
  }

  //! DIFFICULTY

  if (parseInt(input.difficulty) < 1) {
    errors.difficulty = "The difficulty must be greater than 0";
  }
  if (parseInt(input.difficulty) > 5) {
    errors.difficulty = "The difficulty must be less than 6";
  }

  //! DURATION

  if (input.duration === "") {
    errors.duration = "The duration can not be empty";
  }

  if (parseFloat(input.duration) <= 0) {
    errors.duration = "The duration must be greater than 0";
  }

  if (parseFloat(input.duration) > 12) {
    errors.duration = "The duration must be less than 12";
  }

  //! SEASON

  if (
    input.season !== "Summer" &&
    input.season !== "Autumn/Fall" &&
    input.season !== "Winter" &&
    input.season !== "Spring"
  ) {
    errors.season = "Select a valid option";
  }

  //!IMAGES

  if (input.images.length > 255) {
    errors.images = "The url can not be longer than 255 characters";
  }

  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (input.images && !urlPattern.test(input.images)) {
    errors.images = "Please enter a valid URL for images";
  }

  //!DESCRIPTION

  if (input.description.length > 500) {
    errors.description = "The text can not be longer than 500 characters";
  }

  if (specialChars.test(input.description)) {
    errors.description = "The text can not contain special characters";
  }

  return errors;
};
