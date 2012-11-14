suite('Schedule', function() {
  setup(function(done) {
    var pObj = this;
    require(['collections/schedule'], function(Schedule) {
      pObj.schedule = new Schedule();
      done()
    })
  });

  suite('#initialize', function() {
    test('It should have 6 models', function(done) {
      assert.lengthOf(this.schedule, 6);
      done()
    });
  });
});