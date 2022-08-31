export class Cazana {
  constructor(
    public id: number,
    public vrm: string,
    public make: string,
    public model: string,
    public registrationDate: string,
    public dateAdvertised: string,
    public price: number,
    public mileageAdvertised: number,
    public durationFromReg: number,
    public averageAdMileage: number,
    public dateOfMot: string,
    public result: string,
    public mileageMot: number,
    public durationFromRegMot: number,
    public mileageMotAdvertised: number,
    public averageMotMileage: number,
    public dateOfChange: string,
    public fromVRM: string,
    public toVRM: string,
    public durationFromRegVrm: number,
    public mileageVrmAdvertised: number,
    public averageVrmMileage: number
  ) {}
}
