export default interface Forecast


    {
        "queryCost": number,
        "resolvedAddress": string,
        "address": string,
        "timezone": string,
        "description": string,
        "days": [
            {
                "datetime": Date,
                "tempmax": number,
                "tempmin": number,
                "temp": number,
                "feelslike": number,
               
                "conditions": string,
                "description": string,
                "icon": string,
               
         
        
            
        }]
    











}