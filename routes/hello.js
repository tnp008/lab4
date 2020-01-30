
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = reg.params.userName;
  res.render("hello", {
  	"name": nameToShow
  });
};
