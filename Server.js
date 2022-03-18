const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
// const {google} = require('googleapis');
const path = require('path');

// async function runSample() {
//   const youtube = google.youtube({
//     version: 'v3',
//     auth: 'AIzaSyC153H93g6C_P1MCu44aX_GqR75cz-bl1M'
//   })
// 
//   const res3 = await youtube.videos.list({
//   part: ['id', 'snippet'],
//   chart: 'mostPopular',
//   regionCode: 'US',
//   maxResults: 5
//   });
// 
//   res3.data.items.forEach ( item =>{
//   console.log(item)
//   })
// }

app.use(express.static('public'));

//catch-all route for Reactjs
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

//runSample().catch(console.error);


//   const res = await youtube.search.list({
//     part: 'id,snippet',
//     q: 'Node.js on Google Cloud',
//     maxResults: 10,
//     type: 'video',
//     videoCaption: 'closedCaption',
//     safeSearch: 'strict',
//     relevanceLanguage: 'en'
//   });
// 
//   res.data.items.forEach( item => {
//     console.log(item.id)
//   })

//   const res2 = await youtube.videoCategories.list({
//     part: 'id,snippet',
//     regionCode: 'US'
//   });
// 
//   res2.data.items.forEach( item => {
//     console.log(item)
//   })