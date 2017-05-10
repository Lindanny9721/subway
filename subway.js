// console.log('is jquery here?', $);
var trains = ["1","2","3","9","4","5","6","A","C","E","B","D","F","N","Q","R","W"]
$(document).ready(function() {
      $.ajax({
        url: "https://data.cityofnewyork.us/resource/kk4q-3rt2.json",
        type: "GET",
        data: {
          "$limit": 5000,
          "$$app_token": "GFM7yJOMboJWrRvx7JCKefRKb"
        }
      }).done(function(data) {
        //   alert("Retrieved " + data.length + " records from the dataset!");
       
       var trainData = {
         "1": {
           "stops": []
         }
       }
    
    
        window.mydata = data;
        var line = 0;
        var name = 0;
        console.log("before loop")
        for (var i = 0; i < window.mydata.length; i++) {
          console.log(window.mydata[i]);
          var line = window.mydata[i].line
          console.log(line);
          var lines = line.split("-");
          console.log("line is " + lines);
          for (var j=0; j < lines.length; j++) {
            if (trainData[lines[j]]) {
              trainData[lines[j]]["stops"].push(window.mydata[i].name);
            }
            else {
              trainData[lines[j]] = {};
              trainData[lines[j]]["stops"] = [window.mydata[i].name];
            }
            console.log(trainData[lines[j]]);
          } 
          console.log("This is " , trainData)
        }

        // for (var i = 0; i < window.mydata.length; i++) {
        //   var name = window.mydata[i].name
        //   console.log("station is");
        //   console.log(name);
        // }

     



        console.log("after loop")
        
        
        
        for (var i=0; i < trains.length; i++) {
          console.log("trains i " + trains[i])
        
          var circleHtml =
            '<a class="btn red" id="' + trains[i] + '" href="#">' +
              '<div class="circle">' + trains[i] + '</div>' +
                '<i class="ion-ios-arrow-down">' +  
              '</i>' +
            '</a>';
          $("#all").append(circleHtml);
        }
        
        $(".btn").click(function() {
            // $( "#book" ).fadeIn( "slow", function()
          //   var data = $(this).ajax('url');
         $("#results").text("Hello world!");
        var list = "";
        var results =trainData[$(this).attr("id")].stops;
        for (var i = 0; i < results.length; i++) {
          list += "<li>" + results[i] + "</li>";
        }
        $('.results').html(list);
        var scrolled = scrolled + 300;
        $(".results").stop().animate({
            scrollTop: scrolled
        })
        })
      });
      
       

})
      