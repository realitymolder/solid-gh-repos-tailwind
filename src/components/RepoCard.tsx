import { Component } from 'solid-js';
import { savedRepos, setSavedRepos } from '../pages/SavedRepos';

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};
interface Props {
  repo: Repo;
}
const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem('savedRepos', JSON.stringify(savedRepos()));
};

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id !== repoId);
  setSavedRepos(nextState);
  localStorage.setItem('savedRepos', JSON.stringify(savedRepos()));
};

const repoIsSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((item) => item.id === repoId);
  return repo?.length > 0;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card bg-gray-700 m-10">
      <p class="text-xl mx-8 pt-5 text-yellow-300 font-bold ">
        &#11088; Stars: {repo.stargazers_count}
      </p>

      <div class="card-body">
        <a
          href={repo.html_url}
          class="card-title"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        <div class="flex">
          {repoIsSaved(repo.id) ? (
            <button class="btn btn-error" onclick={() => unsaveRepo(repo.id)}>
              Unsave
            </button>
          ) : (
            <button class="btn btn-success" onclick={() => saveRepo(repo)}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
