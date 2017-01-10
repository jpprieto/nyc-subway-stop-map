$( document ).ready(function() 
    {
        $("#submitButton").click(function()
        {
            // 1. Get the value of the subway stop IDs from the input field
            // HINT: Use ClickHandlers
            
            
            
            // 2. Make API call to Subway API to get the Stop Info - (mtaapi.herokuapp.com/stop)
            //    Save the stop name
            //    Save the latitude and longitude in the format lat,lon (example: 40.752769,-73.979189)
            //    Repeat this exercise 3 times to get name and coordinates for Stop 1, 2 and 3
            var stop1Obj = $.getJSON(
                    "URL",
                    function(response) {
                        return response;
                    }
                );
            var stop1Name = "...";
            var stop1Coordinates = "...";
                // Repeat this for Stop 2 and 3

            
            // 3. Display the stop names on the HTML
            // HINT: Use Javascript Object Dot Notation
            $("#stop1").text("....");
                // Repeat this for Stop 2 and 3
                
                
                
            
            // 4. Build the Google Maps API Path using the information gathered in step 2.
            //  HINT: Substitute the coordinates with VARIABLES
            //  EXAMPLE: 
            //    https://maps.googleapis.com/maps/api/staticmap?
            //    zoom=16
            //    &size=2000x2000
            //    &markers=color:red%7Clabel:A%7C40.752769,-73.979189
            //    &markers=color:blue%7Clabel:B%7C40.754222,-73.984569
            //    &markers=color:green%7Clabel:C%7C40.758663,-73.981329
            //    &key=YOUR_API_KEY
            var map_url = "";
            
            // 5. Display the map on the HTML
                $("#map").append("<img src=" + map_url + ">");

        });
                    
    });