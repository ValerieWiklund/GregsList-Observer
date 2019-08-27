import JobService from "../Services/JobService.js"

// PRIVATE

let _jobService = new JobService()

function _draw() {
  let jobs = _jobService.Jobs
  let template = ''
  jobs.forEach(job => template += job.Template)
  document.getElementById('jobs-cards').innerHTML = template
}

// PUBLIC

export default class JobController {
  constructor() {
    //NOTE  register all subscribers
    _jobService.addSubscriber('jobs', _draw)

    // NOTE retrieve data
    _jobService.getApiJobs();

  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let data = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(data)
    form.reset()

  }

  deleteJob(id) {
    if (window.confirm) {
      _jobService.deleteJob(id)
    }


  }


  bid(id) {


  }

}