export const formatSlugToTitle = (slug: string) => {
  return slug
    ? slug
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";
};
