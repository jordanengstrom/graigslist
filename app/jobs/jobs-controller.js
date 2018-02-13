function JobController() {

    var jobService = new JobService();

    this.drawJobsForm = function () {

        //make items job specific
        var formElem = document.getElementById('forms').innerHTML = `
        <form onsubmit="app.controllers.autosCtrl.addCar(event)" id="job-form">
            <input type="text" name='make' placeholder='Make'>
            <input type="text" name='model' placeholder='Model'>
            <input type="number" name='year' placeholder='Year'>
            <input type="number" name='price' placeholder='Price'>
            <input type="url" name='img' placeholder='image link'>
            <div class="form-group">
                <label for="condition">Condition</label>
                <select class="form-control" id="condition">
                    <option value="0">New</option>
                    <option value="1">Like New</option>
                    <option value="2">Fair</option>
                    <option value="3">Rust Bucket</option>
                    <option value="4">You got a tow truck?</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>`
        draw();
    }

    function draw() {
        var jobArr = jobService.getJobs();
        var template = '';
        for (let i = 0; i < jobsArr.length; i++) {
            const job = jobsArr[i];
            template += `
                `

        }
        document.getElementById('board').innerHTML = template;
    }

    this.addJob = function addJob(event) {
        event.preventDefault();
        var form = event.target;
        var jobObj = {
            title: form.title.value,
            description: form.description.value,
            requirements: form.requirements.value,
            salary: form.salary.value,
            companyContact: form.companyContact.value
        }
        jobService.addJob(jobObj);
        document.getElementById('job-form').reset();
        draw();
    }



}