export class User {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public confirmPassword: string;
    public points: number;

    constructor(user: any) {
      this.id = user.id || 0;
      this.name = user.name || '';
      this.email = user.email || '';
      this.password = user.password || '';
      this.confirmPassword = user.confirmPassword || '';
      this.points = user.points || 0;
    }
  }