namespace VehicleVisualization {
    window.addEventListener("load", init);

    let baseURL: string = "https://calvindo.github.io/weltenbauer/VehicleData";
    let vehicles: Vehicle[];

    let vehicleContainer: HTMLDivElement;

    function init(_event: Event): void {
        vehicleContainer = <HTMLDivElement>document.querySelector("#vehicle-container");

        let input: HTMLInputElement = document.querySelector("input");
        let i = document.querySelector('input').addEventListener('change', (_e: any) => {
            communicate(_e);
        });
    }

    async function communicate(_e: any): Promise<void> {
        for (let name of _e.target.files) {
            let nameStr: string = <string>name.name;
            if (!nameStr.toLowerCase().endsWith(".meta")) {
                let url: RequestInfo = baseURL + "/" + name.name;

                let response: Response = await fetch(url);

                let vehicleName: string = nameStr.replace(".json", "");
                let vehicle: Vehicle = new Vehicle(vehicleName, await response.json());

                vehicleContainer.append(vehicle.getDiv());
            }
        }
    }
}