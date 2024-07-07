import { ITeacher } from '../../interfaces/interfaces';
import FormBooking from '../FormBooking/FormBooking';
import LevelsList from '../LevelsList/LevelsList';
import Button from '../Button/Button';
import Modal from '../../helpers/Modal/Modal';
import useModal from '../../hooks/useModal';
import scss from './DetailedInfo.module.scss';
import icons from '../../images/icons.svg';
import userDefaultImage from '../../images/user-default.svg';

interface IProps {
  teacher: ITeacher;
}

const DetailedInfo = ({ teacher }: IProps) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { experience, reviews } = teacher;

  const ratingFormatted = (rating: number): string => { 
    return rating.toFixed(1); 
  }

  return (
    <div className={scss.detailedInfo}>
      <p className={scss.detailedInfo__text}>{experience}</p>
      <ul className={scss.detailedInfo__list}>
        {reviews.map((review, index) => 
          <li key={index} className={scss.detailedInfo__itemLevel}>
            <div className={scss.detailedInfo__box}>
              <div className={scss.detailedInfo__imageWrap}>
                <img src={userDefaultImage} alt='User' width='30' height='30' />
              </div>
              <div>
                <p className={scss.detailedInfo__caption}>{review.reviewer_name}</p>
                <div className={scss.detailedInfo__ratingWrap}>
                  <svg width='16' height='16'>
                    <use href={`${icons}#icon-star`}></use>
                  </svg>
                  <p>{ratingFormatted(review.reviewer_rating)}</p>
                </div>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        )}
      </ul>

      <div className={scss.detailedInfo__listWrap}>
        <LevelsList teacher={teacher} />
      </div>

      <Button type='submit' color='light' size='medium' onClick={openModal}>Book trial lesson</Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormBooking teacher={teacher}/>
      </Modal>
    </div>
  );
};


export default DetailedInfo;