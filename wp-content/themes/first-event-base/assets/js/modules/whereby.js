
// import 'regenerator-runtime/runtime';
// const fetch = require("node-fetch");
// console.log("test");
// const API_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjE4NDg5MDI0LCJvcmdhbml6YXRpb25JZCI6ODY4OTAsImp0aSI6ImFkZjA0MWNkLTAyOWQtNGQ0OC1iNTU2LWUyZTU2ZWFlZGMyYyJ9.yIj5EwetvpZp71OcXeaM1qKjrrcGR83GJmulpLt8mIY";
// const data = {
//   startDate: "2020-08-11T07:56:01Z",
//   endDate: "2020-08-11T07:56:01Z",
//   fields: ["hostRoomUrl"]
// };
// (async () => {
//   const response = await fetch("https://sheltered-crag-25368.herokuapp.com/https://api.whereby.dev/v1/meetings", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
//   }).then((res) => res.json());
//   console.log(response);
//   let roomUrl = response.roomUrl;
//   if(roomUrl){
//     let app = document.getElementById('whereby');
//     var makeIframe = document.createElement("iframe");
//     makeIframe.setAttribute("src", roomUrl);
//     makeIframe.setAttribute("allow", "camera;microphone");
//     makeIframe.style.width = "1440px";
//     makeIframe.style.height = "775px";
//     app.appendChild(makeIframe);
//   }
// })();