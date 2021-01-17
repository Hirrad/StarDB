export default class SwapiServise {
    __dbSwapi = 'https://swapi.dev/api';

    async getResource(url) {

        const res = await fetch(`${this.__dbSwapi}${url}`);

        if (!res) {
            return console.log('fg')
        }

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    async getPeople(page = 1) {
        const res = await this.getResource(`/people/?page=${page}`)
        return {
            data: res.results.map(this._dataCorrectionPeople),
            count:res.count,
            next:res.next,
            previous:res.previous
        }
    }

    async getPeoples(page = 1) {
        const res = await this.getResource(`/people/?page=${page}`)
        return res
    }

    async getPages(page = 1) {
        const res = await this.getResource(`/people/?page=${page}`)
        return res.results.map(this._dataCorrectionPeople)
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`)
        return this._dataCorrectionPerson(res);
    }

    async getPlanets() {
        const res = await this.getResource('/planets/')
        return res.results
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return this._dataCorrectionPlanet(res);
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
        const idRegExp = /\/([0-9]*)\/$/;
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

    _dataCorrectionPerson(person) {

        return {
            name: person.name,
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            id: this._extractId(person)
        }

    }

    _dataCorrectionPersons(person) {

        return {
            name: person.name,
            birthYear: person.birth_year,
            height: person.height,
            mass: person.mass,
            id: this._extractId(person)
        }

    }

    _dataCorrectionPeople = (people) => {
        return {
            id: this._extractId(people),
            name: people.name
        }
    }
}
const swip = new SwapiServise();
// swip.getPeople(5).then((body) => console.log(body))
// swip.getPerson(6).then((body)=>console.log(body))
