import { createFileRoute } from "@tanstack/react-router";
import { MyPage } from "../components/pages/myPage";

export const Route = createFileRoute("/my-page")({
  component: MyPage,
});
