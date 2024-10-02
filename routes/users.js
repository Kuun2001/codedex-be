var express = require('express');
var router = express.Router();

/* GET users listing. */
const data = [
  { name: "kuun", age: 12},
  { name: "kun", age: 21}
]
router.get('/', function(req, res, next) {
  const {url, query } = req;
  const filterCondition = query.name;
  let result = data
  if(filterCondition){
    result = result.filter((e) => e.name === filterCondition)
  }
  console.log({url, query});
  res.status(200).send(result);
});

module.exports = router;
