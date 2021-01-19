import { searchParameters } from './Constants';

export const ResultHeader = ({ title, type }) => {
  return (
    <div className="flex container mx-auto px-4 lg:px-0 py-3 justify-start">
      <div className="text-4xl sm:text-5xl font-bold">
        <p>
          {title && type === 'movies'
            ? searchParameters.movies[title].label
            : title && searchParameters.tv[title].label}{' '}
          {type}
        </p>
      </div>
    </div>
  );
};