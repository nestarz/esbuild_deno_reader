export default (onResolve) => ({
  name: "deno_read",
  setup(build) {
    if (onResolve) build.onResolve({ filter: /.*\.(t|j)s(x|)/ }, onResolve);
    build.onLoad(
      { filter: /.*\.(t|j)s(x|)/, namespace: "file" },
      async ({ path }) => ({
        contents: await Deno.readTextFile(path),
        loader: "tsx",
      })
    );
  },
});
