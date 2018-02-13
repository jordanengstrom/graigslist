function JobService () {

    var jobs = [];

    function Job(title,description,requirements,salary,companyContact) {
        this.title = title,
        this.description = description,
        this.requirements = requirements,
        this.salary = salary,
        this.companyContact = companyContact
    }

    this.getJobs = function getJobs(){
        return JSON.parse(JSON.stringify(jobs));
    }

    this.addJob = function addJob(jobObj) {
        var job = new Job(jobObj.title, jobObj.description, jobObj.requirements, jobObj.salary, jobObj.companyContact);
        jobs.push(job);
    }

    console.log("Service is up and running");
    //make template jobs. I was thinking list format..
    jobs.push(new Job());    
    jobs.push(new Job());
    jobs.push(new Job());
    jobs.push(new Job())

}