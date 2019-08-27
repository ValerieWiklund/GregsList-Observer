import JobService from "../Services/JobService.js"

// PRIVATE

let jobService = new JobService()

function _draw() {

}

// PUBLIC

export default class JobController {
  constructor() {
    //NOTE  register all subscribers
    _jobService.addSubscribers('jobs', _draw)

    // NOTE retrieve data
    _jobService.getApiJobs();

  }

  addJob(event) {


  }

  deleteJob(id) {


  }


  bid(id) {


  }

}