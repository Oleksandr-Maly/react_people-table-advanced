import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export const QueryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <div className="panel-block">
      <p className="control has-icons-left">
        <input
          data-cy="NameFilter"
          value={query}
          onChange={event => setSearchParams(
            getSearchWith(searchParams, {
              query: event.target.value || null,
            }),
          )}
          className="input"
          type="text"
          placeholder="Search"
        />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
  );
};