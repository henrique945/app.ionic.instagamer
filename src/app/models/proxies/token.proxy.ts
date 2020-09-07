/**
 * As informações recebidas do servidor quando realizado o login
 */
export interface LoginProxy {

  /**
   * O token de acesso
   */
  token: string;

  /**
   * A data de expiração do token
   */
  expirationDate: string;

  /**
   * A identificação do usuário
   */
  id: number;

}
