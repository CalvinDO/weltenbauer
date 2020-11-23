var VehicleVisualization;
(function (VehicleVisualization) {
    window.addEventListener("load", init);
    let baseURL = "https://calvindo.github.io/weltenbauer/VehicleVisualizing/VehicleData";
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
            let nameStr = name.name;
            if (!nameStr.toLowerCase().endsWith(".meta")) {
                let url = baseURL + "/" + name.name;
                let response = await fetch(url);
                let vehicleName = nameStr.replace(".json", "");
                let vehicle = new VehicleVisualization.Vehicle(vehicleName, await response.json());
                vehicleContainer.append(vehicle.getDiv());
            }
        }
    }
})(VehicleVisualization || (VehicleVisualization = {}));
//# sourceMappingURL=Main.js.map