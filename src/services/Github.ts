import axios from 'axios'

class Release {
    public downloadCount: number
    public date: string
    constructor(
        public name: string,
        date: Date,
        assets: any
    ) {
      this.downloadCount = assets[0].download_count || 0
      this.date = new Date(date).toLocaleString()
    }
}
class Repo {
    public name: string
    public description: string
    public link: string
    public stars: number
    constructor(res: any) {
      console.log(res)
      this.name = res.name
      this.description = res.description
      this.link = res.html_url
      this.stars = res.stargazers_count
    }
}

class Github {
    private axios: any;
    constructor() {
      this.axios = axios.create({
        baseURL: 'https://api.github.com/repos/wdaan/'
      })
    }

    getRepoInfo(repo: string) {
      return this.axios.get(repo)
        .then((res: any) => new Repo(res.data))
    }

    async getRepoReleases(repo: string) {
      let releases: Release[] = []
      let total = 0

      await this.axios.get(`${repo}/releases`)
        .then((res: any) => res.data)
        .then((data: any) => {
          releases = data.map((release: any) => {
            total += release.assets[0].download_count || 0

            return new Release(release.name, release.published_at, release.assets)
          })
        })

      return { total, releases }
    }
}
export default new Github()
