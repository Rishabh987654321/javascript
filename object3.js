const course={
    courseName:"web dev",
    price:100,
    duration:"6hr",
    description:"learn web dev"
}

//there are two ways to access the values of object
console.log(course.courseName);//1st way
const {description:coursedesc}=course//2nd way ...this is also called de structuring objects as to our prefrence
//here we have just taken a prop fom object course and stored it in a psudo name "coursedesc"
console.log(coursedesc);

