import { getCustomRepository, DeleteResult } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

interface RequestDTO {
  id: string;
}

class DeleteTransactionService {
  public async execute(id: RequestDTO): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    await transactionRepository.delete(id);
  }
}

export default DeleteTransactionService;