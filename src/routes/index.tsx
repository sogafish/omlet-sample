import { createFileRoute } from "@tanstack/react-router";
import { TopPage } from "../components/pages/top";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <TopPage />
    </div>
  );
}
