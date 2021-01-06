class SwapiServise {
    __dbSwapi = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this.__dbSwapi}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    async getPeople() {
        const res = await this.getResource('/people/')
        return res.results
    }
    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`)
        return res
    }
    async getPlanets() {
        const res = await this.getResource('/planets/')
        return res.results
    }
    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return res
    }

    async getStarships() {
        const res = await this.getResource(`/planets/`)
        return res.results
    }
    async getStarship(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return res
    }
}

