import { useForm } from 'react-hook-form';
import { Search as SearchIcon } from 'react-feather';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

interface FormData {
  query: string;
}

interface SearchProps {
  defaultValues?: FormData;
  onSubmit: (data: FormData) => void;
}

function Search(props: SearchProps): JSX.Element {
  const { defaultValues, onSubmit } = props;
  const { handleSubmit, register } = useForm<FormData>({
    defaultValues,
  });
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.search}>
      <input
        {...register('query')}
        className={styles.search__input}
        placeholder="Search location here"
      />

      <button type="submit" className={styles.search__submit}>
        <span style={{ display: 'none' }}>{t('search')}</span>
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
