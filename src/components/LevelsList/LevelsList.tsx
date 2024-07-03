import { ITeacher } from '../../interfaces/interfaces';
import scss from './LevelsList.module.scss';


interface IProps {
  teacher: ITeacher;
}

const LevelsList = ({ teacher }: IProps) => {

  return (
    <ul className={scss.levelsList}>
      {teacher.levels.map((level, index) => 
        <li key={index} className={scss.levelsList__item}>#{level}</li>
      )}
    </ul>
  );
};


export default LevelsList;