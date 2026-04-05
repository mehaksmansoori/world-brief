import { IssueView } from "@/components/issue-view";
import { getLatestIssue } from "@/lib/content";

export default function Home() {
  const issue = getLatestIssue();

  return <IssueView issue={issue} />;
}
