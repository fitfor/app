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

app.get(‘/recommendation’, callGet_recommendations);function callGet_recommendations(req, res) {
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue
  var spawn = require(“child_process”).spawn;
  var process = spawn(‘python’, [“./get_recommendations.py”,
    req.query.act1,
    req.query.act2,
    req.query.act3,
    req.query.act4,
    req.query.act5,
    req.query.act6,
    req.query.act7,
    req.query.act8
  ]);  process.stdout.on(‘data’, function (data) {
    res.send(data.toString());
  });
}
