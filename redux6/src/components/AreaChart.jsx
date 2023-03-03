import { useSelector } from 'react-redux';
import { itemsSelector } from 'src/redux/covidSlice';
import { Bar } from 'react-chartjs-2'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import { styled } from '../stitches.config';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);


export default function AreaChart() {
  const items = useSelector(itemsSelector);
  const confirmed = items && items?.confirmed.value;
  const recovered = items && items?.recovered.value;
  const deaths = items && items?.deaths.value;



  const data = {
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets:
      [
        {
          label: "Confirmed",
          backgroundColor: ['#dd6b20', '#319795', '#822727'],
          borderWidth: "0",
          data: [confirmed, recovered, deaths]
        },

      ]
  }

  return (
    <Container>
      <Bar data={data} />
    </Container>
  )
}
const Container = styled('section', {
  width: '60%',
  my: '$6',
  '@bp3': {
    width: '70%',
  },
  '@bp4': {
    width: '80%',
  },
  '@bp5': {
    width: '90%'
  }
});