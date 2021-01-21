import { searchParameters } from '../../constants';

export const ResultHeader = ({ title, type }) => {
  return (
    <div className="text-4xl sm:text-5xl font-bold text-primary">
      <p>
        {title && searchParameters[type][title].label} {type}
      </p>
    </div>
  );
};
