// chartOptions.ts
import { ChartOptions } from 'chart.js';

export const barOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `Marks: ${ctx.raw}`,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: '#e0e7ef44',
      },
      ticks: {
        color: '#2563eb',
        font: {
          weight: 'bold', // ✅ Valid string literal
        },
      },
      title: {
        display: true,
        text: 'Marks',
        color: '#2563eb',
        font: {
          weight: 'bold', // ✅ no type error
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#334155',
        font: {
          weight: 'bold',
        },
      },
    },
  },
  // ✅ Use `animations` instead of `animation`
  animations: {
    x: {
      duration: 900,
      easing: 'easeOutQuart',
    },
    y: {
      duration: 900,
      easing: 'easeOutQuart',
    },
  },
};
