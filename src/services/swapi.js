class SwapiServise {
    __dbSwapi = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this.__dbSwapi}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }
}

const swapi=new SwapiServise();
swapi.getResource('/people/1/').then((p)=>console.log(p.name));