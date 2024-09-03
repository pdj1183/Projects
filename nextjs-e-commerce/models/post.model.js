export class Post {
    constructor(postObj){
        this.id = postObj.id;
        this.title = postObj.title;
        this.description = postObj.description;
        this.path = postObj.path;
    }
}
