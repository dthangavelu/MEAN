export class Product {

    constructor(
        public title: string = null,
        public price: number = null,
        public img_url: string = "",        
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
      ){}

}
