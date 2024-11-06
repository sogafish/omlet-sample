import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "../components/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
        }}
      >
        <Header />
      </div>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/my-page">MyPage</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
