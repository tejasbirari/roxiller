import axios from 'axios';

const BASE_URL = "http://localhost:5000"

export const getTransactions = async (page, perPage, search, month) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/transactions?page=${page}&perPage=${perPage}&search=${search}&month=${month}`);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch transaction from database", error);
  }
};

export const getStatistics = async(month) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/statistics?month=${month}`);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch statistics from database", error);
  }
}

export const getBarChart = async(month) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/chart/bar?month=${month}`);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch barchart from database", error);
  }
}

export const getPieChart = async(month) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/chart/pie?month=${month}`);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch barchart from database", error);
  }
}
