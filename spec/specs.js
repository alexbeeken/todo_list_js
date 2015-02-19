describe("List", function() {
  describe("setName", function() {
    it('will add, return the name capitalized', function() {
      var list1 = Object.create(List);
      list1.setName("songs to sing");
      expect(list1.getName()).to.equal("Songs To Sing");
    });
  });

  describe('addTask', function() {
    it('will add a task to a list', function() {
      var list1 = Object.create(List);
      list1.setName("house keepin'");
      var task1 = Object.create(Task);
      list1.addTask(task1);
      expect(list1.getTasks()).to.eql([task1]);
    });
  });
});

describe("Task", function() {
  describe("setName", function() {
    it("will add, return name of task", function() {
      var task1 = Object.create(Task);
      task1.setName("the national anthem");
      expect(task1.getName()).to.equal("The National Anthem");
    });
  });
});
