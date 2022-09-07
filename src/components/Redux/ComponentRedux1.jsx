import { useDispatch } from 'react-redux';
import { createUser, modifyUser, resetUser } from '../../redux/states/user';

function ComponentRedux1() {
  const dispatcher = useDispatch();

  const handleClick = () => {
    dispatcher(createUser({ name: 'Nacho', email: 'nacho@gmail.com' }));
  };

  const handleClickModify = () => {
    dispatcher(modifyUser({ name: 'Homero', email: 'Homer@gmail.com' }));
  };

  const handleClickReset = () => {
    dispatcher(resetUser());
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion Redux, createUser</button>
      <button onClick={handleClickModify}>Enviar informacion Redux, modifyUser</button>
      <button onClick={handleClickReset}>Enviar informacion Redux, resetUser</button>
    </div>
  )
}

export default ComponentRedux1