var app = app || {};
app.Collections = app.Collections || {};

app.Collections.Todos = Backbone.Collection.extend({
  model: app.Models.Todo

   // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage('todos-backbone'),

   completed: function(){
    return this.filter(function (todo){
      return todo.get('completed');
    });
   },

   remaining: function(){
    return this.without.apply( this, this.completed());
   },

   nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function( todo ) {
      return todo.get('order');
    }
  });

  // Create our global collection of **Todos**.
  app.Todos = new TodoList();

});