// const db = require('../config/db');
//
// class GanttChart{
//   constructor()
//
//
// }
//
//
// let ganttChart = new Gantt("#gantt", tasks, {
//   on_view_change: function(mode) {
//     document.getElementById("current-timescale").innerText = mode;
//   },
//   custom_popup_html: function(task) {
//     return `
//           <div class="details-container"  >
//             <h5>${task.name}</h5>
//             <p>Task started on: ${task._start.getDate()}</p>
//             <p>Expected to finish by ${task._start.getDate()}</p>
//             <p>${task.progress}% completed!</p>
//           </div>
//         `;
//   },
//   bar_height: 40,
//   arrow_curve: 10,
//   view_mode: "Week",
// });
//
//
// document.querySelector(".chart-controls #day-btn").addEventListener("click", () => {
//   ganttChart.change_view_mode("Day");
// })
// document.querySelector(".chart-controls #week-btn").addEventListener("click", () => {
//   ganttChart.change_view_mode("Week");
// })
// document.querySelector(".chart-controls #month-btn").addEventListener("click", () => {
//   ganttChart.change_view_mode("Month");
// })
