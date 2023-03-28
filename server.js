const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const trains = [
  {
    id: 1,
    name: 'Train 1',
    route: 'New York to Boston',
    departureTime: '8:00 AM',
    status: 'On time'
  },
  {
    id: 2,
    name: 'Train 2',
    route: 'Boston to New York',
    departureTime: '10:00 AM',
    status: 'Delayed'
  },
  {
    id: 3,
    name: 'Train 3',
    route: 'Philadelphia to Washington DC',
    departureTime: '12:00 PM',
    status: 'On time'
  }
];

app.get('/trains', (req, res) => {
  res.json(trains);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
