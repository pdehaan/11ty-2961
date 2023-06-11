/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("NOTES/includes");
  return {
    dir: {
      input: "NOTES",
      includes: "includes",
      layouts: "layouts",
      output: "docs",
    },
  };
};
