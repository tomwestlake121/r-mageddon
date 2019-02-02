HTMLWidgets.widget({

  name: "d3v5_zoomable_treemap",

  type: "output",

  factory: function(el, width, height) {

    var instance = { };

    d3.formatDefaultLocale(
      {
        "decimal": ".",
        "thousands": ",",
        "grouping": [3],
        "currency": ["£", ""],
        "dateTime": "%a %b %e %X %Y",
        "date": "%m/%d/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    );

  if( HTMLWidgets.shinyMode )
  {
    Shiny.addCustomMessageHandler('resetInputValue',
                function(variableName){
                  Shiny.onInputChange(variableName, null);
                  });
  }


    return {

      renderValue: function(x) {

        instance.x = x;
        instance = draw(el, instance, resize = "false");

      },

      resize: function(width, height) {
        instance = draw(el, instance, resize = "true");
      },

      instance: instance

    };
  }
});
