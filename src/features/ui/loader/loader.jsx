import './loader.scss';

function Loader() {
  return (
    <div className="jd-loader">
      <svg className="jd-loader__icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <circle className="jd-loader__bean" cx="60" cy="50" r="4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s" />
          </circle>
          <circle className="jd-loader__bean" cx="60" cy="50" r="4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s" />
          </circle>
          <circle className="jd-loader__bean" cx="60" cy="50" r="4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s" />
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path className="jd-loader__packman" d="M50 50L20 50A30 30 0 0 0 80 50Z" transform="rotate(90 50 50)" />
          <path className="jd-loader__packman" d="M50 50L20 50A30 30 0 0 0 80 50Z">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" />
          </path>
          <path className="jd-loader__packman" d="M50 50L20 50A30 30 0 0 1 80 50Z">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" />
          </path>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
