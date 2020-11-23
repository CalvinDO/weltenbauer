namespace VehicleVisualization {
    interface VehicleData {
        [category: string]: TasksData;
    }

    export class Vehicle {
        public name: string;
        public vehicleData: VehicleData;

        public totalLength: number;
        public totalTrues: number;

        public totalProgress: number;


        constructor(_name: string, _vehicleData: VehicleData) {
            this.name = _name;
            this.vehicleData = _vehicleData;
        }

        public getDiv(): HTMLDivElement {
            let output: HTMLDivElement = document.createElement("div");
            output.setAttribute("class", "vehicle");

            let vehicleName: HTMLHeadingElement = document.createElement("h2");
            vehicleName.innerHTML = this.name

            output.append(vehicleName);

            this.totalLength = 0;
            this.totalTrues = 0;

            for (let categoryID in this.vehicleData) {
                if (categoryID.toLowerCase() != "machineid" && categoryID.toLowerCase() != "notes") {
                    let currentTasksData: TasksData = this.vehicleData[categoryID];
                    let currentTasks: Tasks = new Tasks(categoryID, currentTasksData);
                    let categoryDiv: HTMLDivElement = currentTasks.getDiv();

                    output.append(categoryDiv);
                    this.totalLength += currentTasks.length;
                    this.totalTrues += currentTasks.trues;
                }
            }

            this.totalProgress = this.totalTrues / this.totalLength;
            vehicleName.innerHTML += " " + (this.totalProgress * 100).toFixed(0) + "%";
            return output;
        }
    }
}