class GitHub {

    constructor() {
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {
        // Get user
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        // Get repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profileData,
            repos  // this is same as repos : repos

        }
    }
}