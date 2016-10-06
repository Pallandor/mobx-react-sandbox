import { observable } from 'mobx';

class PeopleStore {
  @observable persons = [
    { name: 'Roger' },
    { name: 'Michelle '},
  ];
}

export default PeopleStore;
