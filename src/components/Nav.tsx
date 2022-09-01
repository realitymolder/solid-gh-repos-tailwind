import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import { savedRepos } from '../pages/SavedRepos';

const Nav: Component = () => {
  return (
    <nav class="mx-auto flex w-full items-center justify-around py-6 px-52">
      <NavLink href="/" class="btn btn-primary " end activeClass="btn-success">
        Home
      </NavLink>
      <NavLink
        href="/savedrepos"
        class="btn btn-primary me-2"
        activeClass="btn-success"
      >
        Saved ~ {savedRepos().length}
      </NavLink>
    </nav>
  );
};

export default Nav;
