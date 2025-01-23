import { faker } from "@faker-js/faker";

export type CommentType = {
  id: string;
  author: {
    avatarUrl: string;
    name: string;
  };
  publishAt: Date;
  content: {
    id: string;
    type: string;
    content: string;
  }[];
};

export const commentMock = (comment = ""): CommentType => {
  if (comment) {
    return {
      id: faker.string.uuid(),
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/60001410?v=4",
        name: "Matheus Falavigna",
      },
      publishAt: new Date(),
      content: [
        { id: faker.string.uuid(), type: "paragraph", content: comment },
      ],
    };
  }

  const name = faker.person.fullName();

  return {
    id: faker.string.uuid(),
    author: {
      avatarUrl: faker.image.avatar(),
      name,
    },
    publishAt: faker.date.recent(),
    content: [
      {
        id: faker.string.uuid(),
        type: "paragraph",
        content: faker.lorem.paragraph(),
      },
    ],
  };
};
