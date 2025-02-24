import { Outlet } from "react-router-dom";
import GithubUsersList from "./GithubUsersList";

export default function GithubUsers() {
  return (
    <div>
      <h2>Github Users</h2>
      <GithubUsersList />
      <Outlet />
    </div>
  );
}
