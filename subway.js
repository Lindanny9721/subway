// console.log('is jquery here?', $);

$.ajax({
    url: "https://data.cityofnewyork.us/resource/kk4q-3rt2.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "GFM7yJOMboJWrRvx7JCKefRKb"
    }
}).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
  window.mydata= data;
  var line= "0";
  var name= "0";
  console.log("before loop")
  for(var i=0; i<window.mydata.length;i++ ){
    var line = window.mydata[i].line
    console.log("line is");
    console.log(line);
  }
  console.log("after loop")
 
});

