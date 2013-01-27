require(["../libs/text!/published.conf"],function(published){
	var eventSource = {};
	_.extend(eventSource, Backbone.Events);

	_.each(published.split(/\n/), eachPublishedEvent);

	function eachPublishedEvent(line){
		var eventUrl = line.split(" ")[0];
		$.ajax(eventUrl, {
			success: gotEventData,
			error: notFound
		});
	}
	function gotEventData(data){
		eventSource.trigger("addEvent", data);
	}

	function notFound(){
		//console.log(arguments);
	}

	return eventSource;
});
