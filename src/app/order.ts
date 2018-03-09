export class Order{
    constructor(
        public user:number,
        public ordered_products:Object,
        public json_str:string,
        public status:number) {}
}