import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   clearError,
//   loadEducationTypes,
// } from '../features/education/educationSlice';
// import EducationTable from '../features/education/components/EducationTable';
// import { useAppDispatch } from '../store';

// import UsersTable from '../features/user/components/UsersTable';
// import { loadUsers } from '../features/user/usersSlice';

function App(): JSX.Element {
  //   const dispatch = useAppDispatch();
  //   const { error } = useSelector((store: RootState) => store.education);

  //   useEffect(() => {
  //     dispatch(loadEducationTypes());
  //     dispatch(loadUsers());
  //     if (error) {
  //       alert('Проблемы на useEffect с dispatch');
  //       dispatch(clearError());
  //     }
  //   }, [dispatch]);

  return (
    <form
      method="post"
      action="http://localhost:4000/api/photo"
      encType="multipart/form-data"
    >
      <input type="file" name="file" multiple />
      <input type="submit" />
    </form>
  );
}

export default App;
