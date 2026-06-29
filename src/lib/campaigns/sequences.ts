export type SequenceEmail = {
  day: number;
  key: string;
  subject: string;
  purpose: string;
  cta: string;
};

export const masterProfitLeakSequence: SequenceEmail[] = [
  {
    day: 0,
    key: "profit-leak-score",
    subject: "Your Profit Leak score",
    purpose: "Deliver result and name the biggest leak.",
    cta: "See the Contractor Circle path",
  },
  {
    day: 1,
    key: "estimating-leak",
    subject: "The money can leak before the job starts",
    purpose: "Show how bad jobs are built before they start.",
    cta: "Join Contractor Circle",
  },
  {
    day: 2,
    key: "change-order-leak",
    subject: "Stop financing the client",
    purpose: "Show why extra work becomes free work.",
    cta: "Get the tracker",
  },
  {
    day: 3,
    key: "project-profit-leak",
    subject: "Status is not profit",
    purpose: "Bridge into IOR and OverWatch.",
    cta: "Control the job",
  },
  {
    day: 4,
    key: "owner-dependence-leak",
    subject: "You are not just busy",
    purpose: "Bridge into AOS.",
    cta: "Take the 10-Hat Scorecard",
  },
  {
    day: 5,
    key: "accountability-leak",
    subject: "Busy is not ownership",
    purpose: "Explain why people do not own outcomes.",
    cta: "Join Contractor Circle",
  },
  {
    day: 6,
    key: "operating-rhythm",
    subject: "You do not need more motivation",
    purpose: "Explain why motivation is not enough.",
    cta: "Install the rhythm",
  },
  {
    day: 7,
    key: "circle-invitation",
    subject: "The audit shows the leak. Contractor Circle is where we fix it.",
    purpose: "Make the direct offer.",
    cta: "Join Contractor Circle",
  },
  {
    day: 10,
    key: "case-study-teardown",
    subject: "A contractor does not need another random template",
    purpose: "Show proof through a teardown.",
    cta: "See inside Circle",
  },
  {
    day: 14,
    key: "inside-contractor-circle",
    subject: "Inside Contractor Circle",
    purpose: "Show the private implementation environment.",
    cta: "Join Contractor Circle",
  },
];

