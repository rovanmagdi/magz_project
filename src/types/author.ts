export default interface Author {
 

    "fullName": string,
    "image": string,
    "posts": [
        {
            "views": number,
            "_id": string,
            "title": string,
            "description": string,
            "image": string,
            "category": string,
            "subCategory": string,
            "likes": [],
            "auther": string,
            "status": string,
            "comments": [],
            "createdAt": string,
            "updatedAt": string,
            "__v": number,
            "region": string,
        }
    ],
    "numOfPosts": number

    
  }

  