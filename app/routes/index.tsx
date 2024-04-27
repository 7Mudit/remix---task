import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Index Page!</h1>
      <Outlet /> {/* Nested routes can go here */}
    </div>
  );
}
