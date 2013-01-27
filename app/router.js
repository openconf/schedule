require([
  // Application.
  "app",
	"eventsSource"
],

function(app, eventsSource) {
	console.log(eventsSource);
	eventsSource.on("addEvent", eventFromEventSource);

	function eventFromEventSource(eventData){
		console.log(eventData);
	}
  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
			console.log("YEE");
    }
  });

  return Router;

});
