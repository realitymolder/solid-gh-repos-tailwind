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
      <form class="mb-3" onSubmit={(event) => fetchWithUsername(event)}>
        <input
          type="text"
          class="p1 align-middle"
          id="usernameInput"
          required
        />
        <button class="btn btn-dark ms-3 w-auto">Fetch</button>
      </form>
      <h3>Github repos for {username()}</h3>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
