define(function(){
	
	$.ajax("/published.conf", {
		success: function(data){
			_.each(data.split(/\n/), function(line){
				line.split(" ")[0];
			});
		}
	});
	return {};
});
