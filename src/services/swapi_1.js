export default class SwapiServise {
    // __dbSwapi = 'https://swapi.dev/api';
    __dbSwapi = 'https://www.swapi.tech/api';

    async getResource(url) {

        const res = await fetch(`${this.__dbSwapi}${url}`);
        // console.log(res);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    async getPeople() {
        const res = await this.getResource('/people/');

        return res.results.map(this._dataCorrectionPeople);
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`)
        return res.results
    }

    async getPlanets() {
        const res = await this.getResource('/planets/')

        return res
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return this._dataCorrectionPlanet(res.result.properties);
    }

    async getStarships() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._dataCorrection)
    }

    async getStarship(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return res
    }

    _extractId(item) {
        const idRegExp = /([0-9])$/;
        return item.url.match(idRegExp)[1];
    }

    _dataCorrectionPlanet(planet) {

        return {
            diameter: planet.diameter,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            name: planet.name,
            id: this._extractId(planet)

        }

    }

    _dataCorrectionPeople(people) {
        return {
            id: people.uid,
            name: people.name,

        }
    }
}
//
// const swapi = new SwapiServise();
// swapi.getPeople().then((body) => console.log(body));