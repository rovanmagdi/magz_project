export default interface Post {
    "_id": string;
    "title": string;
    "description": string;
    "image": string;
    "category": string;
    "subCategory": string;
    
    "regien": string;
    "updatedAt":string;
    "likes":[];
    "comments":[];
    "status":string;
    "createdAt":string;
    "__v":number;
    
    "auther":{"firstName":string;
    "lastName":string;
    "image":string;

    "brief":string;
    "_id":string;};

    
  }