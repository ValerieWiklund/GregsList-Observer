

export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get Template() {
    return `
    <div class = "col-3">
    <div class="card">
       <div class="card-header">
          ${this.jobTitle}
      </div>
      <div class="card-body">
        <h5 class="card-title">${this.company}</h5>
        <p class="card-text">${this.description}</p>
        <p class="card-text"> Hours: ${this.hours} - Rate: ${this.rate}</p>
        <button class="btn btn-danger" onclick = "app.controllers.jobCtrl.deleteJob('${this._id}')">Delete</button>
      </div>
      </div>
    </div>`
  }
}