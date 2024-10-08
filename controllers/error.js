exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "/404",
  });
};

exports.get500 = (req, res, next) => {
  console.log("500");
  res.status(500).render("500", {
    pageTitle: "Server side error",
    path: "/500",
    errorMessage: "Some error occured",
  });
};
