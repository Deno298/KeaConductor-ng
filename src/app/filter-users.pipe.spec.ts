import { FilterUsersPipe } from './filter-users.pipe';
import { User } from './entities/User';
import { MatTableDataSource } from '@angular/material';

fdescribe('FilterUsersPipe', () => {

  it('should filter users based on a searchkey', () => {


    const users: User[] = [
      {email: 'test@Te.dk', firstName: 'bar', lastName: 'testersen', password: 'tihi', originalEmail: 'test@Te.dk', isActive: true},
      {email: 'test@te1.dk', firstName: 'foo', lastName: 'tustersen', password: 'tuhu', originalEmail: 'test@Te1.dk', isActive: true},
      {email: 'test@Te2.dk', firstName: 'blob', lastName: 'blar', password: 'tihi', originalEmail: 'test@Te2.dk', isActive: true}
    ];

    const userList = new MatTableDataSource(users);

    const filter: FilterUsersPipe = new FilterUsersPipe();

    const result = filter.transform(userList, 'test@Te2.dk');
    console.log(result);

    expect(result.length).toBe(1);
    expect(result[0].password).toBe('tihi');
  });
});
