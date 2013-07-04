if (Meteor.isClient) {
	Meteor.startup(function(){
		var example_data = jsyaml.load($('#example-data').val());
		$('#report').html(Report.generate( example_data ));
	});
}

