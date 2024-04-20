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
    }

    get filteredApplications() {
        return this.applications.filter(
            (app) =>
                app.id.toLowerCase().includes(this.searchQuery) ||
                app.name.toLowerCase().includes(this.searchQuery) ||
                app.shortDescription.toLowerCase().includes(this.searchQuery),
        );
    }

    search(query: string) {
        this.searchQuery = query.toLowerCase();
    }

    async fetchApplications() {
        this.loading = true;
        this.error = null;

        try {
            const res = await fetch(
                "https://apps-api.keboola.com/apps?limit=20",
            );
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
