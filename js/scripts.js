var List = {
  name: "",

  init: function() {
    this.tasks = [];
  },

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
  $("#anotherList").click(function() {
    $(".listNames").append(
      '<div class="nameListDiv">' +
        '<label for="nameList">Name:</label>' +
        '<input type="text" class="nameList"><br>' +
      '</div>'
    );
  });

  var currentList;

  $("form#formList").submit(function(event) {
    event.preventDefault();


    $(".nameListDiv").each(function(){
      var inputtedName = $(this).find('input.nameList').val();
      var newList = Object.create(List);
      newList.init();
      newList.setName(inputtedName);

      $("#listLists").append('<li class="listListClick">' + newList.getName() + '</li>');

      $(".listListClick").last().click(function() {
        currentList = newList;
        var all_tasks = currentList.getTasks().map(function(task) { return task.getName() })
        $("#Tasks h2").text(currentList.getName());
        $("#listTasks").empty()
        currentList.getTasks().forEach( function(task){
          $("#listTasks").append('<li class="listTask">' + task.getName() + "</li>");
        });

      });

      $("#formTask").submit(function(event) {
        event.preventDefault();
        var newTaskName = $('#nameTask').val();
        var newTask = Object.create(Task);
        newTask.setName(newTaskName);
        currentList.addTask(newTask);
        var all_tasks = currentList.getTasks().map(function(task) { return task.getName() })

        $("#listTasks").empty()
        currentList.getTasks().forEach( function(task){

        $("#listTasks").append('<li class="listTask">' + task.getName() + "</li>");

        });

        $(".nameTaskDiv input").val("");
        $(".taskNames").empty()
      });

    });

    $(".nameListDiv input").val("");
    $(".listNames").empty()


  });



});
