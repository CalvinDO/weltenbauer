var VehicleVisualization;
(function (VehicleVisualization) {
    window.addEventListener("load", init);
    let baseURL = "http://127.0.0.1:5500/VehicleData";
    let vehicles;
    let vehicleContainer;
    function init(_event) {
        vehicleContainer = document.querySelector("#vehicle-container");
        let input = document.querySelector("input");
        let i = document.querySelector('input').addEventListener('change', (_e) => {
            communicate(_e);
        });
    }
    async function communicate(_e) {
        for (let name of _e.target.files) {
            let url = baseURL + "/" + name.name;
            let response = await fetch(url);
            let nameStr = name.name;
            let vehicleName = nameStr.replace(".json", "");
            let vehicle = new VehicleVisualization.Vehicle(vehicleName, await response.json());
            vehicleContainer.append(vehicle.getDiv());
        }
    }
})(VehicleVisualization || (VehicleVisualization = {}));
//# sourceMappingURL=Main.js.map