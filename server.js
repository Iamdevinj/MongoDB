var express = require("expres");
var app = express();
var router = express.Router();
var PORT = PRocess.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(router);
app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
