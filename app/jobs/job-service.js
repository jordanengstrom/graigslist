function JobService() {

    var jobs = [];

    function Job(title, businessName, location, description, salary, companyContact) {
        this.title = title,
        this.businessName = businessName,
        this.location = location,
            this.description = description,
            this.salary = salary,
            this.companyContact = companyContact
    }

    this.getJobs = function getJobs() {
        return JSON.parse(JSON.stringify(jobs));
    }

    this.addJob = function addJob(jobObj) {
        var job = new Job(jobObj.title, jobObj.businessName, jobObj.location, jobObj.description, jobObj.salary, jobObj.companyContact);
        jobs.push(job);
    }

    jobs.push(new Job('Barista', 'Dutch Bros', 'Boise, ID', 'make coffee and be nice', '12/hr', 'BroInCheif@dutch.com'));
    jobs.push(new Job('Bartender', '10th St Station', 'Boise, ID', 'make drinks, put up with drunk people', '12/hr', 'YouHaveToKnowSome1@gmail.com'));
    jobs.push(new Job('Manager', 'Red Robin', 'Meridian, ID', 'be a boss', '15/hr', 'apply online'));
    jobs.push(new Job('Landscaper', 'Joe\'s Lawn Care', 'Eagle, ID', 'mow lawns, get sunburned', '15/hr', 'bossLandScaper@green.com'))

}