import express from 'express'
const router = express.Router()

const obj = {
  'act1': 'Focus excercise',
  'act2': 'Sleeping excercise',
  'act3': 'Flexibility excercise',
  'act4': '',
  'act5': '',
  'act6': '',
  'act7': '',
  'act8': '',
};

router.get('/', callGet_recommendations);

function callGet_recommendations(req:any, res:any) {
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue
  console.log('here')
  var spawn = require('child_process').spawn;
  var process = spawn('python', ['./get_recommendations.py',
    obj.act1,
    obj.act2,
    obj.act3,
    obj.act4,
    obj.act5,
    obj.act6,
    obj.act7,
    obj.act8
  ]);  process.stdout.on('data', function (data:any) {
    res.send(data.toString());
  });
}


export default router