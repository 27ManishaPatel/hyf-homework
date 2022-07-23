console.log("hi");
//exercise-1
class User {
    constructor(fName, lName) {
        this.firstname = fName;
        this.lastname = lName
    }
    getFullName() {
        return `my full name is ${this.firstname} ${this.lastname}`
    }
}
const fullName = new User("manisha", "patel")
console.log(fullName);
console.log(fullName.getFullName());
console.log(`my full name is ${fullName.firstname} ${fullName.lastname}`);

//exercise-2 

class job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
};
class education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
};
class cv {
    constructor(job, education, email) {
        this.job = job;
        this.education = education;
        this.email = email;
    }
    addJob(job) {
        this.job.push(job);
    }
    removeJob(job) {
        this.job = this.job.filter(jb => jb.id !== job.id)
    }
    addEducation(education) {
        this.education.push(education)
    }
    removeEducation(education) {
        this.education = this.education.filter(ed => ed.id !== education.id)
    }
    renderCV() {

        for (let i = 0; i < this.job.length; i++) {
            const myPara = document.getElementById("demo")
            const para = document.createElement("p");
            para.innerHTML = "Job title: " + this.job[i].title + " Description: " + this.job[i].description + " Joined : " + this.job[i].startDate + " and will end " + this.job[i].endDate;
            myPara.appendChild(para);
        }
        console.log(this.job.title);

    }

};
const myCv = new cv([], [], "mani@gmail.com");
myCv.addJob(new job(1, "developer", "javascript developer", "2014", " 2025"));
myCv.addJob(new job(2, "engneer", "testing", "5year", " after s 10 year"));

myCv.addEducation(new education(1, "Pharmacy", "RGPV", "bhopal", "2006", " 2010"));
myCv.addEducation(new education(2, "Master in pharmacy", "BVP", "poona", "2010", "2012"));

myCv.addEducation(new education(2, "Master in pharmacy", "BVP", "poona", "2010", "2012"));
myCv.renderCV()
console.log(myCv)