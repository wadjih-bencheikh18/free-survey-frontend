let surveys = [
  {
    id: 0,
    title: "survey 0",
    description: "first survey",
    qsts: [
      {
        id: 0,
        question: "qst0",
        description: "how are u",
        answeryes: "yes",
        answerno: "no",
      },
      {
        id: 1,
        question: "qst1",
        description: "how are you",
        answeryes: "yes",
        answerno: "no",
      },
    ],
    answers: [
      [
        {
          id: 0,
          answer: true,
        },
        {
          id: 1,
          answer: true,
        },
      ],
      [
        {
          id: 0,
          answer: false,
        },
        {
          id: 1,
          answer: false,
        },
      ],
    ],
  },
  {
    id: 1,
    title: "survey 1",
    description: "nothing",
    qsts: [
      {
        id: 0,
        question: "qst0-1",
        description: "",
        answeryes: "yes",
        answerno: "no",
      },
      {
        id: 1,
        question: "qst1-1",
        description: "",
        answeryes: "yes",
        answerno: "no",
      },
    ],
    answers: [
      [
        {
          id: 0,
          answer: false,
        },
        {
          id: 1,
          answer: true,
        },
      ],
      [
        {
          id: 0,
          answer: false,
        },
        {
          id: 1,
          answer: false,
        },
      ],
    ],
  },
];
export default surveys;