import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

/*headers: {
    'X-RapidAPI-Key': '1f139a250emsh82423bffa3127c3p11cbc5jsna3828f2b8f2d',
    'X-RapidAPI-Host': ''
  }*/

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '1f139a250emsh82423bffa3127c3p11cbc5jsna3828f2b8f2d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
  }