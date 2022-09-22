import { Injector } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { FilterExpressionUtils, OntimizeService, AppConfig, Util, ServiceResponse, AuthService } from 'ontimize-web-ngx';

export class DummyService extends OntimizeService {

  static mappings: Object = {
    customer: '/customers-data.json',
    customerRecursive: '/customers-recursive-data.json',
    account: '/accounts-data.json',
    customerAccount: '/customer-accounts-data.json',
    accountConcepts: '/concepts-data.json',
    movement: '/movements.json',
    accountMovementTypes: '/movementtypes-data.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {

    const authService = this.injector.get(AuthService);
    const configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = authService.getSessionInfo();
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data';

    if (config.entity !== undefined) {
      this.entity = config.entity;
    }
  }

  public startsession(user: string, password: string): Observable<any> {
    return undefined;
  }

  public endsession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public hassession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public query(kv?: Object, av?: Array<string>, entity?: string,
    sqltypes?: Object): Observable<any> {
    entity = (Util.isDefined(entity)) ? entity : this.entity;

    const url = this._urlBase + DummyService.mappings[entity];
    const options = {
      headers: this.buildHeaders()
    };
    return this.doRequest({
      method: 'GET',
      url: url,
      options: options,
      successCallback: (resp, subscriber) => {
        this.customParseSuccessfulQueryResponse(kv, resp, subscriber);
      },
      errorCallBack: this.parseUnsuccessfulQueryResponse
    });


  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
    offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    return undefined;
  }

  public insert(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public update(kv: Object = {}, av: Object = {}, entity?: string,
    sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

  protected customParseSuccessfulQueryResponse(kv: any, resp: ServiceResponse, subscriber: Subscriber<ServiceResponse>) {
    if (resp && resp.isUnauthorized()) {
      this.clientErrorFallback(401);
    } else if (resp && resp.isFailed()) {
      subscriber.error(resp.message);
    } else if (resp && resp.isSuccessful()) {
      resp.data = this.filterResponse(kv, resp);
      subscriber.next(resp);
    } else {
      // Unknow state -> error
      subscriber.error('Service unavailable');
    }
  }

  private filterResponse(kv: Object, resp) {

    if (kv.hasOwnProperty(FilterExpressionUtils.FILTER_EXPRESSION_KEY)) {
      return this.fetchRoots(resp);
    }

    const keys = Object.keys(kv || {});
    const result = [];
    resp.data.forEach(element => {
      let add = true;
      keys.forEach(key => {
        add = add && (element[key] === kv[key]);
      });
      if (add) {
        result.push(element);
      }
    });
    return result;
    // if (keys.length > 0 && resp.data && resp.data.length > 0) {
    //   for (let i = resp.data.length - 1; i >= 0; i--) {
    //     let deleteRecord = false;
    //     for (let k = 0, lenk = keys.length; k < lenk; k++) {
    //       if (resp.data[i][keys[k]] !== kv[keys[k]]) {
    //         deleteRecord = true;
    //         break;
    //       }
    //     }
    //     if (deleteRecord) {
    //       resp.data.splice(i, 1);
    //     }
    //   }
    // }

  }

  private fetchRoots(resp: any): Array<any> {
    const rootsArray = [];
    resp.data.forEach(element => {
      if (!element.hasOwnProperty('PARENT')) {
        rootsArray.push(element);
      }
    });
    return rootsArray;
  }

}
