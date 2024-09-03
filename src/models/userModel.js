// src/models/userModel.js

class UserModel {
    constructor({ id, email, name, role, createdAt, updatedAt }) {
      this.id = id;
      this.email = email;
      this.name = name;
      this.role = role;
      this.createdAt = new Date(createdAt);
      this.updatedAt = new Date(updatedAt);
    }
  
    // Método para converter para JSON
    toJson() {
      return {
        id: this.id,
        email: this.email,
        name: this.name,
        role: this.role,
        createdAt: this.createdAt.toISOString(),
        updatedAt: this.updatedAt.toISOString(),
      };
    }
  
    // Método para criar uma instância de UserModel a partir de um JSON
    static fromJson(json) {
      return new UserModel(json);
    }
  }
  
  export default UserModel;
  