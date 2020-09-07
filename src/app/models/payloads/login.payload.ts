/**
 * A interface que representa o payload enviado para realizar login
 */
export interface LoginPayload {
  /**
   * O username do usuário
   */
  username: string;

  /**
   * A senha do usuário
   */
  password: string;
}
