export class FetchService {
  async getArrayProducts(productName) {
    const baseUrl = 'https://my-json-server.typicode.com/serejabogdan/mockjson';
    const request = await fetch(`${baseUrl}/${productName}`);
    return request.json();
  }
}
