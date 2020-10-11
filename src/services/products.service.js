import { TestService } from './test.service';
import { FetchService } from './fetch.service';

export class ProductsService {
    static servicesList = {
        test: TestService,
        fetch: FetchService
    };

    create(serviceType) {
        const Service = ProductsService.servicesList[serviceType]
        return new Service();
    }
}
