class Data
{
    static async getDB(link)
    {
        let response = await fetch(link);
        let json = await response.json();
        return json;
    }
}
export{Data}