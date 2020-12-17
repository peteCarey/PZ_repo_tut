interface Car {
  id: number;
  vrm: string;
  make: string;
  model: string;
  RegistrationDate: string;
  getAnnualMileage?: () => number;
  getTotalMileage?: () => number;
  getCarAge?();
  getDateRegistered?();
}

interface CarService {
  /*  
  add(jaguar: Car): Car;
  delete(jaguar: Car): void;
  getAll(): Car[];
  getById(carId: number): Car;
*/
}

var jaguar: Car = {
  id: 1234,
  vrm: "PK68ORO",
  make: "Jaguar",
  model: "xe",
  RegistrationDate: "30/09/2018",
  getAnnualMileage() {
    return 7800;
  },
};

console.log(jaguar.vrm);
console.log(jaguar.model);
console.log(jaguar.getAnnualMileage());
