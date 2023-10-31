import React, {CSSProperties} from 'react';
import {IIconProps} from '../iconTypes';

export const Wheel5 = React.memo(function Wheel5({
  className,
  color,
  x,
  y,
  width,
  onClick,
  angle,
}: IIconProps) {
  const style: CSSProperties = {};
  if (y) {
    style.top = `${y}`;
  }
  if (x) {
    style.left = `${x}`;
  }
  return (
    <svg
      transform={angle ? `rotate(${angle})` : undefined}
      onClick={onClick}
      width={`${width}px`}
      style={style}
      fill={color}
      className={`rotate ${className}`}
      viewBox="0 0 19.84375 19.84322"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g469"
        transform="matrix(0.26458333,0,0,0.26458333,-33.888362,-93.668849)"
      >
        <g id="g423">
          <polygon
            points="164.869,391.409 165.016,392.087 165.676,392.299 166.19,391.833 166.043,391.155 165.382,390.943 "
            id="polygon422"
          />
        </g>
        <g id="g424">
          <polygon
            points="164.522,391.884 164.46,391.879 164.508,392.11 164.395,392.134 164.437,392.204 164.561,392.063 "
            id="polygon423"
          />
        </g>
        <g id="g425">
          <polygon
            points="164.868,390.546 164.623,390.604 164.794,390.887 165.105,390.605 164.865,390.583 "
            id="polygon424"
          />
        </g>
        <g id="g426">
          <path
            d="m 165.583,356.626 c -19.242,0 -34.896,15.655 -34.896,34.896 0,19.242 15.654,34.896 34.896,34.896 19.242,0 34.896,-15.655 34.896,-34.896 0,-19.241 -15.654,-34.896 -34.896,-34.896 z m 31.269,48.52 -0.316,0.727 -0.538,-0.234 c -1.367,2.934 -3.147,5.639 -5.264,8.039 l 0.225,0.199 -0.525,0.594 -0.231,-0.204 c -2.226,2.407 -4.799,4.488 -7.639,6.163 l 0.055,0.093 -0.682,0.404 -0.06,-0.102 c -2.863,1.598 -5.982,2.788 -9.28,3.492 l 0.053,0.24 -0.775,0.17 -0.055,-0.253 c -2.02,0.382 -4.104,0.581 -6.234,0.581 -0.848,0 -1.688,-0.032 -2.52,-0.094 l -0.015,0.215 -0.791,-0.055 0.016,-0.228 c -3.469,-0.341 -6.785,-1.214 -9.865,-2.535 l -0.093,0.219 -0.73,-0.31 0.098,-0.231 c -2.937,-1.343 -5.647,-3.098 -8.057,-5.19 l -0.198,0.228 -0.599,-0.52 0.204,-0.235 c -2.352,-2.141 -4.399,-4.611 -6.068,-7.336 l -0.522,0.314 -0.409,-0.68 0.525,-0.316 c -1.679,-2.894 -2.939,-6.061 -3.693,-9.416 l -0.428,0.092 -0.167,-0.775 0.43,-0.093 c -0.426,-2.131 -0.65,-4.334 -0.65,-6.588 0,-0.744 0.025,-1.482 0.073,-2.214 l -0.19,-0.015 0.062,-0.791 0.188,0.015 c 0.295,-3.304 1.071,-6.471 2.258,-9.432 l -0.119,-0.049 0.303,-0.733 0.12,0.05 c 1.278,-2.981 2.976,-5.741 5.019,-8.205 l -0.209,-0.182 0.521,-0.598 0.201,0.175 c 2.072,-2.382 4.473,-4.47 7.133,-6.192 l -0.089,-0.146 0.676,-0.414 0.084,0.137 c 2.718,-1.67 5.691,-2.964 8.847,-3.807 l -0.092,-0.38 0.771,-0.187 0.09,0.371 c 2.53,-0.612 5.172,-0.937 7.887,-0.937 0.704,0 1.402,0.022 2.096,0.065 l 0.013,-0.148 0.79,0.067 -0.012,0.139 c 3.326,0.285 6.516,1.057 9.496,2.246 l 0.19,-0.458 0.733,0.304 -0.19,0.457 c 3.066,1.308 5.899,3.06 8.417,5.175 l 0.222,-0.259 0.603,0.515 -0.223,0.261 c 2.514,2.214 4.695,4.797 6.457,7.664 l 0.109,-0.066 0.412,0.678 -0.114,0.069 c 1.623,2.787 2.856,5.828 3.624,9.048 l 0.494,-0.12 0.187,0.771 -0.506,0.123 c 0.482,2.26 0.736,4.603 0.736,7.004 0,0.931 -0.039,1.852 -0.113,2.764 l 0.68,0.052 -0.061,0.791 -0.694,-0.053 c -0.367,3.463 -1.262,6.771 -2.604,9.841 z"
            id="path425"
          />
        </g>
        <g id="g427">
          <path
            d="m 200.134,376.926 c -1.889,-4.466 -4.592,-8.476 -8.036,-11.919 -3.443,-3.443 -7.453,-6.147 -11.919,-8.035 -4.624,-1.956 -9.535,-2.948 -14.597,-2.948 -5.061,0 -9.973,0.992 -14.597,2.948 -4.465,1.889 -8.476,4.592 -11.919,8.035 -3.443,3.443 -6.147,7.453 -8.036,11.919 -1.956,4.624 -2.948,9.535 -2.948,14.597 0,5.061 0.992,9.972 2.948,14.597 1.889,4.466 4.592,8.476 8.036,11.919 3.443,3.443 7.453,6.147 11.919,8.035 4.624,1.956 9.535,2.948 14.597,2.948 5.061,0 9.973,-0.992 14.597,-2.948 4.465,-1.889 8.476,-4.592 11.919,-8.035 3.443,-3.443 6.147,-7.453 8.036,-11.919 1.956,-4.624 2.948,-9.535 2.948,-14.597 -0.001,-5.062 -0.992,-9.973 -2.948,-14.597 z m -1.256,28.662 c -1.82,4.303 -4.425,8.167 -7.744,11.486 -3.318,3.318 -7.183,5.924 -11.486,7.744 -4.455,1.884 -9.188,2.84 -14.066,2.84 -4.878,0 -9.611,-0.956 -14.066,-2.84 -4.303,-1.82 -8.167,-4.426 -11.486,-7.744 -3.318,-3.318 -5.924,-7.183 -7.744,-11.486 -1.885,-4.455 -2.84,-9.188 -2.84,-14.066 0,-4.878 0.956,-9.61 2.84,-14.066 1.82,-4.303 4.425,-8.167 7.744,-11.486 3.318,-3.318 7.183,-5.924 11.486,-7.744 4.455,-1.884 9.188,-2.84 14.066,-2.84 4.878,0 9.61,0.956 14.066,2.84 4.303,1.82 8.168,4.425 11.486,7.744 3.318,3.318 5.924,7.183 7.744,11.486 1.885,4.455 2.84,9.188 2.84,14.066 0,4.879 -0.955,9.611 -2.84,14.066 z"
            id="path426"
          />
        </g>
        <g id="g428">
          <polygon
            points="164.865,390.583 165.105,390.605 165.278,390.448 165.372,390.478 168.143,360.092 167.649,360.049 164.911,390.08 165.013,390.512 164.868,390.546 "
            id="polygon427"
          />
        </g>
        <g id="g429">
          <polygon
            points="168.299,360.105 168.469,358.113 168.481,357.974 167.691,357.906 167.678,358.054 167.509,360.038 167.649,360.049 168.143,360.092 "
            id="polygon428"
          />
        </g>
        <g id="g430">
          <rect
            x="156.40601"
            y="375.90302"
            transform="matrix(0.3888,-0.9213,0.9213,0.3888,-241.5902,388.1507)"
            width="30.662001"
            height="0.49599999"
            id="rect429"
          />
        </g>
        <g id="g431">
          <polygon
            points="178.068,362.18 178.698,360.661 178.888,360.204 178.155,359.901 177.965,360.359 177.335,361.876 177.465,361.93 177.923,362.12 "
            id="polygon430"
          />
        </g>
        <g id="g432">
          <polygon
            points="186.431,367.616 186.054,367.294 165.992,390.48 166.354,390.792 166.372,390.798 "
            id="polygon431"
          />
        </g>
        <g id="g433">
          <polygon
            points="186.55,367.718 187.717,366.353 187.94,366.092 187.337,365.577 187.116,365.836 185.947,367.203 186.054,367.294 186.431,367.616 "
            id="polygon432"
          />
        </g>
        <g id="g434">
          <polygon
            points="166.429,390.833 166.54,391.345 192.785,375.605 192.528,375.182 "
            id="polygon433"
          />
        </g>
        <g id="g435">
          <polygon
            points="192.867,375.739 194.581,374.698 194.695,374.628 194.283,373.951 194.174,374.017 192.455,375.062 192.528,375.182 192.785,375.605 "
            id="polygon434"
          />
        </g>
        <g id="g436">
          <rect
            x="166.461"
            y="387.785"
            transform="matrix(0.9732,-0.23,0.23,0.9732,-84.3682,52.2105)"
            width="30.662001"
            height="0.49599999"
            id="rect435"
          />
        </g>
        <g id="g437">
          <polygon
            points="196.807,384.9 198.38,384.519 198.886,384.396 198.699,383.625 198.205,383.745 196.62,384.13 196.653,384.266 196.77,384.748 "
            id="polygon436"
          />
        </g>
        <g id="g438">
          <polygon
            points="166.982,391.8 166.957,392.11 167.47,392.337 197.501,394.81 197.539,394.316 "
            id="polygon437"
          />
        </g>
        <g id="g439">
          <polygon
            points="197.489,394.966 198.928,395.076 199.622,395.129 199.683,394.339 199.003,394.286 197.55,394.175 197.539,394.316 197.501,394.81 "
            id="polygon438"
          />
        </g>
        <g id="g440">
          <polygon
            points="188.934,412.937 189.263,412.566 167.078,392.706 166.587,392.489 166.658,392.329 166.482,392.172 166.113,392.507 "
            id="polygon439"
          />
        </g>
        <g id="g441">
          <polygon
            points="188.831,413.054 190.202,414.267 190.433,414.472 190.958,413.878 190.733,413.679 189.356,412.46 189.263,412.566 188.934,412.937 "
            id="polygon440"
          />
        </g>
        <g id="g442">
          <polygon
            points="166.085,392.533 165.788,392.802 165.729,392.783 165.77,392.975 180.98,419.007 181.406,418.754 "
            id="polygon441"
          />
        </g>
        <g id="g443">
          <polygon
            points="180.845,419.087 181.875,420.825 181.935,420.927 182.617,420.523 182.563,420.431 181.527,418.683 181.406,418.754 180.98,419.007 "
            id="polygon442"
          />
        </g>
        <g id="g444">
          <polygon
            points="165.77,392.975 165.729,392.783 165.355,392.663 165.313,393.214 171.568,422.604 172.052,422.498 "
            id="polygon443"
          />
        </g>
        <g id="g445">
          <polygon
            points="171.415,422.637 171.817,424.474 171.872,424.727 172.647,424.557 172.594,424.318 172.189,422.468 172.052,422.498 171.568,422.604 "
            id="polygon444"
          />
        </g>
        <g id="g446">
          <polygon
            points="163.057,423.033 165.313,393.214 165.355,392.663 165.087,392.577 164.817,393.202 162.562,422.998 "
            id="polygon445"
          />
        </g>
        <g id="g447">
          <polygon
            points="162.406,422.987 162.273,424.893 162.257,425.121 163.048,425.177 163.063,424.962 163.197,423.043 163.057,423.033 162.562,422.998 "
            id="polygon446"
          />
        </g>
        <g id="g448">
          <polygon
            points="164.817,393.202 165.087,392.577 164.839,392.498 164.334,393.072 152.565,420.36 153.021,420.553 "
            id="polygon447"
          />
        </g>
        <g id="g449">
          <polygon
            points="152.42,420.299 151.683,422.037 151.585,422.268 152.315,422.578 152.408,422.358 153.15,420.608 153.021,420.553 152.565,420.36 "
            id="polygon448"
          />
        </g>
        <g id="g450">
          <polygon
            points="164.561,392.063 164.437,392.204 164.566,392.42 163.898,392.817 144.35,415.043 144.724,415.368 164.334,393.072 164.839,392.498 164.641,392.434 "
            id="polygon449"
          />
        </g>
        <g id="g451">
          <polygon
            points="144.232,414.94 143.032,416.32 142.828,416.555 143.427,417.075 143.625,416.847 144.83,415.461 144.724,415.368 144.35,415.043 "
            id="polygon450"
          />
        </g>
        <g id="g452">
          <polygon
            points="166.587,392.489 167.078,392.706 194.636,404.877 194.834,404.422 167.47,392.337 166.957,392.11 166.787,392.035 166.658,392.329 "
            id="polygon451"
          />
        </g>
        <g id="g453">
          <polygon
            points="194.574,405.021 195.997,405.64 196.536,405.874 196.852,405.146 196.324,404.917 194.89,404.293 194.834,404.422 194.636,404.877 "
            id="polygon452"
          />
        </g>
        <g id="g454">
          <polygon
            points="137.947,407.65 138.203,408.074 163.898,392.817 164.566,392.42 164.437,392.204 164.395,392.134 163.905,392.236 "
            id="polygon453"
          />
        </g>
        <g id="g455">
          <polygon
            points="137.866,407.515 136.558,408.302 136.033,408.618 136.442,409.298 136.964,408.984 138.275,408.195 138.203,408.074 137.947,407.65 "
            id="polygon454"
          />
        </g>
        <g id="g456">
          <polygon
            points="134.394,397.906 134.498,398.391 163.905,392.236 164.395,392.134 164.508,392.11 164.46,391.879 163.557,391.803 "
            id="polygon455"
          />
        </g>
        <g id="g457">
          <polygon
            points="134.361,397.753 132.7,398.111 132.27,398.203 132.437,398.979 132.865,398.887 134.528,398.528 134.498,398.391 134.394,397.906 "
            id="polygon456"
          />
        </g>
        <g id="g458">
          <polygon
            points="164.522,391.884 164.443,391.519 164.323,391.469 164.268,391.532 164.079,391.366 164.028,391.345 134.115,388.827 134.076,389.321 163.557,391.803 164.46,391.879 "
            id="polygon457"
          />
        </g>
        <g id="g459">
          <polygon
            points="134.127,388.67 132.183,388.518 131.994,388.503 131.932,389.294 132.122,389.309 134.065,389.461 134.076,389.321 134.115,388.827 "
            id="polygon458"
          />
        </g>
        <g id="g460">
          <polygon
            points="164.443,391.519 164.411,391.37 164.323,391.469 "
            id="polygon459"
          />
        </g>
        <g id="g461">
          <polygon
            points="162.913,390.339 136.541,379.266 136.352,379.724 164.028,391.345 164.079,391.366 "
            id="polygon460"
          />
        </g>
        <g id="g462">
          <polygon
            points="136.601,379.121 134.744,378.354 134.624,378.304 134.321,379.037 134.441,379.086 136.298,379.854 136.352,379.724 136.541,379.266 "
            id="polygon461"
          />
        </g>
        <g id="g463">
          <polygon
            points="162.913,390.339 164.079,391.366 164.268,391.532 164.323,391.469 164.411,391.37 164.386,391.257 164.523,391.133 164.406,391.203 164.135,390.755 141.586,370.892 141.26,371.266 "
            id="polygon462"
          />
        </g>
        <g id="g464">
          <polygon
            points="141.689,370.774 140.276,369.544 140.075,369.369 139.554,369.967 139.763,370.149 141.168,371.372 141.26,371.266 141.586,370.892 "
            id="polygon463"
          />
        </g>
        <g id="g465">
          <polygon
            points="164.523,391.133 164.794,390.887 164.623,390.604 164.531,390.625 164.462,390.338 148.979,364.699 148.556,364.958 164.135,390.755 164.406,391.203 "
            id="polygon464"
          />
        </g>
        <g id="g466">
          <polygon
            points="149.113,364.617 148.08,362.93 147.996,362.793 147.32,363.207 147.409,363.353 148.436,365.031 148.556,364.958 148.979,364.699 "
            id="polygon465"
          />
        </g>
        <g id="g467">
          <polygon
            points="165.013,390.512 164.911,390.08 157.957,360.671 157.476,360.788 164.462,390.338 164.531,390.625 164.623,390.604 164.868,390.546 "
            id="polygon466"
          />
        </g>
        <g id="g468">
          <polygon
            points="158.11,360.634 157.695,358.927 157.605,358.555 156.835,358.742 156.927,359.122 157.339,360.821 157.476,360.788 157.957,360.671 "
            id="polygon467"
          />
        </g>
      </g>
    </svg>
  );
});
