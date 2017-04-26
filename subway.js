// console.log('is jquery here?', $);
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
        var line = "0";
        var name = "0";
        console.log("before loop")
        for (var i = 0; i < window.mydata.length; i++) {
          var line = window.mydata[i].line
          console.log(line);
          var lines = line.split("-");
          console.log("line is " + lines);
           trainData["line"]["stops"].push(name[i]);
          
        }

        // for (var i = 0; i < window.mydata.length; i++) {
        //   var name = window.mydata[i].name
        //   console.log("station is");
        //   console.log(name);
        // }

     



        console.log("after loop")
        var results = ["One", "Two", "Three", "Four", "Five", "Six"];
        var list = "";
        for (var i = 0; i < results.length; i++) {
          list += "<li>" + results[i] + "</li>";
        }
        $('.results').append(list);
        
        var trains = ["1","2","3","9","4","5","6","A","C","E","B","D","F"]
        for (var i=0; i < trains.length; i++) {
          console.log("trains i " + trains[i])
        
          var circleHtml =
            '<a class="btn red" id="first" href="#">' +
              '<div class="circle">' + trains[i] + '</div>' +
                '<i class="ion-ios-arrow-down">' +  
              '</i>' +
            '</a>';
          $("#all").append(circleHtml);
        }
        
         $(".btn").click(function() {
        //   var data = $(this).ajax('url');
          alert("button was clicked");
        })
      });
      
       

})
      