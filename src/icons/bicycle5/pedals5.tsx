import React, {CSSProperties} from 'react';
import cn from 'classnames';
import {IIconProps} from '../iconTypes';

export const Pedals5 = React.memo(function Pedals5({
  className,
  color,
  x,
  y,
  onClick,
  width = 100,
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
      height={`${width}px`}
      style={style}
      fill={color}
      className={cn('rotate', className)}
      viewBox="0 0 5.8595943 10.653977"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g5305"
        transform="matrix(0.26458333,0,0,0.26458333,-24.627351,-21.624131)"
      >
        <path
          d="m 103.328,120.372 1.562,-14.601 c 0.012,-0.178 0.032,-0.733 -0.23,-1.183 -0.11,-0.19 -0.236,-0.301 -0.278,-0.337 -0.205,-0.174 -0.407,-0.217 -0.518,-0.23 v 0 c -0.66,-0.07 -1.277,0.602 -1.373,1.494 l -1.562,14.601 c -0.095,0.892 0.366,1.68 1.026,1.751 v 0 c 0.66,0.07 1.277,-0.602 1.373,-1.495 z m -1.568,0.857 c -0.399,-0.175 -0.581,-0.64 -0.406,-1.039 0.175,-0.399 0.64,-0.58 1.039,-0.406 0.399,0.175 0.58,0.64 0.406,1.039 -0.175,0.399 -0.64,0.581 -1.039,0.406 z"
          id="path5304"
        />
      </g>
      <g
        id="g5307"
        transform="matrix(0.26458333,0,0,0.26458333,-24.627351,-21.624131)"
      >
        <g id="g5306">
          <path
            d="m 107.4,117.427 -10.652,0.008 c -0.383,0 -0.693,0.262 -0.693,0.584 l 0.003,3.394 c 0,0.322 0.311,0.583 0.694,0.583 l 10.651,-0.008 c 0.383,0 0.693,-0.262 0.693,-0.584 l -0.003,-3.394 c 10e-4,-0.322 -0.31,-0.583 -0.693,-0.583 z m -6.814,3.614 c 0,0.159 -0.153,0.288 -0.342,0.288 l -3.053,0.002 c -0.189,0 -0.342,-0.129 -0.343,-0.288 l -0.001,-0.607 c 0,-0.159 0.153,-0.288 0.342,-0.288 l 3.053,-0.002 c 0.189,0 0.343,0.129 0.343,0.288 z m 1.509,0.114 c -0.436,0 -0.789,-0.297 -0.789,-0.663 0,-0.367 0.352,-0.664 0.788,-0.664 0.436,0 0.789,0.297 0.789,0.663 0.001,0.366 -0.352,0.663 -0.788,0.664 z m 5.179,-0.119 c 0,0.159 -0.153,0.288 -0.342,0.288 l -3.053,0.002 c -0.189,0 -0.343,-0.129 -0.343,-0.288 l -0.001,-0.607 c 0,-0.159 0.153,-0.288 0.342,-0.289 l 3.053,-0.002 c 0.189,0 0.343,0.129 0.343,0.288 z m 0.135,-1.934 c 0,0.159 -0.153,0.288 -0.342,0.288 l -9.878,0.007 c -0.189,0 -0.343,-0.129 -0.343,-0.288 l -0.001,-0.607 c 0,-0.159 0.153,-0.288 0.342,-0.288 l 9.878,-0.007 c 0.189,0 0.343,0.129 0.343,0.288 z"
            id="path5305"
          />
        </g>
      </g>
      <g
        id="g5308"
        transform="matrix(0.26458333,0,0,0.26458333,-24.627351,-21.624131)"
      >
        <path
          d="m 104.929,83.357 -1.562,14.601 c -0.012,0.178 -0.032,0.733 0.23,1.184 0.11,0.19 0.236,0.301 0.278,0.337 0.205,0.174 0.407,0.217 0.518,0.23 v 0 c 0.66,0.071 1.277,-0.602 1.373,-1.494 l 1.562,-14.601 c 0.095,-0.892 -0.366,-1.68 -1.026,-1.751 v 0 c -0.66,-0.07 -1.278,0.602 -1.373,1.494 z m 1.567,-0.856 c 0.399,0.175 0.581,0.64 0.406,1.039 -0.175,0.399 -0.64,0.581 -1.039,0.406 -0.399,-0.175 -0.581,-0.64 -0.406,-1.039 0.175,-0.4 0.64,-0.581 1.039,-0.406 z"
          id="path5307"
        />
      </g>
      <g
        id="g5310"
        transform="matrix(0.26458333,0,0,0.26458333,-24.627351,-21.624131)"
      >
        <g id="g5309">
          <path
            d="m 100.852,86.29 10.652,0.005 c 0.383,0 0.693,-0.261 0.694,-0.583 l 0.002,-3.394 c 0,-0.322 -0.31,-0.584 -0.693,-0.584 l -10.652,-0.005 c -0.383,0 -0.693,0.261 -0.694,0.583 l -0.002,3.394 c 0,0.322 0.31,0.583 0.693,0.584 z m 6.82,-3.605 c 0,-0.159 0.154,-0.288 0.343,-0.288 l 3.053,10e-4 c 0.189,0 0.342,0.129 0.342,0.288 v 0.607 c 0,0.159 -0.154,0.288 -0.343,0.288 l -3.053,-0.001 c -0.189,0 -0.342,-0.129 -0.342,-0.288 z m -1.509,-0.116 c 0.436,0 0.789,0.298 0.788,0.664 0,0.367 -0.354,0.664 -0.789,0.663 -0.436,0 -0.789,-0.298 -0.788,-0.664 0,-0.366 0.354,-0.664 0.789,-0.663 z m -5.178,0.112 c 0,-0.159 0.154,-0.288 0.343,-0.288 l 3.053,0.001 c 0.189,0 0.342,0.129 0.342,0.288 v 0.607 c 0,0.159 -0.154,0.288 -0.343,0.288 l -3.053,-0.002 c -0.189,0 -0.342,-0.129 -0.342,-0.288 z m -0.139,1.934 c 0,-0.159 0.153,-0.288 0.343,-0.288 l 9.878,0.005 c 0.189,0 0.342,0.129 0.342,0.288 v 0.607 c 0,0.159 -0.154,0.288 -0.343,0.288 l -9.878,-0.005 c -0.189,0 -0.342,-0.129 -0.342,-0.288 z"
            id="path5308"
          />
        </g>
      </g>
      <g
        id="g5337"
        transform="matrix(0.26458333,0,0,0.26458333,-24.627351,-21.624131)"
      >
        <g id="g5335">
          <polygon
            points="112.693,103.768 112.692,103.768 112.692,103.769 "
            id="polygon5334"
          />
        </g>
        <g id="g5336">
          <path
            d="m 115.122,102.835 c -0.055,-0.048 -0.145,-0.112 -0.28,-0.219 -0.348,-0.273 -0.41,-0.386 -0.509,-0.402 0.003,-0.095 0.004,-0.189 0.005,-0.284 0.074,-0.014 0.13,-0.089 0.352,-0.257 0.359,-0.284 0.544,-0.333 0.536,-0.455 -0.004,-0.089 -0.109,-0.113 -0.406,-0.283 -0.217,-0.123 -0.335,-0.207 -0.418,-0.258 -0.064,-0.039 -0.104,-0.059 -0.148,-0.059 -0.012,-0.094 -0.025,-0.187 -0.04,-0.281 0.072,-0.025 0.118,-0.108 0.306,-0.309 0.312,-0.337 0.491,-0.416 0.461,-0.534 -0.022,-0.086 -0.127,-0.094 -0.445,-0.216 -0.23,-0.089 -0.365,-0.151 -0.455,-0.189 -0.068,-0.028 -0.111,-0.042 -0.153,-0.036 -0.027,-0.091 -0.054,-0.181 -0.083,-0.271 0.068,-0.035 0.094,-0.122 0.253,-0.353 0.261,-0.384 0.417,-0.486 0.371,-0.598 -0.035,-0.082 -0.139,-0.073 -0.47,-0.145 -0.433,-0.084 -0.543,-0.155 -0.638,-0.126 -0.04,-0.085 -0.082,-0.171 -0.125,-0.255 0.061,-0.046 0.074,-0.137 0.196,-0.389 0.102,-0.21 0.179,-0.344 0.232,-0.442 0.051,-0.097 0.072,-0.154 0.04,-0.207 -0.023,-0.038 -0.06,-0.051 -0.133,-0.057 -0.072,-0.006 -0.183,-0.005 -0.355,-0.013 -0.442,-0.017 -0.558,-0.072 -0.648,-0.026 -0.053,-0.078 -0.108,-0.156 -0.163,-0.232 0.052,-0.055 0.054,-0.148 0.134,-0.415 0.124,-0.441 0.245,-0.589 0.168,-0.683 -0.056,-0.069 -0.156,-0.026 -0.495,0.009 -0.433,0.048 -0.562,0.017 -0.644,0.075 -0.065,-0.069 -0.13,-0.137 -0.197,-0.204 0.044,-0.062 0.031,-0.155 0.066,-0.43 0.029,-0.228 0.066,-0.385 0.086,-0.493 0.02,-0.109 0.022,-0.17 -0.026,-0.209 -0.069,-0.057 -0.158,-0.002 -0.487,0.086 -0.238,0.063 -0.385,0.093 -0.48,0.115 -0.071,0.017 -0.114,0.031 -0.145,0.061 -0.075,-0.058 -0.15,-0.114 -0.227,-0.17 0.034,-0.068 0.004,-0.154 -0.003,-0.434 -0.014,-0.464 0.052,-0.639 -0.052,-0.702 -0.076,-0.046 -0.156,0.022 -0.466,0.159 -0.398,0.185 -0.53,0.194 -0.59,0.274 -0.083,-0.045 -0.166,-0.089 -0.251,-0.132 0.022,-0.072 -0.021,-0.153 -0.071,-0.429 -0.021,-0.114 -0.035,-0.211 -0.045,-0.294 -0.011,-0.081 -0.019,-0.148 -0.026,-0.201 -0.016,-0.108 -0.033,-0.166 -0.09,-0.189 -0.082,-0.033 -0.149,0.045 -0.435,0.229 -0.366,0.248 -0.493,0.274 -0.54,0.363 -0.043,-0.015 -0.086,-0.031 -0.129,-0.046 -0.046,-0.016 -0.093,-0.031 -0.139,-0.046 0.011,-0.075 -0.044,-0.149 -0.136,-0.413 -0.076,-0.22 -0.116,-0.373 -0.148,-0.477 -0.032,-0.104 -0.058,-0.159 -0.118,-0.174 -0.087,-0.02 -0.14,0.066 -0.394,0.294 -0.324,0.301 -0.445,0.346 -0.478,0.441 -0.093,-0.018 -0.186,-0.034 -0.28,-0.049 -0.002,-0.076 -0.067,-0.141 -0.199,-0.388 -0.11,-0.205 -0.173,-0.347 -0.221,-0.447 -0.048,-0.099 -0.082,-0.149 -0.144,-0.154 -0.045,-0.004 -0.076,0.018 -0.124,0.074 -0.048,0.055 -0.112,0.145 -0.219,0.28 -0.273,0.348 -0.386,0.41 -0.402,0.509 -0.095,-0.003 -0.189,-0.004 -0.284,-0.005 -0.014,-0.074 -0.089,-0.13 -0.257,-0.352 -0.284,-0.359 -0.333,-0.544 -0.455,-0.536 -0.089,0.004 -0.113,0.109 -0.283,0.406 -0.123,0.217 -0.207,0.335 -0.258,0.418 -0.039,0.064 -0.059,0.104 -0.059,0.148 -0.094,0.012 -0.187,0.025 -0.281,0.04 -0.025,-0.072 -0.108,-0.118 -0.309,-0.306 -0.337,-0.312 -0.416,-0.491 -0.534,-0.461 -0.086,0.022 -0.094,0.127 -0.216,0.445 -0.088,0.23 -0.151,0.365 -0.189,0.455 -0.028,0.068 -0.042,0.111 -0.036,0.153 -0.091,0.026 -0.181,0.054 -0.271,0.083 -0.035,-0.068 -0.122,-0.094 -0.353,-0.253 -0.384,-0.261 -0.486,-0.418 -0.598,-0.371 -0.082,0.035 -0.073,0.139 -0.145,0.47 -0.084,0.433 -0.155,0.543 -0.126,0.639 -0.085,0.04 -0.17,0.082 -0.255,0.125 -0.046,-0.061 -0.137,-0.074 -0.389,-0.196 -0.21,-0.102 -0.344,-0.179 -0.442,-0.232 -0.097,-0.051 -0.154,-0.072 -0.207,-0.04 -0.038,0.023 -0.051,0.06 -0.057,0.133 -0.006,0.072 -0.005,0.183 -0.013,0.355 -0.017,0.442 -0.072,0.558 -0.026,0.648 -0.078,0.053 -0.156,0.108 -0.232,0.163 -0.055,-0.052 -0.148,-0.054 -0.415,-0.134 -0.441,-0.124 -0.589,-0.246 -0.683,-0.168 -0.069,0.056 -0.026,0.156 0.009,0.495 0.048,0.433 0.017,0.562 0.075,0.644 -0.069,0.065 -0.137,0.13 -0.204,0.197 -0.062,-0.044 -0.155,-0.031 -0.43,-0.066 -0.228,-0.029 -0.385,-0.066 -0.493,-0.086 -0.109,-0.02 -0.17,-0.022 -0.209,0.026 -0.057,0.069 -0.001,0.158 0.086,0.487 0.063,0.238 0.093,0.385 0.115,0.48 0.017,0.071 0.031,0.114 0.061,0.145 -0.058,0.075 -0.114,0.15 -0.17,0.227 -0.068,-0.034 -0.154,-0.004 -0.434,0.003 -0.464,0.014 -0.639,-0.052 -0.702,0.052 -0.046,0.076 0.022,0.156 0.159,0.466 0.185,0.398 0.194,0.53 0.274,0.59 -0.045,0.083 -0.089,0.166 -0.132,0.251 -0.072,-0.022 -0.153,0.021 -0.429,0.071 -0.114,0.021 -0.211,0.035 -0.294,0.045 -0.08,0.011 -0.148,0.019 -0.201,0.026 -0.108,0.016 -0.166,0.033 -0.189,0.09 -0.033,0.082 0.045,0.149 0.229,0.435 0.248,0.366 0.274,0.493 0.363,0.54 -0.015,0.043 -0.031,0.086 -0.046,0.129 -0.016,0.046 -0.031,0.093 -0.046,0.139 -0.075,-0.01 -0.149,0.044 -0.413,0.136 -0.22,0.076 -0.373,0.116 -0.477,0.147 -0.104,0.032 -0.159,0.058 -0.174,0.118 -0.02,0.087 0.066,0.14 0.294,0.394 0.301,0.324 0.346,0.445 0.441,0.478 -0.018,0.093 -0.034,0.186 -0.049,0.28 -0.076,0.001 -0.141,0.067 -0.388,0.199 -0.205,0.11 -0.347,0.173 -0.447,0.221 -0.099,0.048 -0.149,0.082 -0.154,0.144 -0.004,0.045 0.018,0.076 0.074,0.124 0.055,0.048 0.145,0.112 0.28,0.219 0.348,0.273 0.41,0.386 0.509,0.402 -0.003,0.095 -0.004,0.189 -0.005,0.284 -0.074,0.014 -0.13,0.089 -0.352,0.257 -0.359,0.284 -0.544,0.333 -0.536,0.455 0.004,0.089 0.109,0.113 0.406,0.283 0.217,0.123 0.335,0.207 0.418,0.258 0.064,0.039 0.104,0.059 0.148,0.059 0.012,0.094 0.025,0.187 0.04,0.281 -0.072,0.025 -0.118,0.108 -0.306,0.309 -0.312,0.337 -0.491,0.416 -0.461,0.534 0.022,0.086 0.127,0.094 0.445,0.216 0.23,0.088 0.365,0.151 0.455,0.189 0.068,0.028 0.111,0.042 0.153,0.036 0.026,0.091 0.054,0.181 0.083,0.271 -0.068,0.035 -0.094,0.122 -0.253,0.353 -0.261,0.384 -0.417,0.486 -0.371,0.598 0.035,0.082 0.139,0.073 0.47,0.145 0.433,0.084 0.543,0.155 0.638,0.126 0.04,0.086 0.082,0.171 0.125,0.255 -0.06,0.046 -0.074,0.137 -0.196,0.389 -0.102,0.21 -0.179,0.344 -0.232,0.442 -0.051,0.097 -0.072,0.154 -0.04,0.207 0.023,0.038 0.06,0.051 0.133,0.057 0.072,0.006 0.183,0.005 0.355,0.013 0.442,0.017 0.558,0.072 0.648,0.026 0.053,0.078 0.108,0.156 0.163,0.232 -0.052,0.055 -0.054,0.149 -0.134,0.415 -0.124,0.441 -0.246,0.589 -0.168,0.683 0.056,0.069 0.156,0.026 0.495,-0.009 0.433,-0.048 0.562,-0.017 0.644,-0.075 0.065,0.069 0.13,0.137 0.197,0.204 -0.044,0.062 -0.031,0.155 -0.066,0.43 -0.029,0.228 -0.066,0.385 -0.086,0.493 -0.02,0.109 -0.022,0.17 0.026,0.209 0.069,0.057 0.158,0.002 0.487,-0.086 0.238,-0.063 0.385,-0.093 0.48,-0.115 0.071,-0.017 0.114,-0.031 0.145,-0.061 0.075,0.058 0.15,0.114 0.227,0.17 -0.034,0.068 -0.004,0.154 0.003,0.434 0.015,0.464 -0.052,0.639 0.052,0.702 0.076,0.046 0.156,-0.023 0.466,-0.159 0.398,-0.185 0.53,-0.194 0.59,-0.274 0.083,0.045 0.166,0.089 0.251,0.132 -0.022,0.073 0.02,0.153 0.071,0.429 0.021,0.114 0.035,0.211 0.045,0.294 0.011,0.08 0.019,0.148 0.026,0.201 0.016,0.108 0.033,0.166 0.09,0.189 0.082,0.033 0.149,-0.045 0.435,-0.229 0.366,-0.248 0.493,-0.274 0.54,-0.363 0.043,0.015 0.086,0.031 0.129,0.046 0.046,0.016 0.093,0.031 0.139,0.046 -0.011,0.075 0.044,0.149 0.136,0.413 0.076,0.22 0.116,0.373 0.148,0.477 0.032,0.104 0.058,0.159 0.118,0.174 0.087,0.02 0.14,-0.066 0.394,-0.294 0.324,-0.301 0.445,-0.346 0.478,-0.441 0.093,0.018 0.186,0.034 0.28,0.049 0.001,0.076 0.067,0.141 0.198,0.388 0.11,0.205 0.173,0.347 0.221,0.447 0.048,0.098 0.082,0.149 0.144,0.154 0.045,0.004 0.076,-0.018 0.124,-0.074 0.048,-0.055 0.112,-0.145 0.219,-0.28 0.274,-0.348 0.386,-0.41 0.402,-0.509 0.095,0.003 0.189,0.004 0.284,0.004 0.014,0.074 0.089,0.13 0.257,0.352 0.284,0.359 0.333,0.544 0.455,0.536 0.089,-0.004 0.113,-0.109 0.283,-0.406 0.123,-0.217 0.207,-0.335 0.258,-0.418 0.039,-0.064 0.059,-0.104 0.059,-0.148 0.094,-0.012 0.187,-0.025 0.281,-0.04 0.025,0.072 0.108,0.118 0.309,0.306 0.337,0.312 0.416,0.491 0.534,0.461 0.086,-0.022 0.094,-0.127 0.216,-0.445 0.089,-0.23 0.151,-0.365 0.189,-0.455 0.028,-0.068 0.042,-0.111 0.036,-0.153 0.091,-0.027 0.181,-0.054 0.271,-0.083 0.035,0.068 0.122,0.094 0.353,0.253 0.384,0.261 0.486,0.418 0.598,0.371 0.082,-0.035 0.073,-0.139 0.145,-0.47 0.084,-0.433 0.155,-0.543 0.126,-0.638 0.086,-0.04 0.171,-0.082 0.255,-0.125 0.046,0.061 0.137,0.074 0.389,0.196 0.21,0.102 0.344,0.179 0.442,0.232 0.097,0.051 0.154,0.072 0.207,0.04 0.038,-0.023 0.051,-0.06 0.057,-0.133 0.006,-0.072 0.005,-0.183 0.013,-0.355 0.017,-0.442 0.072,-0.558 0.026,-0.648 0.078,-0.053 0.156,-0.108 0.232,-0.163 0.055,0.052 0.148,0.054 0.415,0.134 0.441,0.124 0.589,0.245 0.683,0.168 0.069,-0.056 0.026,-0.156 -0.009,-0.495 -0.048,-0.433 -0.017,-0.562 -0.075,-0.644 0.069,-0.065 0.137,-0.13 0.204,-0.197 0.062,0.045 0.155,0.032 0.43,0.066 0.228,0.029 0.385,0.066 0.493,0.086 0.109,0.02 0.17,0.022 0.209,-0.026 0.057,-0.069 0.002,-0.158 -0.086,-0.487 -0.063,-0.238 -0.093,-0.385 -0.115,-0.48 -0.017,-0.071 -0.031,-0.114 -0.061,-0.145 0.058,-0.075 0.114,-0.15 0.17,-0.227 0.068,0.034 0.154,0.004 0.434,-0.003 0.464,-0.014 0.639,0.052 0.702,-0.052 0.046,-0.076 -0.023,-0.156 -0.159,-0.466 -0.185,-0.398 -0.194,-0.53 -0.274,-0.59 0.045,-0.083 0.089,-0.166 0.132,-0.251 0.073,0.022 0.154,-0.021 0.429,-0.071 0.114,-0.021 0.211,-0.035 0.294,-0.046 0.081,-0.01 0.148,-0.019 0.201,-0.026 0.108,-0.016 0.166,-0.033 0.189,-0.09 0.033,-0.082 -0.045,-0.149 -0.229,-0.435 -0.248,-0.366 -0.274,-0.493 -0.363,-0.54 0.015,-0.043 0.031,-0.086 0.046,-0.129 0.016,-0.046 0.031,-0.093 0.046,-0.139 0.075,0.01 0.149,-0.044 0.413,-0.136 0.22,-0.076 0.373,-0.116 0.477,-0.147 0.104,-0.032 0.159,-0.058 0.174,-0.118 0.02,-0.087 -0.066,-0.14 -0.294,-0.394 -0.301,-0.324 -0.346,-0.445 -0.441,-0.478 0.018,-0.093 0.034,-0.186 0.049,-0.28 0.076,-0.001 0.141,-0.067 0.387,-0.199 0.205,-0.11 0.347,-0.173 0.447,-0.221 0.099,-0.048 0.149,-0.082 0.154,-0.144 0.006,-0.044 -0.017,-0.076 -0.072,-0.123 z m -7.825,-7.842 c 0.305,0.105 0.467,0.437 0.363,0.742 -0.105,0.305 -0.437,0.467 -0.742,0.363 -0.305,-0.104 -0.467,-0.437 -0.363,-0.742 0.105,-0.306 0.437,-0.468 0.742,-0.363 z m -0.322,-1.356 c 0.004,0.001 0.007,0.003 0.011,0.004 l -0.006,0.014 c -0.218,0.29 -2.256,3.66 -3.803,3.944 -1.506,0.277 -4.316,-1.758 -4.867,-2.069 l -0.097,-0.068 c 2.29,-2.094 5.622,-2.903 8.762,-1.825 z m -7.253,4.605 c 0,-0.23 0.186,-0.416 0.416,-0.416 0.23,0 0.416,0.186 0.416,0.416 0,0.23 -0.186,0.416 -0.416,0.416 -0.23,0 -0.416,-0.186 -0.416,-0.416 z m 0.315,6.41 c 0,0.23 -0.186,0.416 -0.416,0.416 -0.23,0 -0.416,-0.186 -0.416,-0.416 0,-0.23 0.186,-0.416 0.416,-0.416 0.23,-0.001 0.416,0.186 0.416,0.416 z M 97.77,96.406 c 0.105,-0.305 0.437,-0.467 0.742,-0.363 0.305,0.105 0.467,0.437 0.363,0.742 -0.104,0.305 -0.437,0.467 -0.742,0.363 -0.305,-0.104 -0.468,-0.437 -0.363,-0.742 z m -1.616,9.127 c -0.889,-1.963 -1.06,-4.257 -0.305,-6.456 0.307,-0.895 0.746,-1.708 1.286,-2.426 l 0.012,0.011 c -0.008,-0.003 -0.013,-0.004 -0.013,-0.004 0,0 2.729,3.062 2.571,4.755 -0.142,1.527 -3.171,3.773 -3.551,4.12 z m 0.73,0.011 c 0.105,-0.305 0.437,-0.467 0.742,-0.363 0.305,0.104 0.467,0.437 0.363,0.742 -0.104,0.305 -0.437,0.467 -0.742,0.363 -0.305,-0.105 -0.467,-0.438 -0.363,-0.742 z m 4.404,4.66 c -1.811,-0.622 -3.287,-1.779 -4.312,-3.233 0.235,-0.072 3.701,-1.618 5.235,-0.977 1.404,0.587 2.587,4.134 2.817,4.64 -1.225,0.127 -2.498,-0.004 -3.74,-0.43 z m 3.448,-2.968 c 0,-0.23 0.186,-0.416 0.416,-0.416 0.23,0 0.416,0.186 0.416,0.416 0,0.23 -0.186,0.416 -0.416,0.416 -0.23,0 -0.416,-0.186 -0.416,-0.416 z m 1.431,2.366 c -0.105,0.305 -0.437,0.467 -0.742,0.363 -0.305,-0.105 -0.467,-0.437 -0.363,-0.742 0.105,-0.305 0.437,-0.467 0.742,-0.363 0.305,0.105 0.467,0.437 0.363,0.742 z m -0.04,-7.04 c -0.373,1.085 -1.555,1.663 -2.64,1.29 -1.085,-0.373 -1.663,-1.554 -1.291,-2.64 0.373,-1.085 1.555,-1.663 2.64,-1.291 1.085,0.373 1.663,1.555 1.291,2.641 z m 0.11,-4.369 c -0.23,0 -0.416,-0.186 -0.416,-0.416 0,-0.23 0.186,-0.416 0.416,-0.416 0.23,0 0.416,0.186 0.416,0.416 0,0.23 -0.186,0.416 -0.416,0.416 z m 6.178,6.571 c -0.943,2.747 -3.116,4.722 -5.692,5.522 0.007,-0.399 -0.368,-4.126 0.711,-5.311 1.107,-1.217 5.027,-1.176 5.258,-1.201 -0.073,0.331 -0.164,0.661 -0.277,0.99 z m -3.441,-1.973 c 0,-0.23 0.186,-0.416 0.416,-0.416 0.23,0 0.416,0.186 0.416,0.416 0,0.23 -0.186,0.416 -0.416,0.416 -0.23,0 -0.416,-0.186 -0.416,-0.416 z m 2.186,-0.118 c 0.105,-0.305 0.437,-0.467 0.742,-0.363 0.305,0.104 0.467,0.437 0.363,0.742 -0.104,0.305 -0.437,0.467 -0.742,0.363 -0.306,-0.104 -0.468,-0.437 -0.363,-0.742 z m 1.532,1.096 z m 0.198,-1.696 -0.006,0.001 c -0.389,-0.054 -3.907,-0.265 -4.89,-2.3 -0.409,-0.847 -0.059,-2.006 0.197,-3.848 0.091,-0.652 0.199,-1.187 0.28,-1.552 l 0.022,-0.049 c 2.784,1.594 4.452,4.591 4.397,7.748 z"
            id="path5335"
          />
        </g>
      </g>
    </svg>
  );
});