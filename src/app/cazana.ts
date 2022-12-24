export class Cazana {
  constructor(
    public id: number,
    public vrn: string,
    public make: string,
    public model: string,
    public registrationDate: string,
    public dateAdvertised: string,
    public price: number,
    public mileageAdvertised: string | number,
    public durationFromReg: string | number,
    public averageAdMileage: number,
    public dateOfMot: string,
    public result: string,
    public mileageMot: string | number,
    public durationFromRegMot: number,
    public averageMotMileage: number,
    public dateOfChange: string,
    public fromVRN: string,
    public toVRN: string,
    public durationFromRegVrn: number,
    public mileageVrn: string | number,
    public averageVrnMileage: number
  ) {}
}
