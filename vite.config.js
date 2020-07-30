module.exports = {
  transforms: [
    {
      test: ({ path }) => path.endsWith(".md"),
      transform({ code }) {
        return `export default ${JSON.stringify(code)}`;
      },
    },
  ],
};
