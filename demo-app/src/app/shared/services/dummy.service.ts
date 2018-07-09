import { Injector } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { OntimizeService, LoginService, AppConfig } from 'ontimize-web-ngx';
import { FilterExpressionUtils } from 'ontimize-web-ngx/ontimize/components/filter-expression.utils';

export class DummyService extends OntimizeService {

  static mappings: Object = {
    'customer': '/customers-data.json',
    'customerAccount': '/accounts-data.json',
    'accountConcepts': '/concepts-data.json',
    'accountMovementTypes': '/movementtypes-data.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {

    let loginService = this.injector.get(LoginService);
    let configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = loginService.getSessionInfo();
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data';
    this._sessionid = config.session ? config.session.id : -1;
    this._user = config.session ? config.session.user : '';

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
    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    const url = this._urlBase + DummyService.mappings[entity];
    const options = {
      headers: this.buildHeaders()
    };

    const self = this;

    let innerObserver: any;
    const dataObservable = Observable.create(observer => {
      innerObserver = observer;
    }).share();

    // setTimeout(() => {
    self.httpClient.get(url, options).subscribe((resp: any) => {
      if (resp && resp.code === 3) {
        self.redirectLogin(true);
      } else if (resp.code === 1) {
        innerObserver.error(resp.message);
      } else if (resp.code === 0) {
        resp.data = self.filterResponse(kv, resp);
        innerObserver.next(resp);
      } else {
        // Unknow state -> error
        innerObserver.error('Service unavailable');
      }
    }, error => innerObserver.error(error),
      () => innerObserver.complete());
    // }, 1000);
    return dataObservable;
  }

  private filterResponse(kv: Object, resp) {

    if (kv.hasOwnProperty(FilterExpressionUtils.FILTER_EXPRESSION_KEY)) {
      return this.fetchRoots(resp);
    }

    let keys = Object.keys(kv || {});
    let result = [];
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
    let rootsArray = [];
    resp.data.forEach(element => {
      if (!element.hasOwnProperty('iditemtypeclassparent')) {
        rootsArray.push(element);
      }
    });
    return rootsArray;
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

}
