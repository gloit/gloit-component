module.exports = {
  afterInstall: function () {
    var self = this;

    return this.addBowerPackageToProject('animate.css')
      .then(function() {
        return self.addBowerPackageToProject('fontawesome');
      })
      .then(function() {
        return self.addBowerPackageToProject('pace');
      })
      .then(function() {
        return self.addBowerPackageToProject('slimscroll');
      })
      .then(function() {
        return self.addBowerPackageToProject('bootstrap');
      })
      .then(function() {
        return self.addBowerPackageToProject('numeral');
      })
      .then(function() {
        return self.addBowerPackageToProject('toastr');
      })
      .then(function() {
        return self.addBowerPackageToProject('sweetalert');
      })
      .then(function() {
        return self.addBowerPackageToProject('https://github.com.com/towerhe/googlefonts.git');
      })
      .then(function() {
        return self.addBowerPackageToProject('https://github.com.com/smalot/bootstrap-datetimepicker.git');
      });
  },

  normalizeEntityName: function() {}
};
