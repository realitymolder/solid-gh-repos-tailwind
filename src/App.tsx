import { Route, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';
import { Repo } from './components/RepoCard';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

const [username, setUsername] = createSignal('realitymolder');
const [repos, setRepos] = createSignal<Repo[]>([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(await res.json());
  console.log(repos());
});

const App: Component = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos };
export default App;
