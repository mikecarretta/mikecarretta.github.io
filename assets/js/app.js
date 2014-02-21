(function() {

  var gitHubApi = {

    init: function( config ) {
      // "this" will refer to gitHubApi
      this.fetch(); // fetch the data with ajax call
      this.isEmptyHelper(); // Empty Field Handlebars Helper
      this.parseJsonHelper(); // Parse the attachment field Handlebars Helper
      this.containsHelper(); // Contains string Handlebars Helper
      this.template = config.template; // $('#all-records')
      this.container = config.container; // $('.records')
    },

    isEmptyHelper: function() {
      Handlebars.registerHelper('empty', function (record, options) {
        // console.log("Value: ", record);
        // console.log("Options: ", options);
        // console.log("This: ", this);
        var val = record.toString();

        if (val.length === 0) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
    },

    parseJsonHelper: function() {
      Handlebars.registerHelper('parseJSON', function(data, options) {
          var val = data.toString();
          //console.log(val);
          if (val === "") {
            return options.inverse(data);
          } else {
            return options.fn(JSON.parse(data));
          }
      });
    },

    containsHelper: function() {
      Handlebars.registerHelper('contains', function (str, pattern, options) {
        if (str.indexOf(pattern) !== -1) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
    },

    attachTemplate: function() { // handlebars.js template

      // console.log(this.records);
      var template = Handlebars.compile( this.template );

      this.container.append( template ( this.records ));
      // var html = template( this.records );
      // console.log(html);
    },

    fetch: function() {
      var self = this;

      var repoUrl = 'https://api.github.com/users/mikecarretta/repos';

      $.ajax({
        headers: {'X-Requested-With':'XMLHttpRequest'},
        url: repoUrl,
        dataType: "json",
        success: function(data) {
          console.log(data);
          // filter through arrays
          self.records = $.map( data, function( record ) {
            return {
              url: record.html_url,
              name: record.name,
              description: record.description,
              site: record.homepage
            };
          });

          self.attachTemplate();
        },
        error: function(error) {
          console.log("error " + error.status);
        }
      });
    } // end fetch

  } // end gitHubApi()

  gitHubApi.init({
    template: $('#all-records').html(),
    container: $('.records')
  });
// http://mikecarretta.com/news/birds-portfolio-and-list-responsive-wordpress-theme/
})();