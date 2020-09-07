//#region Imports

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HelperService } from '../services/helper/helper.service';
import { HttpAsyncService } from '../services/http-async.service.ts/http-async.service';
import { StorageService } from '../services/storage/storage.service';

//#endregion

/**
 * A factory para a criação do serviço de Http
 */
export function httpAsyncFactory(
  http: HttpClient,
  helper: HelperService,
  storage: StorageService,
) {
  const httpAsync: HttpAsyncService = new HttpAsyncService(http);

  httpAsync.setBaseUrl(environment.apiBaseUrl);

  httpAsync.setBeforeValidations(async () => {
    if (helper.isOffline()) {
      return {
        error: new HttpErrorResponse({
          status: 503,
          error: new Error('Você não está conectado a internet.'),
        }),
      };
    }

    return {};
  });

  httpAsync.setLoadHeaders(async () => {

    const { error, success } = await storage.getItem<string>(environment.keys.token);

    if (error || success === null) {
      return new HttpHeaders();
    }

    let key: string;

    key = success;

    // TODO: Verificar aqui a data de expiração do Token, e ver se ainda é válido

    return new HttpHeaders({ Authorization: key });
  });

  httpAsync.getOnAsyncResultError().subscribe(async error => {
    console.error(error);
  });

  return httpAsync;
}
