// dtos/user.dto.js
const { IsEmail, IsNotEmpty, Length } = require('class-validator');

class CreateUserDto {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.bio = data.bio;
    this.phone = data.phone;
  }

  @IsNotEmpty()
  @Length(4, 20)
  username;

  @IsNotEmpty()
  @Length(4, 20)
  name;

  @IsNotEmpty()
  @Length(8, 32)
  password;

  @IsEmail()
  email;

  @Length(8, 32)
  bio;

  @IsNotEmpty()
  phone;
}

module.exports = CreateUserDto;
