console.log("hi");
//    exercise-1
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

class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
};
let job1 = new Job(1, "developer", "coding", 2016, 2025);
let job2 = new Job(2, "pharmacist", "quality control", 2010, 2016);
let job3 = new Job(3, "doctor", "consulting", 2005, 2010);
let job4 = new Job(4, "data analyst", "related to something", 2007, 2014);

class Education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
};
let education1 = new Education(1, "computer science", "kbh univ", "CPH", 2009, 2012);
let education2 = new Education(2, "pharmacy", "bvu univ", "poona", 2009, 2012);

class Cv {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email;
    }
    addJob(job) {
        this.jobs.push(job);
    }
    removeJob(job) {
        // this.job = this.job.filter(jb => jb.id !== job.id) 
        if(job instanceof Job){
            const index = this.jobs.indexOf(job);
            this.jobs.splice(index, 1)
        }else{
            alert('not a job!')
        }
    }
    addEducation(education) {
        this.educations.push(education)
    }
    removeEducation(education) {
        //this.education = this.education.filter(ed => ed.id !== education.id)
        if(education instanceof Education){
            const index = this.educations.indexOf(education);
            this.educations.splice(index, 1)
        }else{
            alert('not a education!')
        }
    }
    renderArray(arr){
        const firstElement = arr[0]
        const h1El = document.createElement("h1");

        let isJob;
        if(firstElement instanceof Job){
            h1El.innerText = "Jobs"
            isJob = true;
        } else {
            h1El.innerText = "Educations"
            isJob = false;
        }
        
        document.body.append(h1El)
        arr.forEach(item => {
            const divEl = document.createElement("div");
            const h2El = document.createElement("h2");
            h2El.innerText = item.title
            divEl.appendChild(h2El)

            const ulEl = document.createElement("ul");
            if(isJob) {
                const liEl1 = document.createElement("li")
                liEl1.innerText = item.description
                ulEl.appendChild(liEl1)

            } else {
                const liEl1_1 = document.createElement("li")
                liEl1_1.innerText = item.school

                const liEl1_2 = document.createElement("li")
                liEl1_2.innerText = item.address

                ulEl.append(liEl1_1, liEl1_2)
            }
            
            const liEl2 = document.createElement("li")
            liEl2.innerText = item.startDate
            const liEl3 = document.createElement("li")
            liEl3.innerText = item.endDate

            ulEl.append(liEl2, liEl3)
            divEl.append(ulEl)
            document.body.append(divEl)
        })
    }
    renderCV() {
        this.renderArray(this.jobs);
        this.renderArray(this.educations)

    }
};
const myCv = new Cv("mani@gmail.com");
myCv.addJob(job1);
myCv.addJob(job2);
myCv.addJob(job3);
myCv.addJob(job4);

myCv.removeJob(job2);

myCv.addEducation(education1);
myCv.addEducation(education2);

myCv.renderCV()
console.log(myCv)