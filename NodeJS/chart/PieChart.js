// // Path: NodeJS/chart/BarChart.js
// const ctx = document.getElementById('myChart').getContext('2d');
// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: 'My Dataset',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// const options = {
//     responsive: true,
//     maintainAspectRatio: false
// };
// const myChart = new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: options
// });
// //get pie chart

import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const chart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        onClick: (e) => {
            const activePoints = chart.getActiveElements();
            if (activePoints.length > 0) {
                const clickedElementIndex = activePoints[0].index;
                const label = chart.data.labels[clickedElementIndex];
                const value = chart.data.datasets[0].data[clickedElementIndex];
                console.log(label, value);
            }
        }
    }
});
 