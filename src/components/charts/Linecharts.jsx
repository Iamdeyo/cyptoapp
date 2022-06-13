import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { useFetchAPI } from '../../useFetchAPI';

function Linecharts({ id }) {
  const [days, setDays] = useState(7);
  const [currency, setCurrency] = useState('usd');
  const [coinTimestamp, setCoinTimestamp] = useState(null);
  const [coinPrice, setCoinPrice] = useState(null);
  const [chartData, setChartData] = useState(null);

  const { data } = useFetchAPI(
    `/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setCoinTimestamp(
      data.data.prices.map((p) => {
        const date = new Date(p[0]);
        return date.getHours();
      })
    );
    setCoinPrice(
      data.data.prices.map((p) => {
        return p[1];
      })
    );
  }, [data]);

  useEffect(() => {
    if (!coinTimestamp && !coinPrice) {
      return;
    }

    setChartData({
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In ' + currency,
          data: coinPrice,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
          pointRadius: 0,
          tension: 0.5,
          fill: {
            target: 'origin',
            above: '#0071bd2f', // Area will be red above the origin
          },
        },
      ],
    });
  }, [coinTimestamp, coinPrice]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };

  const selectDays = [1, 7, 14, 30];
  const selectCurrency = ['usd', 'eur', 'jpy'];
  return (
    <div className="line-chart">
      {!chartData ? (
        <h3>
          {' '}
          <em> Searching for Chart data........ </em>{' '}
        </h3>
      ) : chartData ? (
        <div className="chart">
          <div className="filters">
            <div className="days">
              <span>Days</span>
              <select
                defaultValue={7}
                onChange={(e) => setDays(e.target.value)}
              >
                {selectDays.map((sd) => (
                  <option key={sd}>{sd}</option>
                ))}
              </select>
            </div>
            <div className="currency">
              <span>Currency</span>
              <select
                defaultValue={'usd'}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {selectCurrency.map((cr) => (
                  <option key={cr}>{cr}</option>
                ))}
              </select>
            </div>
          </div>
          {<Line data={chartData} options={options} />}
        </div>
      ) : (
        <h3>Unable to get Chart Data</h3>
      )}
    </div>
  );
}

export default Linecharts;
