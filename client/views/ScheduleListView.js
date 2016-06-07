var ScheduleListView = Backbone.View.extend({

  tagName: 'table',

  el: '#schedule-list',

  collection: app.scheduleList,

  initialize: function() {
    // whenever something is added to the collection (which happens in the AppView controller), rerender
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    // inside the <table> html, add the <th> and then append each thing in the collection
    this.$el.html('<th>Schedule</th>').append(
      this.collection.map(function(schedule){
        return new ScheduleEntryView({model: schedule}).render();
      })
    );
  }
});

app.scheduleListView = new ScheduleListView();