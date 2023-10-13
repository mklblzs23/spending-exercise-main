import sendServerRequest from './service';


async function getSpendigns() {
  const response = await sendServerRequest('GET', 'http://localhost:5000/spendings',);
  return response;
}

async function saveSpending(props) {
  const response = await sendServerRequest('POST', 'http://localhost:5000/spending', props);
  return response;
}

const spendingService = {
  getSpendigns,
  saveSpending,
};

export default spendingService;
