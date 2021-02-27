import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { AppError } from "../errors/AppError";
import * as yup from 'yup';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    console.log(name, email);

    const schema = yup.object().shape({
      name: yup.string().required("Nome é obrigatório"),
      email: yup.string().email().required()
    })

    //
    // if (!(await schema.isValid(request.body))) {
    //   return response.status(400).json({
    //     error: "Validation Failed"
    //   })
    // }

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExistis = await userRepository.findOne({
      email
    });

    if (userAlreadyExistis) {
      throw new AppError("User already exists!");
    }

    const user = userRepository.create({
      name, email
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };

