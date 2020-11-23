var VehicleVisualization;
(function (VehicleVisualization) {
    class Tasks {
        constructor(_category, _tasksData) {
            this.category = _category[0].toUpperCase() + _category.slice(1);
            this.tasksData = _tasksData;
        }
        getDiv() {
            let output = document.createElement("div");
            output.setAttribute("class", "category");
            let categoryName = document.createElement("h3");
            categoryName.innerHTML = this.category;
            output.append(categoryName);
            let currentTasksContainer = document.createElement("div");
            currentTasksContainer.setAttribute("class", "tasks-container");
            output.append(currentTasksContainer);
            this.length = 0;
            this.trues = 0;
            for (let taskID in this.tasksData) {
                let currentTaskDiv = document.createElement("div");
                currentTaskDiv.setAttribute("class", "task");
                let currentTaskHeading = document.createElement("h4");
                currentTaskHeading.innerHTML = taskID;
                currentTaskDiv.append(currentTaskHeading);
                currentTaskDiv.setAttribute("class", this.tasksData[taskID] == true ? "task-checked" : "task-unchecked");
                currentTasksContainer.append(currentTaskDiv);
                this.length++;
                this.trues += this.tasksData[taskID] == true ? 1 : 0;
            }
            this.progress = this.trues / this.length;
            categoryName.innerHTML += " " + (this.progress * 100).toFixed(0) + "%";
            return output;
        }
    }
    VehicleVisualization.Tasks = Tasks;
})(VehicleVisualization || (VehicleVisualization = {}));
//# sourceMappingURL=Tasks.js.map