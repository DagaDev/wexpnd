import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Todos} from '../models';
import {TodosRepository} from '../repositories';

export class TodosController {
  constructor(
    @repository(TodosRepository)
    public todosRepository: TodosRepository,
  ) { }

  @post('/todos', {
    responses: {
      '200': {
        description: 'Todos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Todos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todos, {
            title: 'NewTodos',
            exclude: ['id'],
          }),
        },
      },
    })
    todos: Omit<Todos, 'id'>,
  ): Promise<Todos> {
    return this.todosRepository.create(todos);
  }

  @get('/todos', {
    responses: {
      '200': {
        description: 'Array of Todos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Todos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Todos) filter?: Filter<Todos>,
  ): Promise<Todos[]> {
    return this.todosRepository.find(filter);
  }

  @get('/todos/{id}', {
    responses: {
      '200': {
        description: 'Todos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Todos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Todos, {exclude: 'where'}) filter?: FilterExcludingWhere<Todos>
  ): Promise<Todos> {
    return this.todosRepository.findById(id, filter);
  }

  @patch('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todos, {partial: true}),
        },
      },
    })
    todos: Todos,
  ): Promise<void> {
    await this.todosRepository.updateById(id, todos);
  }

  @put('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() todos: Todos,
  ): Promise<void> {
    await this.todosRepository.replaceById(id, todos);
  }

  @del('/todos/{id}', {
    responses: {
      '204': {
        description: 'Todos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.todosRepository.deleteById(id);
  }
}
