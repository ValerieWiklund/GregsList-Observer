

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
    return
    `<div class="card">
       <div class="card-header">
          ${this.jobTitle}
      </div>
      <div class="card-body">
        <h5 class="card-title">${this.company}</h5>
        <p class="card-text">${this.description}</p>
        <p class="card-text">${this.hours} - ${this.rate}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
  }
}