/**
 * A interface que representa o payload enviado para registrar o usuário
 */
export interface RegisterPayload {

  name: string;
  email: string;
  cpf: string;
  password: string;
  description: string;

}
