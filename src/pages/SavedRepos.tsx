import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../components/RepoCard';

const reposFromLocalStorage = JSON.parse(
  localStorage.getItem('savedRepos') || '[]'
);
const [savedRepos, setSavedRepos] = createSignal(
  reposFromLocalStorage as Repo[]
);

const SavedRepos: Component = () => {
  return (
    <div>
      <h1 class="text-4xl text-center mb-8">Your saved repos:</h1>
      <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
