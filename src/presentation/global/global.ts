export const BaseURL =
  import.meta.env.MODE === "development"
    ? `.${import.meta.env.BASE_URL}`
    : import.meta.env.BASE_URL;
