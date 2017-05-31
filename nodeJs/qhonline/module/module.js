var companyName = "Framgia";

var work = function () {
	console.log("I'm working at : " + companyName);
};

var setName = function (name) {
    companyName = name;
};

module.exports.setName = setName;
module.exports.work = work;
