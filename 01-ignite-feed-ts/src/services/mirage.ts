import { createServer } from "miragejs";
import { postMock } from "../mocks/posts.mock";

createServer({
  routes() {
    this.namespace = "api";

    this.get(
      "/posts",
      () => {
        return {
          posts: Array.from({ length: 2 }, (_, index) =>
            postMock({ isFirst: index === 0 })
          ),
        };
      },
      { timing: 2000 }
    );
  },
});
