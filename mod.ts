export default () => ({
  name: "deno_read",
  setup(build) {
    build.onLoad(
      { filter: /.*\.(t|j)s(x|)/, namespace: "file" },
      async ({ path }) => ({
        contents: await Deno.readTextFile(path),
        loader: "tsx",
      })
    );
  },
});
