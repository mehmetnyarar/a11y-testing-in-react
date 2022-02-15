import { Muppet } from "./types";

export const data: Muppet[] = [
  {
    id: "1",
    name: "Cookie Monster",
    slug: "cookie-monster",
    img: {
      url: "https://static.wikia.nocookie.net/muppet/images/0/08/CookieMonsterWaving.jpg",
    },
    info: [
      {
        id: "1",
        text: `
        Cookie Monster is a blue Muppet character on the long-running
        PBS/HBO children's television show Sesame Street. In a song in 2007,
        and later in an interview in 2017, Cookie Monster revealed that his
        real name is Sidney Monster. He is best known for his
        voracious appetite and his famous eating catchphrases, such as "Me
        want cookie!" Although he eats almost anything, including normally
        inedible objects, as his name suggests, his preferred food is
        cookies. Chocolate chip cookies are his favorite kind. Despite
        his voracious appetite for cookies, Cookie Monster shows awareness
        of healthy eating habits for young children and also enjoys fruits
        and eggplant.
      `,
      },
      {
        id: "2",
        text: `
        He is known to have a mother, a younger sister, and an
        identically-designed cousin (who does not like cookies). All three
        share his characteristic blue fur and "googly eyes". He also has a
        father, who appeared in a Monsterpiece Theater sketch promoting
        energy conservation, water conservation and environmentalism. Cookie
        Monster's mother and father both share his enormous appetite and
        craving for cookies.
      `,
      },
    ],
    more: {
      url: "https://en.wikipedia.org/wiki/Cookie_Monster",
    },
    chat: {
      initialMessage: {
        id: "m1",
        text: "Me want cookie!",
      },
      responses: [
        {
          id: "m2",
          text: "Ohm ohm ohm...",
        },
      ],
    },
  },
];

export const cookieMonster = data[0];
