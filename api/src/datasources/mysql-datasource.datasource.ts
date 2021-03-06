import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysqlDatasource',
  connector: 'mysql',
  url: '',
  host: '',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'wexpnd'
};

// create table todos(id int not null auto_increment primary key, description varchar(50) not null, title varchar(50) not null, created DATETIME not null, completed tinyint(1) not null);
// create database wexpnd;

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysqlDatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysqlDatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
