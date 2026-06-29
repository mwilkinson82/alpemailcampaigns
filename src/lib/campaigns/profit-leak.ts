import type { LeakScores, PrimaryLeak } from "./types";

type LeakDefinition = {
  key: PrimaryLeak;
  scoreKey: keyof LeakScores;
  title: string;
  summary: string;
  circleBridge: string;
};

export const leakDefinitions: LeakDefinition[] = [
  {
    key: "estimating",
    scoreKey: "estimating",
    title: "The Bad-Bid Contractor",
    summary:
      "Your biggest leak is estimating. You may be winning work with profit problems already built in.",
    circleBridge:
      "Inside Contractor Circle, members use the Estimating Profit System to install a pre-send review rhythm.",
  },
  {
    key: "change_order",
    scoreKey: "changeOrder",
    title: "The Free-Work Contractor",
    summary:
      "Your biggest leak is change orders. Extra work may be getting trapped in texts, field decisions, delayed pricing, and billing gaps.",
    circleBridge:
      "Inside Contractor Circle, members use the Change Order Cash system to make exposure visible every week.",
  },
  {
    key: "project_profit",
    scoreKey: "projectProfit",
    title: "The Blind-Job Contractor",
    summary:
      "Your biggest leak is project profit control. Jobs may look fine in status updates while margin is leaking underneath.",
    circleBridge:
      "Inside Contractor Circle, members use IOR and OverWatch-style controls to manage jobs through dollars and risk.",
  },
  {
    key: "owner_dependence",
    scoreKey: "ownerDependence",
    title: "The Bottleneck Owner",
    summary:
      "Your biggest leak is owner dependence. The company is still using you as the operating system.",
    circleBridge:
      "Inside Contractor Circle, members install AOS rhythms so roles, numbers, issues, and accountability stop living in the owner's head.",
  },
  {
    key: "accountability",
    scoreKey: "accountability",
    title: "The No-Accountability Contractor",
    summary:
      "Your biggest leak is accountability. People may be busy, but busy is not the same as ownership.",
    circleBridge:
      "Inside Contractor Circle, members build the scorecards, roles, weekly rhythm, and follow-through that make people own outcomes.",
  },
];

export function calculatePrimaryLeak(scores: LeakScores): PrimaryLeak {
  const sorted = leakDefinitions
    .map((leak) => ({
      leak,
      score: scores[leak.scoreKey],
    }))
    .sort((a, b) => a.score - b.score);

  return sorted[0]?.leak.key ?? "unknown";
}

export function getLeakDefinition(primaryLeak: PrimaryLeak) {
  return leakDefinitions.find((leak) => leak.key === primaryLeak) ?? null;
}

