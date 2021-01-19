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

    getPeople = async () => {
        const res = await this.getResource('/people/')
        return res.results.map((body)=>this._dataCorrection('people',body))
    }

    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}`)
        return this._dataCorrection('people',res);
    }

    async getPlanets() {
        const res = await this.getResource('/planets/')
        return res.results
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}/`)
        return this._dataCorrection('planet',res);
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

    _dataCorrection(item,data) {

        switch (item) {
            case 'people':
                return {
                    birthYear: data.birth_year,
                    eyeColor: data.eye_color,
                    gender: data.gender,
                    name: data.name,
                    height:data.height,
                    mass: data.mass,
                    id: this._extractId(data)

                }
            case 'planets':
                return {
                    diameter: data.diameter,
                    population: data.population,
                    rotationPeriod: data.rotation_period,
                    name: data.name,
                    id: this._extractId(data)

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

