import axios from 'axios';

export async function fetchNumbersList(numberListLength = 200): Promise<string[]> {
    const { data } = await axios.get<string>(`https://www.random.org/integers/?num=${numberListLength}&min=1&max=9&col=1&base=10&format=plain&rnd=new`)

    return data.split('\n', numberListLength);
}