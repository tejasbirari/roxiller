import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Statistics from "./components/scenes/Statistics";
import Charts from "./components/scenes/Charts";
import TableList from "./components/scenes/TableList";
import { getBarChart, getPieChart, getStatistics, getTransactions } from "./services/GET";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [month, setMonth] = useState(3);
  const [search, setSearch] = useState("");
  const [totalSales, setTotalSales] = useState(0);
  const [totalSoldItem, setTotalSoldItem] = useState(0);
  const [totalNotSoldItem, setTotalNotSoldItem] = useState(0);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchTransactionTable = async () => {
      try {
        const responseTable = await getTransactions(
          page + 1,
          rowsPerPage,
          search,
          month
        );
        setTransactions(responseTable.transactions);
        setTotalItems(responseTable.totalDocs);
      } catch (error) {
        console.log("Error while fetching transaction table", error);
      }
    };

    const fetchStatistics = async () => {
      try {
        const response = await getStatistics(month);
        setTotalSales(response.totalSaleAmount);
        setTotalSoldItem(response.totalSoldItems);
        setTotalNotSoldItem(response.totalNotSoldItems);
      } catch (error) {
        console.log("Error while fetching statistics", error);
      }
    };

    const fetchBarChart = async () => {
      try {
        const response = await getBarChart(month);
        setBarChartData(response);
      } catch (error) {
        console.log("Error while fetching charts", error);
      }
    };

    const fetchPieChart = async () => {
      try {
        const response = await getPieChart(month);
        setPieChartData(response);
      } catch (error) {
        console.log("Error while fetching charts", error);
      }
    };

    fetchTransactionTable();
    fetchStatistics();
    fetchBarChart();
    fetchPieChart();
  }, [page, rowsPerPage, search, month]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={
              <TableList
                transactions={transactions}
                totalItems={totalItems}
                search={search}
                month={month}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                setMonth={setMonth}
                setSearch={setSearch}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            }
          />

          <Route
            path="/statistics"
            element={
              <Statistics
                month={month}
                totalSales={totalSales}
                totalSoldItem={totalSoldItem}
                totalNotSoldItem={totalNotSoldItem}
              />
            }
          />

          <Route
            path="/charts"
            element={
              <Charts 
                barChartData={barChartData} 
                pieChartData={pieChartData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
