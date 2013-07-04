if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Here is the output.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}


// code to run on server at startup
// if (Meteor.isServer) { Meteor.startup(function () {}); }

