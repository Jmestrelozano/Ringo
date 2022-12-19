export const BaseURL =
  import.meta.env.MODE === "development"
    ? "http://127.0.0.1:5173"
    : "https://ringo-beta.vercel.app";
