import { notFound } from "next/navigation";
import { IssueView } from "@/components/issue-view";
import { getIssueByDate, issues } from "@/lib/content";

type IssuePageProps = {
  params: Promise<{ date: string }>;
};

export async function generateStaticParams() {
  return issues.map((issue) => ({ date: issue.issueDate }));
}

export async function generateMetadata({ params }: IssuePageProps) {
  const { date } = await params;
  const issue = getIssueByDate(date);

  if (!issue) {
    return {
      title: "Issue Not Found | World Brief",
    };
  }

  return {
    title: `${issue.issueLabel} | World Brief`,
    description: issue.summary,
  };
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { date } = await params;
  const issue = getIssueByDate(date);

  if (!issue) {
    notFound();
  }

  return <IssueView issue={issue} />;
}
