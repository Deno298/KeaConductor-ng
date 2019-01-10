import { FilterUsersPipe } from './filter-users.pipe';
import { User } from './entities/User';
import { MatTableDataSource } from '@angular/material';

fdescribe('FilterUsersPipe', () => {

  it('should filter users based on a searchkey', () => {


    const users: User[] = [
      {email: 'morteno@mail.dk', firstName: 'Morten', lastName: 'Olsen', password: '123', originalEmail: 'morteno@mail.dk', isActive: true},
      // tslint:disable-next-line:max-line-length
      {email: 'dennisp@email.dk', firstName: 'Dennis', lastName: 'Petersen', password: 'letmein', originalEmail: 'dennisp@email.dk', isActive: true},
      // tslint:disable-next-line:max-line-length
      {email: 'christiank@mail.com', firstName: 'Christian', lastName: 'Kirschberg', password: 'hemmeligkode', originalEmail: 'christiank@mail.com', isActive: true}
    ];

    const userList = new MatTableDataSource(users);

    const filter: FilterUsersPipe = new FilterUsersPipe();

    let result = filter.transform(userList, 'morteno@');
    console.log(result);

    expect(result.length).toBe(1);
    expect(result[0].lastName).toBe('Olsen');

    result = filter.transform(userList, '@mail');
    expect(result.length).toBe(2);

    result = filter.transform(userList, 'christian');
    expect(result.length).toBe(1);
    expect(result[0].lastName).toBe('Kirschberg');

  });
});
