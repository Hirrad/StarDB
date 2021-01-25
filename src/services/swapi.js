export default class SwapiServise {
    __dbSwapi = 'https://swapi.dev/api';

    getResource = async (url) => {

        const res = await fetch(`${this.__dbSwapi}${url}`);

        if (!res) {
            return console.log('fg')
        }

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    getPeople = async () => {
        const res = await this.getResource('/people/')
        return res.results.map((body) => this._dataCorrection('people', body))
    }

    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}`)
        return this._dataCorrection('people', res);
    }

    getPlanets = async () => {
        const res = await this.getResource('/planets/')
        return res.results.map((body) => this._dataCorrection('planet', body))
    }

    getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}/`)
        return this._dataCorrection('planet', res);
    }

    getStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map((body) => this._dataCorrection('starship', body))
    }

    getStarship = async (id) => {
        const res = await this.getResource(`/starships/${id}/`)
        return res
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _dataCorrection(item, data) {

        switch (item) {
            case 'people':
                return {
                    birthYear: data.birth_year,
                    eyeColor: data.eye_color,
                    gender: data.gender,
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    id: this._extractId(data)

                }
            case 'planet':
                return {
                    diameter: data.diameter,
                    population: data.population,
                    rotationPeriod: data.rotation_period,
                    name: data.name,
                    id: this._extractId(data)

                }
            case 'starship':
                return {
                    model: data.model,
                    cost: data.cost_in_credits,
                    hyperdrive: data.hyperdrive_rating,
                    name: data.name,
                    id: this._extractId(data),
                    maxSpeed: data.max_atmosphering_speed,
                    starshipClass: data.starship_class


                }
            default:
                return null

        }


    }

    // _dataCorrection(planet) {
    //
    //     return {
    //         diameter: planet.diameter,
    //         population: planet.population,
    //         rotationPeriod: planet.rotation_period,
    //         name: planet.name,
    //         id: this._extractId(planet)
    //
    //     }
    //
    // }
}

const rt = new SwapiServise();
rt.getStarships().then((a) => console.log(a))