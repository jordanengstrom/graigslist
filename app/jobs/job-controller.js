function JobController() {

    var jobService = new JobService();

    this.drawJobsForm = function () {

        var formElem = document.getElementById('forms').innerHTML = `
        <form onsubmit="app.controllers.jobsCtrl.addJob(event)" id="job-form">
            <input type="text" name='title' placeholder='Job Title'>
            <input type="text" name='businessName' placeholder='Business Name'>
            <input type="text" name='location' placeholder='Location'>
            <input type="text" name='description' placeholder='Description'>
            <input type="text" name='salary' placeholder='Salary'>
            <input type="text" name='companyContact' placeholder='CompanyContact'>
            <button type="submit">Submit</button>
        </form>`
        draw();
    }

    function draw() {
        var jobArr = jobService.getJobs();
        var template = '';
        for (let i = 0; i < jobArr.length; i++) {
            const job = jobArr[i];
            template += `
            <div class="col-sm-3">
                <h3>Title: ${job.title}</h3>
                <p>Business Name: ${job.businessName}</p>
                <p>Location: ${job.location}</p>
                <p>Description: $${job.description}</p>
                <p>Salary: ${job.salary}</p>
                <p>Contact: ${job.companyContact}</p>
            </div>`

        }
        document.getElementById('board').innerHTML = template;
    }

    this.addJob = function addJob(event) {
        event.preventDefault();
        var form = event.target;
        var jobObj = {
            title: form.title.value,
            businessName: form.businessName.value,
            loction: form.location.value,
            description: form.description.value,
            salary: form.salary.value,
            companyContact: form.companyContact.value
        }
        jobService.addJob(jobObj);
        document.getElementById('job-form').reset();
        draw();
    }



}