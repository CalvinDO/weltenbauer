var VehicleVisualization;
(function (VehicleVisualization) {
    class Vehicle {
        constructor(_name, _vehicleData) {
            this.name = _name;
            this.vehicleData = _vehicleData;
        }
        getDiv() {
            let output = document.createElement("div");
            output.setAttribute("class", "vehicle");
            let vehicleName = document.createElement("h2");
            vehicleName.innerHTML = this.name;
            output.append(vehicleName);
            this.totalLength = 0;
            this.totalTrues = 0;
            for (let categoryID in this.vehicleData) {
                if (categoryID.toLowerCase() != "machineid" && categoryID.toLowerCase() != "notes") {
                    let currentTasksData = this.vehicleData[categoryID];
                    let currentTasks = new VehicleVisualization.Tasks(categoryID, currentTasksData);
                    let categoryDiv = currentTasks.getDiv();
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
    VehicleVisualization.Vehicle = Vehicle;
})(VehicleVisualization || (VehicleVisualization = {}));
//# sourceMappingURL=Vehicle.js.map