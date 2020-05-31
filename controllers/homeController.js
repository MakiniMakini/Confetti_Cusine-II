exports.homePage = (req, res) => {
    res.render("index")
};
exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourse: courses});
};
// exports.showSignUp = (req, res) =>{
//     res.render("contact")
// };
// exports.postedSignUpForm = (req, res) =>{
//     res.render("thanks")
// }

//courses variables
var courses = [
    {
        title: "Bake a cake",
        cost: 50
    },
    {
        title: "Maku Ugali",
        cost: 200
    },
    {
        title: "Managu Special",
        cost: 300
    }
];
