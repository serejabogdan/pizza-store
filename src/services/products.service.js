import { TestService } from './test.service';
import { FetchService } from './fetch.service';

export class ProductsService {
    static servicesList = {
        test: TestService,
        fetch: FetchService
    };

    create(serviceType) {
        return new ProductsService.servicesList[serviceType];
    }
}
