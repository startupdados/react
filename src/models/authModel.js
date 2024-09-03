// src/models/authModel.js

import UserModel from './userModel';

class AuthModel {
  constructor({ accessToken, user }) {
    this.accessToken = accessToken;
    this.user = UserModel.fromJson(user);
  }

  // Método para criar uma instância de AuthModel a partir de um JSON
  static fromJson(json) {
    return new AuthModel({
      accessToken: json.accessToken,
      user: json.user,
    });
  }
}

export default AuthModel;
