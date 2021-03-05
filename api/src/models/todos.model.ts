import {Entity, model, property} from '@loopback/repository';

@model()
export class Todos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'date',
    required: false,
    default: '$now'
  })
  created: string;

  @property({
    type: 'boolean',
    required: true,
  })
  completed: boolean;


  constructor(data?: Partial<Todos>) {
    super(data);
  }
}

export interface TodosRelations {
  // describe navigational properties here
}

export type TodosWithRelations = Todos & TodosRelations;
