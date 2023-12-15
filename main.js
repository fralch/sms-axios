const axios = require('axios');

const data = {
  message: 'Ya funciona richi',
  tpoa: '22435',
  recipient: [
    {
      msisdn: '51955547121',
    },
  ],
};

axios.post('https://api.labsmobile.com/json/send', data, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: "Basic " + btoa("acairampoma@credipyme.com.pe:3NAQ3zIhEltP8a7fgouisZt3OjXG4rVW"),
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
