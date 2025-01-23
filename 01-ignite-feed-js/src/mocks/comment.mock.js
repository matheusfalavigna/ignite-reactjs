import { faker } from "@faker-js/faker";

export const commentMock = (comment = "") => {
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
