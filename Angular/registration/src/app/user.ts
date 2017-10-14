export class User {
    constructor(
        public first_name: string = "",
        public last_name:string = "",
        public email:string = "",
        public password:string = "",
        public password_confirmation:string = "",
        public street_address:string = "",
        public unit_apt_num:number = null,
        public city:string = "",
        public state:string = "",
        public feeling_lucky:boolean = null,
        public created_at:Date = new Date(),
        public updated_at:Date = new Date()
    ){}
}
