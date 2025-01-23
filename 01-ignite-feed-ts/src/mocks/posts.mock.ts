import { faker } from "@faker-js/faker";
import { commentMock, CommentType } from "./comment.mock";

type ContentType = "paragraph" | "link";

type Content = {
  id: string;
  type: ContentType;
  content: string;
};

export type PostType = {
  id: number;
  title: string;
  content: Content[];
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  publishAt: string;
  comments: CommentType[];
};

function getPublishedDate(name: string) {
  if (name.length % 2 === 0) {
    return faker.date.past();
  }

  return faker.date.recent();
}

export const postMock = ({ isFirst = false }) => {
  const author = isFirst
    ? {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png",
        role: "CTO",
      }
    : {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        role: faker.person.jobTitle(),
      };

  let fullName = author.name;
  let firstName = fullName.split(" ")[0].toLowerCase();

  return {
    id: faker.string.uuid(),
    author: {
      avatarUrl: author.avatar,
      name: author.name,
      role: author.role,
    },
    publishAt: getPublishedDate(author.name),
    content: [
      {
        id: faker.string.uuid(),
        type: "paragraph",
        content: "Fala galera 👋",
      },
      {
        id: faker.string.uuid(),
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: faker.string.uuid(),
        type: "link",
        content: `👉 ${firstName}.design/doctorcare`,
      },
    ],
    comments: Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () =>
      commentMock()
    ),
  };
};
