import './loading.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress id="loadingCircle" />
    </div>
  );
};

export default Loading;