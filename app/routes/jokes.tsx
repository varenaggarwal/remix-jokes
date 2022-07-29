import { Outlet } from "@remix-run/react";

export default function JokesModule() {
  return (
    <>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}
