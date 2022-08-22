import axios from 'axios';

export async function getNumbersList(): Promise<string[]> {
    const { data } = await axios.get<string>('https://www.random.org/integers/?num=200&min=1&max=9&col=1&base=10&format=plain&rnd=new')

    return data.split('\n', 200);
}