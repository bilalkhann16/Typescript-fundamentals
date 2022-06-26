type ID = string;
type popularTag = string;
type maybePopularTag = popularTag | null

interface IUserInterface{
    id: ID;
    name: string;
    surname: string;
}

let username: string = "alex";
let pageName: string | number = "1";  //either number or string(Union operator).
let errorMessage: string | null = null;

const popularTags : popularTag[] = ['dragon', 'coffee'];

let newuser: IUserInterface | null = null
let someProp: string | number | null | undefined | string[] | object
