const buildController = {}

buildController.Home = async function(req, res){
  res.render("index", {title: "Home"});
}


buildController.Error = async function(req, res, next, status) {
  try {
    let errorContent;
    switch (status) {
      case 500:
        errorContent = {
          status: 500,
          message: "Sorry, something went wrong on our end. Please try again later.",
          image: "/images/site/error.png",
        };
        break;
      case 404:
        errorContent = {
          status: 404,
          message: "The page you are looking for could not be found.",
          image: "/images/site/error.png",
        };
        break;
      case 400:
        errorContent = {
          status: 400,
          message: "Bad Request. Please check your input and try again.",
          image: "/images/site/error.png",
        };
        break;
      case 401:
        errorContent = {
          status: 401,
          message: "Unauthorized. Please login and try again.",
          image: "/images/site/error.png",
        };
        break;
      case 403:
        errorContent = {
          status: 403,
          message: "Forbidden. You do not have permission to access this resource.",
          image: "/images/site/error.png",
        };
        break;
      default:
        errorContent = {
          status: 406,
          message: "Not Acceptable.",
          image: "/images/site/error.png",
        };
        break;
    }
    res.status(parseInt(status)).render("./error", { 
      status, 
      content: errorContent, 
      title: `${status} Error`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = buildController;