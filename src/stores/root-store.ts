import { action, makeObservable, observable } from "mobx";
import { TApplication } from "@helpers/types";
import { isError } from "@helpers/type-guards";

export class RootStore {
  applications: TApplication[] = [];
  loading = false;
  error: string | null = null;
  searchQuery = "";

  constructor() {
    makeObservable(this, {
      applications: observable,
      loading: observable,
      error: observable,
      searchQuery: observable,
      search: action,
      fetchApplications: action,
    });
    this.fetchApplications();
  }

  get filteredApplications() {
    if (!this.searchQuery) {
      return this.applications;
    }

    const result = this.applications.filter((app) => {
      const idMatch = app.id && app.id.toLowerCase().includes(this.searchQuery);
      const nameMatch =
        app.name && app.name.toLowerCase().includes(this.searchQuery);
      const descriptionMatch =
        app.shortDescription &&
        app.shortDescription.toLowerCase().includes(this.searchQuery);

      return idMatch || nameMatch || descriptionMatch;
    });

    return result;
  }

  search(query: string) {
    this.searchQuery = query.toLowerCase();
  }

  async fetchApplications() {
    this.loading = true;
    this.error = null;

    try {
      const res = await fetch("https://apps-api.keboola.com/apps");
      if (res.status !== 200) {
        const error = new Error("Could not fetch applications.");
        this.error = error.message;
        return Promise.reject(error);
      } else {
        const data = await res.json();
        this.applications = data;
      }
    } catch (err) {
      if (isError(err)) {
        this.error = err.message;
        const error = new Error(err.message);
        return Promise.reject(error);
      }
    } finally {
      this.loading = false;
    }
  }
}
