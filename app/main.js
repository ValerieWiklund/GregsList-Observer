import CarController from "./Controllers/CarController.js";


class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController()
            jobCtrl: new JobController()
        }
    }
}

window['app'] = new App()