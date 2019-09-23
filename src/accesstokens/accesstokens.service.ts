import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessTokensEntity } from './accessTokens.entity';
import { Repository } from 'typeorm';
import { AcTokenDto } from './dto/AcToken.dto';

@Injectable()
export class AccesstokensService {

  constructor(
    @InjectRepository(AccessTokensEntity) private readonly acTokensRepository: Repository<AccessTokensEntity>,
  ) {}

  public async createAccesToken(createuserDTO: AcTokenDto): Promise<any> {
    return await  this.acTokensRepository.save(createuserDTO);
    // const newProduct = new this.userRepository(createProductDTO);
    // return newProduct.save();
  }
}
