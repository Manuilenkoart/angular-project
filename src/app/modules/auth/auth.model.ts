export interface User {
  email: string;
  password: number;
  returnSecureToken?: boolean;
}

export interface FirebaseAuthResponse {
  idToken: string;
  expiresIn: string;
}
