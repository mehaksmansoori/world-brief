export type Source = {
  publisher: string;
  url: string;
};

export type Story = {
  category: "AI" | "Geopolitics" | "Startups";
  headline: string;
  summary: string;
  whyItMatters: string;
  sources: Source[];
};

export type Section = {
  category: Story["category"];
  description: string;
  stories: Story[];
};

export type Issue = {
  slug: string;
  issueLabel: string;
  issueDate: string;
  title: string;
  summary: string;
  editorNote: string;
  sections: Section[];
};

export const issues: Issue[] = [
  {
    slug: "2026-04-05",
    issueLabel: "Sunday, April 5",
    issueDate: "2026-04-05",
    title: "A clearer read on the systems reshaping technology, power, and capital.",
    summary:
      "Today’s brief focuses on the institutions and companies setting direction rather than just generating headlines: frontier AI deployment, state-level positioning, and the financing choices shaping startup momentum.",
    editorNote:
      "The product should feel like this issue reads: selective, quiet, and useful. The strongest stories are the ones that shift incentives, not the ones that simply trend for a day.",
    sections: [
      {
        category: "AI",
        description:
          "The most consequential product, policy, and infrastructure developments across the AI ecosystem.",
        stories: [
          {
            category: "AI",
            headline: "Model launches are increasingly being judged on workflow fit, not benchmark theater.",
            summary:
              "Frontier model announcements continue to draw attention, but buyer behavior is shifting toward reliability, latency, and integration quality. Teams evaluating AI vendors now care less about abstract top-line scores and more about whether a model can slot into a real operating workflow without increasing review overhead.",
            whyItMatters:
              "This shifts value from raw novelty toward product discipline. Companies that package models into trusted, repeatable user experiences are likely to capture more durable demand than those relying on launch-day excitement alone.",
            sources: [
              { publisher: "OpenAI", url: "https://openai.com/" },
              { publisher: "Anthropic", url: "https://www.anthropic.com/news" },
            ],
          },
          {
            category: "AI",
            headline: "Enterprises are moving from experimentation budgets to line-item AI spend.",
            summary:
              "More AI purchases are now being evaluated inside formal budget cycles rather than innovation sandboxes. Procurement, security, and legal teams are becoming part of the adoption path much earlier, especially for tools that touch internal knowledge or customer workflows.",
            whyItMatters:
              "The winners in enterprise AI will not just be the most capable models. They will be the products that reduce deployment friction, improve governance, and earn trust across multiple stakeholders.",
            sources: [
              { publisher: "Microsoft", url: "https://news.microsoft.com/" },
              { publisher: "Google Cloud", url: "https://cloud.google.com/blog" },
            ],
          },
          {
            category: "AI",
            headline: "AI regulation conversations are moving from abstract risk to operational accountability.",
            summary:
              "Public debate is slowly becoming more concrete, with growing attention on auditability, training data provenance, sector-specific safeguards, and disclosure expectations. That marks a move away from vague existential framing toward practical questions about how AI systems are built and deployed.",
            whyItMatters:
              "For builders, this means compliance will become a product requirement rather than just a policy concern. Clear internal documentation and deployment controls may become strategic advantages.",
            sources: [
              { publisher: "OECD AI Policy", url: "https://oecd.ai/" },
              { publisher: "European Commission", url: "https://digital-strategy.ec.europa.eu/" },
            ],
          },
        ],
      },
      {
        category: "Geopolitics",
        description:
          "State power, strategic competition, and policy shifts with downstream effects on markets and technology.",
        stories: [
          {
            category: "Geopolitics",
            headline: "Technology policy is increasingly inseparable from industrial policy.",
            summary:
              "Governments are treating compute, chips, energy capacity, and advanced manufacturing as strategic assets. The result is a tighter feedback loop between national policy, supply chain security, and the private sector’s ability to scale key technologies.",
            whyItMatters:
              "Founders and investors can no longer treat policy as background context. The state is becoming a more active force in determining which technologies are easier to finance, build, and export.",
            sources: [
              { publisher: "CSIS", url: "https://www.csis.org/" },
              { publisher: "Brookings", url: "https://www.brookings.edu/" },
            ],
          },
          {
            category: "Geopolitics",
            headline: "Election-year politics continue to raise the premium on narrative stability.",
            summary:
              "Across major democracies, markets and companies are reading not only policy platforms but also the probability of execution. That means attention is drifting toward coalition durability, public sentiment, and institutional steadiness rather than just headline promises.",
            whyItMatters:
              "For operators, planning under uncertainty is increasingly about scenario preparation. Stable policy windows can matter as much as policy direction itself.",
            sources: [
              { publisher: "Foreign Affairs", url: "https://www.foreignaffairs.com/" },
              { publisher: "Council on Foreign Relations", url: "https://www.cfr.org/" },
            ],
          },
          {
            category: "Geopolitics",
            headline: "Trade, sanctions, and strategic alignment remain major second-order startup variables.",
            summary:
              "Cross-border business decisions are now shaped more heavily by export controls, data localization, and regional political alignment. Startups building in AI, defense, logistics, or hardware face particular exposure to these shifts.",
            whyItMatters:
              "Geopolitical fragmentation is no longer a niche risk. It can directly change customer access, supplier options, and the cost of global expansion.",
            sources: [
              { publisher: "IMF", url: "https://www.imf.org/" },
              { publisher: "World Bank", url: "https://www.worldbank.org/" },
            ],
          },
        ],
      },
      {
        category: "Startups",
        description:
          "Capital flows, company moves, and ecosystem signals that indicate where early-stage momentum is building.",
        stories: [
          {
            category: "Startups",
            headline: "Capital is still available, but conviction is clustering around sharper narratives.",
            summary:
              "The startup market remains selective. Companies with a strong wedge, credible distribution, and a clear explanation of why now continue to attract capital, while broad but under-differentiated pitches face longer cycles and more scrutiny.",
            whyItMatters:
              "The fundraising environment rewards clarity over ambition theater. Teams that can show a durable customer pull signal are in a much stronger position than teams selling category-sized stories without proof.",
            sources: [
              { publisher: "Crunchbase", url: "https://news.crunchbase.com/" },
              { publisher: "PitchBook", url: "https://pitchbook.com/news" },
            ],
          },
          {
            category: "Startups",
            headline: "More founders are being pushed to define what should stay human in their product.",
            summary:
              "As AI lowers the cost of shipping software, product differentiation is increasingly showing up in judgment, workflow design, and trust. Startups that simply automate surface-level tasks are easier to copy than those that redesign how people make decisions.",
            whyItMatters:
              "The strongest products may be the ones that combine AI leverage with deliberate human checkpoints. That creates defensibility through product design, not just model access.",
            sources: [
              { publisher: "a16z", url: "https://a16z.com/news-content/" },
              { publisher: "Sequoia", url: "https://www.sequoiacap.com/article/" },
            ],
          },
          {
            category: "Startups",
            headline: "Startup quality signals are moving upstream from growth metrics to operating quality.",
            summary:
              "Investors and early customers increasingly care about implementation velocity, retention behavior, and founder-market fit long before a company reaches scale. This favors teams that can demonstrate strong execution loops with a smaller set of users.",
            whyItMatters:
              "For early-stage companies, operating sharpness is becoming part of the story earlier. Tight feedback loops may matter more than broad top-of-funnel numbers during the first phase of company building.",
            sources: [
              { publisher: "First Round Review", url: "https://review.firstround.com/" },
              { publisher: "NFX", url: "https://www.nfx.com/post" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "2026-04-04",
    issueLabel: "Saturday, April 4",
    issueDate: "2026-04-04",
    title: "Where attention is hardening into strategy across AI, policy, and startups.",
    summary:
      "Yesterday’s issue focused on decision-making signals: where institutions are becoming more serious, where markets are demanding discipline, and where startup narratives are starting to tighten.",
    editorNote:
      "A good archive should feel worth revisiting. Each issue should stand on its own while still contributing to a longer-running sense of change.",
    sections: [
      {
        category: "AI",
        description: "Shifts in how AI products are bought, trusted, and deployed.",
        stories: [
          {
            category: "AI",
            headline: "Enterprises are asking for proof of reliability before expanding AI usage.",
            summary:
              "Early pilots helped organizations understand what AI can do. Now teams want to know where it fails, how it is monitored, and whether employees can safely depend on it inside day-to-day workflows.",
            whyItMatters:
              "Reliability is becoming a growth lever. Products that reduce uncertainty have a better chance of converting experimentation into steady revenue.",
            sources: [{ publisher: "IBM", url: "https://www.ibm.com/think" }],
          },
        ],
      },
      {
        category: "Geopolitics",
        description: "Power shifts that shape cross-border business conditions.",
        stories: [
          {
            category: "Geopolitics",
            headline: "Strategic competition is increasingly shaping private market assumptions.",
            summary:
              "Whether companies are raising capital, expanding internationally, or managing suppliers, geopolitical assumptions now show up much earlier in planning cycles.",
            whyItMatters:
              "Macro context is no longer abstract. It directly affects execution choices for modern companies.",
            sources: [{ publisher: "Chatham House", url: "https://www.chathamhouse.org/" }],
          },
        ],
      },
      {
        category: "Startups",
        description: "Signals on capital, product quality, and founder positioning.",
        stories: [
          {
            category: "Startups",
            headline: "Investors continue to reward companies with narrower but sharper positioning.",
            summary:
              "In a selective market, companies that can articulate a precise customer pain point and own it deeply are standing out more than broad category narratives.",
            whyItMatters:
              "Precision often reads as maturity. In a cautious market, that can meaningfully improve fundraising odds.",
            sources: [{ publisher: "Y Combinator", url: "https://www.ycombinator.com/library" }],
          },
        ],
      },
    ],
  },
];

export function getLatestIssue() {
  return issues[0];
}

export function getIssueByDate(date: string) {
  return issues.find((issue) => issue.issueDate === date);
}
