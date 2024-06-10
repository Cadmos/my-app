import IRequest from "./IRequest";


function CreatePath(request: IRequest): string {
    return `${process.env.REACT_APP_API_URL}/${request.SubPath}`;
}

export async function GetRequest(request: IRequest): Promise<any> {
    try {
        let response = await fetch(CreatePath(request));
        let data: any = await response.json();
        return await data;
    } catch (error) {
        return console.error(error);
    }
}

export async function PostRequest(url: string, data: any): Promise<any> {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let responseData: any = await response.json();
        return await responseData;
    } catch (error) {
        return console.error(error);
    }
}

export default GetRequest;