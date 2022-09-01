import { Component, For } from 'solid-js';
import { repos, setUsername, username } from '../App';
import RepoCard, { Repo } from '../components/RepoCard';

const Home: Component = () => {
  const fetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      '#usernameInput'
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-8" onSubmit={(event) => fetchWithUsername(event)}>
        <div class=" mx-auto flex max-w-4xl">
          <input
            type="text"
            class="input w-full flex bg-gray-500"
            id="usernameInput"
            required
          />
          <button class="ml-5 btn btn-success">Fetch</button>
        </div>
      </form>
      <div class="mx-auto w-full text-center">
        <h1 class="text-4xl text-center mb-8">
          Github repos for <span class="text-yellow-500">{username()}</span>
        </h1>
      </div>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
