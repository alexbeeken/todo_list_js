var List = {
  name: "",

  tasks: [],

  setName: function(inputName){
    this.name = inputName.split(" ").map( function(word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
  },

  getName: function() {
    return this.name;
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  getTasks: function(){
    return this.tasks;
  }
};

var Task = {
  name: "",

  setName: function(inputName){
    this.name = inputName.split(" ").map( function(word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
  },

  getName: function() {
    return this.name;
  }
};


$(function() {
  $("")


});
